// scripts/export-shopify.js - Complete Shopify Data Exporter
const fs = require('fs');
const path = require('path');
const https = require('https');

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
  SHOPIFY_STORE: process.env.SHOPIFY_STORE || 'descubredesierto',
  SHOPIFY_ADMIN_TOKEN: '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',
  API_VERSION: '2024-01',
  OUTPUT_DIR: './public/shopify-data',
  IMAGES_DIR: './public/shopify-data/images',
  MAX_RETRIES: 3,
  RETRY_DELAY: 2000,
};

// ============================================
// SHOPIFY API CLIENT
// ============================================
class ShopifyExporter {
  constructor(config) {
    this.config = config;
    this.baseUrl = `https://${config.SHOPIFY_STORE}.myshopify.com/admin/api/${config.API_VERSION}`;
    this.headers = {
      'X-Shopify-Access-Token': config.SHOPIFY_ADMIN_TOKEN,
      'Content-Type': 'application/json',
    };
  }

  async request(endpoint, params = {}) {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    return new Promise((resolve, reject) => {
      https.get(url, { headers: this.headers }, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          if (res.statusCode === 200) {
            try {
              resolve(JSON.parse(data));
            } catch (error) {
              reject(new Error(`Failed to parse JSON: ${error.message}`));
            }
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${data}`));
          }
        });
      }).on('error', (error) => {
        reject(error);
      });
    });
  }

  async getAllPages(endpoint, resourceKey, params = {}) {
    let allItems = [];
    let hasNextPage = true;
    let pageInfo = null;

    while (hasNextPage) {
      const queryParams = { ...params, limit: 250 };
      if (pageInfo) {
        queryParams.page_info = pageInfo;
      }

      const response = await this.request(endpoint, queryParams);
      const items = response[resourceKey] || [];
      allItems = allItems.concat(items);

      // Check for pagination
      const linkHeader = response.headers?.link;
      if (linkHeader && linkHeader.includes('rel="next"')) {
        const match = linkHeader.match(/page_info=([^>]+)>/);
        pageInfo = match ? match[1] : null;
      } else {
        hasNextPage = false;
      }

      console.log(`  Fetched ${allItems.length} ${resourceKey}...`);
    }

    return allItems;
  }

  // ============================================
  // EXPORT PRODUCTS
  // ============================================
  async exportProducts() {
    console.log('\n📦 Exporting Products...');
    
    try {
      const products = await this.getAllPages('/products.json', 'products');
      
      // Get detailed info for each product
      const detailedProducts = [];
      for (const product of products) {
        console.log(`  Processing: ${product.title}`);
        
        // Get full product details
        const fullProduct = await this.request(`/products/${product.id}.json`);
        
        // Get metafields
        try {
          const metafields = await this.request(`/products/${product.id}/metafields.json`);
          fullProduct.product.metafields = metafields.metafields || [];
        } catch (error) {
          console.log(`    Warning: Could not fetch metafields for ${product.title}`);
          fullProduct.product.metafields = [];
        }

        detailedProducts.push(fullProduct.product);
        
        // Rate limiting
        await this.sleep(500);
      }

      this.saveJSON('products.json', detailedProducts);
      console.log(`✅ Exported ${detailedProducts.length} products`);
      
      return detailedProducts;
    } catch (error) {
      console.error('❌ Error exporting products:', error.message);
      throw error;
    }
  }

  // ============================================
  // EXPORT COLLECTIONS
  // ============================================
  async exportCollections() {
    console.log('\n📚 Exporting Collections...');
    
    try {
      // Get smart collections
      const smartCollections = await this.getAllPages('/smart_collections.json', 'smart_collections');
      
      // Get custom collections
      const customCollections = await this.getAllPages('/custom_collections.json', 'custom_collections');
      
      const allCollections = [...smartCollections, ...customCollections];

      // Get collection products
      for (const collection of allCollections) {
        try {
          const collects = await this.request(`/collects.json`, { collection_id: collection.id });
          collection.product_ids = collects.collects?.map(c => c.product_id) || [];
        } catch (error) {
          console.log(`    Warning: Could not fetch products for collection ${collection.title}`);
          collection.product_ids = [];
        }
        
        await this.sleep(300);
      }

      this.saveJSON('collections.json', allCollections);
      console.log(`✅ Exported ${allCollections.length} collections`);
      
      return allCollections;
    } catch (error) {
      console.error('❌ Error exporting collections:', error.message);
      throw error;
    }
  }

  // ============================================
  // EXPORT BLOG POSTS
  // ============================================
  async exportBlogs() {
    console.log('\n📝 Exporting Blog Posts...');
    
    try {
      // Get all blogs
      const blogsResponse = await this.request('/blogs.json');
      const blogs = blogsResponse.blogs || [];

      const allPosts = [];

      for (const blog of blogs) {
        console.log(`  Fetching posts from blog: ${blog.title}`);
        const articles = await this.getAllPages(`/blogs/${blog.id}/articles.json`, 'articles');
        
        allPosts.push(...articles.map(article => ({
          ...article,
          blog_title: blog.title,
          blog_handle: blog.handle,
        })));

        await this.sleep(300);
      }

      this.saveJSON('blog-posts.json', allPosts);
      console.log(`✅ Exported ${allPosts.length} blog posts from ${blogs.length} blogs`);
      
      return allPosts;
    } catch (error) {
      console.error('❌ Error exporting blog posts:', error.message);
      throw error;
    }
  }

  // ============================================
  // EXPORT PAGES
  // ============================================
  async exportPages() {
    console.log('\n📄 Exporting Pages...');
    
    try {
      const pages = await this.getAllPages('/pages.json', 'pages');

      this.saveJSON('pages.json', pages);
      console.log(`✅ Exported ${pages.length} pages`);
      
      return pages;
    } catch (error) {
      console.error('❌ Error exporting pages:', error.message);
      throw error;
    }
  }

  // ============================================
  // EXPORT SHOP INFO
  // ============================================
  async exportShopInfo() {
    console.log('\n🏪 Exporting Shop Information...');
    
    try {
      const shopResponse = await this.request('/shop.json');
      const shop = shopResponse.shop;

      this.saveJSON('shop.json', shop);
      console.log(`✅ Exported shop information`);
      
      return shop;
    } catch (error) {
      console.error('❌ Error exporting shop info:', error.message);
      throw error;
    }
  }

  // ============================================
  // DOWNLOAD IMAGES
  // ============================================
  async downloadImage(url, filename) {
    const filepath = path.join(this.config.IMAGES_DIR, filename);
    
    // Skip if already downloaded
    if (fs.existsSync(filepath)) {
      return filepath;
    }

    return new Promise((resolve, reject) => {
      https.get(url, (response) => {
        if (response.statusCode === 200) {
          const fileStream = fs.createWriteStream(filepath);
          response.pipe(fileStream);
          
          fileStream.on('finish', () => {
            fileStream.close();
            resolve(filepath);
          });
        } else {
          reject(new Error(`Failed to download image: ${response.statusCode}`));
        }
      }).on('error', (error) => {
        reject(error);
      });
    });
  }

  async downloadAllImages(products, collections, blogPosts) {
    console.log('\n🖼️  Downloading Images...');
    
    const images = [];
    let downloadedCount = 0;
    let skippedCount = 0;

    // Product images
    for (const product of products) {
      if (product.images) {
        for (const image of product.images) {
          images.push({
            url: image.src,
            filename: `product-${product.id}-${image.id}.jpg`,
            type: 'product',
            productId: product.id,
          });
        }
      }
    }

    // Collection images
    for (const collection of collections) {
      if (collection.image) {
        images.push({
          url: collection.image.src,
          filename: `collection-${collection.id}.jpg`,
          type: 'collection',
          collectionId: collection.id,
        });
      }
    }

    // Blog post images
    for (const post of blogPosts) {
      if (post.image) {
        images.push({
          url: post.image.src,
          filename: `blog-${post.id}.jpg`,
          type: 'blog',
          postId: post.id,
        });
      }
    }

    console.log(`  Found ${images.length} total images`);

    // Download images with progress
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      try {
        const filepath = await this.downloadImage(image.url, image.filename);
        
        if (fs.existsSync(filepath)) {
          downloadedCount++;
        } else {
          skippedCount++;
        }

        // Progress update every 10 images
        if ((i + 1) % 10 === 0) {
          console.log(`  Progress: ${i + 1}/${images.length} images processed`);
        }

        // Rate limiting
        await this.sleep(100);
      } catch (error) {
        console.log(`  Warning: Failed to download ${image.filename}: ${error.message}`);
        skippedCount++;
      }
    }

    // Save image mapping
    this.saveJSON('image-mapping.json', images);
    
    console.log(`✅ Downloaded ${downloadedCount} new images (${skippedCount} already existed)`);
    
    return images;
  }

  // ============================================
  // HELPER METHODS
  // ============================================
  saveJSON(filename, data) {
    const filepath = path.join(this.config.OUTPUT_DIR, filename);
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
    console.log(`  Saved: ${filename}`);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ensureDirectories() {
    if (!fs.existsSync(this.config.OUTPUT_DIR)) {
      fs.mkdirSync(this.config.OUTPUT_DIR, { recursive: true });
    }
    if (!fs.existsSync(this.config.IMAGES_DIR)) {
      fs.mkdirSync(this.config.IMAGES_DIR, { recursive: true });
    }
  }
}

// ============================================
// MAIN EXPORT FUNCTION
// ============================================
async function exportAll() {
  console.log('🚀 Starting Shopify Export...\n');
  console.log('Store:', CONFIG.SHOPIFY_STORE);
  console.log('Output:', CONFIG.OUTPUT_DIR);
  // console.log('=''.repeat(50));

  // Validate config
  if (!CONFIG.SHOPIFY_ADMIN_TOKEN) {
    console.error('❌ Error: SHOPIFY_ADMIN_TOKEN not found!');
    console.log('\nPlease set your Shopify Admin API token:');
    console.log('export SHOPIFY_ADMIN_TOKEN="your-token-here"');
    console.log('\nOr create a .env file with:');
    console.log('SHOPIFY_ADMIN_TOKEN=your-token-here');
    process.exit(1);
  }

  const exporter = new ShopifyExporter(CONFIG);
  exporter.ensureDirectories();

  try {
    const startTime = Date.now();

    // Export all data
    const products = await exporter.exportProducts();
    const collections = await exporter.exportCollections();
    const blogPosts = await exporter.exportBlogs();
    const pages = await exporter.exportPages();
    const shop = await exporter.exportShopInfo();
    
    // Download images
    await exporter.downloadAllImages(products, collections, blogPosts);

    // Create summary
    const summary = {
      exportDate: new Date().toISOString(),
      store: CONFIG.SHOPIFY_STORE,
      counts: {
        products: products.length,
        collections: collections.length,
        blogPosts: blogPosts.length,
        pages: pages.length,
      },
      duration: `${((Date.now() - startTime) / 1000).toFixed(2)}s`,
    };

    exporter.saveJSON('export-summary.json', summary);

    console.log('\n' + '='.repeat(50));
    console.log('✅ EXPORT COMPLETE!');
    console.log('='.repeat(50));
    console.log(`📦 Products: ${summary.counts.products}`);
    console.log(`📚 Collections: ${summary.counts.collections}`);
    console.log(`📝 Blog Posts: ${summary.counts.blogPosts}`);
    console.log(`📄 Pages: ${summary.counts.pages}`);
    console.log(`⏱️  Duration: ${summary.duration}`);
    console.log(`📁 Output: ${CONFIG.OUTPUT_DIR}`);
    console.log('='.repeat(50));

  } catch (error) {
    console.error('\n❌ Export failed:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run export
if (require.main === module) {
  exportAll();
}

module.exports = { ShopifyExporter, exportAll };
