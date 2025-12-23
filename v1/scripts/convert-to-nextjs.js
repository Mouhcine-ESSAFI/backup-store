// scripts/convert-to-nextjs.js - Convert Shopify data to Next.js format
const fs = require('fs');
const path = require('path');

const INPUT_DIR = './public/shopify-data';
const OUTPUT_DIR = './public/data';

// ============================================
// DATA CONVERTER
// ============================================
class DataConverter {
  constructor(inputDir, outputDir) {
    this.inputDir = inputDir;
    this.outputDir = outputDir;
  }

  // Load JSON file
  loadJSON(filename) {
    const filepath = path.join(this.inputDir, filename);
    if (!fs.existsSync(filepath)) {
      console.log(`⚠️  Warning: ${filename} not found, skipping...`);
      return null;
    }
    return JSON.parse(fs.readFileSync(filepath, 'utf8'));
  }

  // Save JSON file
  saveJSON(filename, data) {
    const filepath = path.join(this.outputDir, filename);
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
    console.log(`✅ Saved: ${filename} (${data.length || 1} items)`);
  }

  // Convert Shopify image URL to local path
  convertImageUrl(shopifyUrl, imageMapping) {
    if (!shopifyUrl) return null;
    
    const mapping = imageMapping.find(img => img.url === shopifyUrl);
    if (mapping) {
      return `/shopify-data/images/${mapping.filename}`;
    }
    
    // Fallback: keep original URL
    return shopifyUrl;
  }

  // ============================================
  // CONVERT PRODUCTS
  // ============================================
  convertProducts(products, imageMapping) {
    console.log('\n📦 Converting Products...');
    
    return products.map(product => {
      // Convert images
      const images = {
        edges: (product.images || []).map(img => ({
          node: {
            url: this.convertImageUrl(img.src, imageMapping),
            altText: img.alt || product.title,
            id: img.id,
          }
        }))
      };

      // Get featured image
      const featuredImage = images.edges[0]?.node || null;

      // Convert variants
      const variants = {
        edges: (product.variants || []).map(variant => ({
          node: {
            id: variant.id.toString(),
            title: variant.title,
            priceV2: {
              amount: variant.price,
              currencyCode: 'EUR'
            },
            compareAtPriceV2: variant.compare_at_price ? {
              amount: variant.compare_at_price,
              currencyCode: 'EUR'
            } : null,
            availableForSale: variant.inventory_quantity > 0,
            sku: variant.sku,
            inventoryQuantity: variant.inventory_quantity,
            weight: variant.weight,
            weightUnit: variant.weight_unit,
          }
        }))
      };

      // Price range
      const prices = product.variants.map(v => parseFloat(v.price));
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      const priceRangeV2 = {
        minVariantPrice: {
          amount: minPrice.toFixed(2),
          currencyCode: 'EUR'
        },
        maxVariantPrice: {
          amount: maxPrice.toFixed(2),
          currencyCode: 'EUR'
        }
      };

      // Convert metafields
      const metafields = {
        edges: (product.metafields || []).map(meta => ({
          node: {
            namespace: meta.namespace,
            key: meta.key,
            value: meta.value,
            type: meta.type,
          }
        }))
      };

      // Get rating from metafields
      const ratingMeta = product.metafields?.find(m => m.key === 'rating');
      const reviewCountMeta = product.metafields?.find(m => m.key === 'review_count');

      if (ratingMeta) {
        metafields.edges.push({
          node: {
            key: 'rating',
            value: ratingMeta.value
          }
        });
      }

      if (reviewCountMeta) {
        metafields.edges.push({
          node: {
            key: 'review_count',
            value: reviewCountMeta.value
          }
        });
      }

      return {
        id: product.id.toString(),
        handle: product.handle,
        title: product.title,
        description: product.body_html ? product.body_html.replace(/<[^>]*>/g, '') : '',
        descriptionHtml: product.body_html || '',
        vendor: product.vendor,
        productType: product.product_type,
        tags: product.tags ? product.tags.split(', ') : [],
        createdAt: product.created_at,
        updatedAt: product.updated_at,
        publishedAt: product.published_at,
        availableForSale: product.variants.some(v => v.inventory_quantity > 0),
        images,
        featuredImage,
        variants,
        priceRangeV2,
        metafields,
        seo: {
          title: product.title,
          description: product.body_html ? product.body_html.replace(/<[^>]*>/g, '').substring(0, 160) : '',
        }
      };
    });
  }

  // ============================================
  // CONVERT COLLECTIONS
  // ============================================
  convertCollections(collections, imageMapping) {
    console.log('\n📚 Converting Collections...');
    
    return collections.map(collection => ({
      id: collection.id.toString(),
      handle: collection.handle,
      title: collection.title,
      description: collection.body_html ? collection.body_html.replace(/<[^>]*>/g, '') : '',
      descriptionHtml: collection.body_html || '',
      image: collection.image ? {
        url: this.convertImageUrl(collection.image.src, imageMapping),
        altText: collection.image.alt || collection.title,
      } : null,
      products: {
        edges: (collection.product_ids || []).map(id => ({
          node: { id: id.toString() }
        }))
      },
      seo: {
        title: collection.title,
        description: collection.body_html ? collection.body_html.replace(/<[^>]*>/g, '').substring(0, 160) : '',
      }
    }));
  }

  // ============================================
  // CONVERT BLOG POSTS
  // ============================================
  convertBlogPosts(posts, imageMapping) {
    console.log('\n📝 Converting Blog Posts...');
    
    return posts.map(post => ({
      id: post.id.toString(),
      handle: post.handle,
      title: post.title,
      content: post.body_html || '',
      excerpt: post.summary_html || (post.body_html ? post.body_html.replace(/<[^>]*>/g, '').substring(0, 200) + '...' : ''),
      author: post.author || 'Descubre Desierto',
      publishedAt: post.published_at,
      createdAt: post.created_at,
      updatedAt: post.updated_at,
      tags: post.tags ? post.tags.split(', ') : [],
      image: post.image ? {
        url: this.convertImageUrl(post.image.src, imageMapping),
        altText: post.image.alt || post.title,
      } : null,
      blog: {
        title: post.blog_title,
        handle: post.blog_handle,
      },
      seo: {
        title: post.title,
        description: post.summary_html || post.body_html ? post.body_html.replace(/<[^>]*>/g, '').substring(0, 160) : '',
      }
    }));
  }

  // ============================================
  // CONVERT PAGES
  // ============================================
  convertPages(pages) {
    console.log('\n📄 Converting Pages...');
    
    return pages.map(page => ({
      id: page.id.toString(),
      handle: page.handle,
      title: page.title,
      content: page.body_html || '',
      createdAt: page.created_at,
      updatedAt: page.updated_at,
      publishedAt: page.published_at,
      templateSuffix: page.template_suffix,
      seo: {
        title: page.title,
        description: page.body_html ? page.body_html.replace(/<[^>]*>/g, '').substring(0, 160) : '',
      }
    }));
  }

  // ============================================
  // CONVERT SHOP INFO
  // ============================================
  convertShopInfo(shop) {
    console.log('\n🏪 Converting Shop Information...');
    
    return {
      name: shop.name,
      description: shop.description,
      email: shop.email,
      domain: shop.domain,
      primaryDomain: {
        url: `https://${shop.domain}`,
        host: shop.domain,
      },
      currencyCode: shop.currency,
      moneyFormat: shop.money_format,
      weightUnit: shop.weight_unit,
      phone: shop.phone,
      address: {
        address1: shop.address1,
        address2: shop.address2,
        city: shop.city,
        province: shop.province,
        zip: shop.zip,
        country: shop.country,
      }
    };
  }

  // ============================================
  // MAIN CONVERT METHOD
  // ============================================
  convert() {
    console.log('🔄 Converting Shopify Data to Next.js Format...\n');
    console.log('Input:', this.inputDir);
    console.log('Output:', this.outputDir);
    console.log('='.repeat(50));

    // Ensure output directory exists
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }

    try {
      // Load all data
      const products = this.loadJSON('products.json') || [];
      const collections = this.loadJSON('collections.json') || [];
      const blogPosts = this.loadJSON('blog-posts.json') || [];
      const pages = this.loadJSON('pages.json') || [];
      const shop = this.loadJSON('shop.json');
      const imageMapping = this.loadJSON('image-mapping.json') || [];

      // Convert all data
      const convertedProducts = this.convertProducts(products, imageMapping);
      const convertedCollections = this.convertCollections(collections, imageMapping);
      const convertedBlogPosts = this.convertBlogPosts(blogPosts, imageMapping);
      const convertedPages = this.convertPages(pages);
      const convertedShop = shop ? this.convertShopInfo(shop) : null;

      // Save converted data
      this.saveJSON('products.json', convertedProducts);
      this.saveJSON('collections.json', convertedCollections);
      this.saveJSON('blog.json', convertedBlogPosts);
      this.saveJSON('pages.json', convertedPages);
      if (convertedShop) {
        this.saveJSON('shop.json', convertedShop);
      }

      // Create summary
      const summary = {
        convertedAt: new Date().toISOString(),
        inputDir: this.inputDir,
        outputDir: this.outputDir,
        counts: {
          products: convertedProducts.length,
          collections: convertedCollections.length,
          blogPosts: convertedBlogPosts.length,
          pages: convertedPages.length,
        }
      };

      this.saveJSON('conversion-summary.json', summary);

      console.log('\n' + '='.repeat(50));
      console.log('✅ CONVERSION COMPLETE!');
      console.log('='.repeat(50));
      console.log(`📦 Products: ${summary.counts.products}`);
      console.log(`📚 Collections: ${summary.counts.collections}`);
      console.log(`📝 Blog Posts: ${summary.counts.blogPosts}`);
      console.log(`📄 Pages: ${summary.counts.pages}`);
      console.log(`📁 Output: ${this.outputDir}`);
      console.log('='.repeat(50));
      console.log('\n✨ Data is now ready for Next.js!');
      console.log('   All image URLs point to local files');
      console.log('   Data structure matches Next.js format\n');

    } catch (error) {
      console.error('\n❌ Conversion failed:', error.message);
      console.error(error.stack);
      process.exit(1);
    }
  }
}

// ============================================
// RUN CONVERSION
// ============================================
if (require.main === module) {
  const converter = new DataConverter(INPUT_DIR, OUTPUT_DIR);
  converter.convert();
}

module.exports = { DataConverter };