// scripts/convert-liquid-to-jsx.js - Convert Shopify Liquid sections to Next.js components

const fs = require('fs');
const path = require('path');

const SHOPIFY_THEME_DIR = './shopify-theme'; // Your extracted theme
const OUTPUT_DIR = './components/shopify-sections';

// ============================================
// LIQUID → JSX CONVERTER
// ============================================

class LiquidToJSXConverter {
  constructor(themeDir, outputDir) {
    this.themeDir = themeDir;
    this.outputDir = outputDir;
  }

  // Read Liquid file
  readLiquidFile(filepath) {
    return fs.readFileSync(filepath, 'utf8');
  }

  // Parse section schema
  parseSchema(liquidContent) {
    const schemaMatch = liquidContent.match(/{% schema %}([\s\S]*?){% endschema %}/);
    if (!schemaMatch) return null;
    
    try {
      return JSON.parse(schemaMatch[1]);
    } catch (error) {
      console.error('Error parsing schema:', error.message);
      return null;
    }
  }

  // Extract HTML from Liquid
  extractHTML(liquidContent) {
    // Remove schema
    let html = liquidContent.replace(/{% schema %}[\s\S]*?{% endschema %}/, '');
    
    // Remove comments
    html = html.replace(/{% comment %}[\s\S]*?{% endcomment %}/g, '');
    
    return html.trim();
  }

  // Convert Liquid tags to JSX
  convertToJSX(liquidHTML, schema) {
    let jsx = liquidHTML;

    // Convert Liquid variables to props
    // {{ section.settings.title }} → {settings.title}
    jsx = jsx.replace(/\{\{\s*section\.settings\.(\w+)\s*\}\}/g, '{settings.$1}');
    
    // {{ product.title }} → {product.title}
    jsx = jsx.replace(/\{\{\s*(\w+)\.(\w+)\s*\}\}/g, '{$1.$2}');
    
    // Convert loops
    // {% for product in collection.products %} → {products.map(product => (
    jsx = jsx.replace(
      /{% for (\w+) in (\w+)\.(\w+) %}/g,
      '{$2.$3.map($1 => ('
    );
    
    jsx = jsx.replace(/{% endfor %}/g, '))}');

    // Convert if statements
    // {% if condition %} → {condition && (
    jsx = jsx.replace(/{% if (.*?) %}/g, '{$1 && (');
    jsx = jsx.replace(/{% endif %}/g, ')}');

    // Convert class → className
    jsx = jsx.replace(/class="/g, 'className="');

    // Convert image URLs
    // {{ image | img_url: 'large' }} → {image}
    jsx = jsx.replace(/\{\{\s*(\w+)\s*\|\s*img_url:.*?\}\}/g, '{$1}');

    return jsx;
  }

  // Generate Next.js component
  generateComponent(sectionName, liquidContent, schema) {
    const componentName = this.toPascalCase(sectionName);
    const jsx = this.convertToJSX(this.extractHTML(liquidContent), schema);
    
    // Generate settings interface from schema
    const settingsInterface = this.generateSettingsInterface(schema);

    return `// components/shopify-sections/${componentName}.jsx
// Converted from Shopify section: ${sectionName}

'use client';
import Image from 'next/image';

export default function ${componentName}({ settings, data }) {
  // Settings from Shopify:
  ${settingsInterface}

  return (
    <>
      ${jsx}
    </>
  );
}

// Schema from Shopify
export const schema = ${JSON.stringify(schema, null, 2)};
`;
  }

  generateSettingsInterface(schema) {
    if (!schema || !schema.settings) return '// No settings';
    
    const settings = schema.settings.map(setting => {
      return `// ${setting.label}: ${setting.type}`;
    }).join('\n  ');
    
    return settings;
  }

  toPascalCase(str) {
    return str
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  }

  // Convert all sections
  convertAllSections() {
    console.log('🔄 Converting Shopify Sections to Next.js...\n');

    const sectionsDir = path.join(this.themeDir, 'sections');
    
    if (!fs.existsSync(sectionsDir)) {
      console.error('❌ Sections directory not found!');
      console.log('Make sure your theme is extracted to:', this.themeDir);
      return;
    }

    // Create output directory
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }

    const sectionFiles = fs.readdirSync(sectionsDir)
      .filter(file => file.endsWith('.liquid'));

    console.log(`Found ${sectionFiles.length} sections\n`);

    let converted = 0;
    let skipped = 0;

    sectionFiles.forEach(file => {
      const sectionName = file.replace('.liquid', '');
      const filepath = path.join(sectionsDir, file);
      
      console.log(`Converting: ${sectionName}...`);

      try {
        const liquidContent = this.readLiquidFile(filepath);
        const schema = this.parseSchema(liquidContent);
        
        if (!schema) {
          console.log(`  ⚠️  No schema found, creating basic component`);
        }

        const componentCode = this.generateComponent(sectionName, liquidContent, schema);
        const componentName = this.toPascalCase(sectionName);
        const outputPath = path.join(this.outputDir, `${componentName}.jsx`);
        
        fs.writeFileSync(outputPath, componentCode);
        console.log(`  ✅ Created: ${componentName}.jsx`);
        converted++;

      } catch (error) {
        console.log(`  ❌ Error: ${error.message}`);
        skipped++;
      }
    });

    console.log('\n' + '='.repeat(50));
    console.log('✅ CONVERSION COMPLETE!');
    console.log('='.repeat(50));
    console.log(`✅ Converted: ${converted} sections`);
    console.log(`⚠️  Skipped: ${skipped} sections`);
    console.log(`📁 Output: ${this.outputDir}`);
    console.log('='.repeat(50));

    // Generate index file
    this.generateIndexFile(sectionFiles);
  }

  generateIndexFile(sectionFiles) {
    const imports = sectionFiles.map(file => {
      const componentName = this.toPascalCase(file.replace('.liquid', ''));
      return `export { default as ${componentName} } from './${componentName}';`;
    }).join('\n');

    const indexPath = path.join(this.outputDir, 'index.js');
    fs.writeFileSync(indexPath, imports);
    console.log(`\n✅ Created index file: index.js`);
  }

  // Copy assets
  copyAssets() {
    console.log('\n📂 Copying Theme Assets...\n');

    const assetsDir = path.join(this.themeDir, 'assets');
    const outputAssetsDir = './public/theme-assets';

    if (!fs.existsSync(assetsDir)) {
      console.log('⚠️  No assets directory found');
      return;
    }

    if (!fs.existsSync(outputAssetsDir)) {
      fs.mkdirSync(outputAssetsDir, { recursive: true });
    }

    const assets = fs.readdirSync(assetsDir);
    
    // Copy CSS files
    const cssFiles = assets.filter(f => f.endsWith('.css') || f.endsWith('.scss'));
    cssFiles.forEach(file => {
      const src = path.join(assetsDir, file);
      const dest = path.join(outputAssetsDir, file);
      fs.copyFileSync(src, dest);
      console.log(`  ✅ Copied: ${file}`);
    });

    // Copy JS files
    const jsFiles = assets.filter(f => f.endsWith('.js'));
    jsFiles.forEach(file => {
      const src = path.join(assetsDir, file);
      const dest = path.join(outputAssetsDir, file);
      fs.copyFileSync(src, dest);
      console.log(`  ✅ Copied: ${file}`);
    });

    console.log(`\n✅ Copied ${cssFiles.length + jsFiles.length} asset files`);
  }
}

// ============================================
// RUN CONVERTER
// ============================================

if (require.main === module) {
  const converter = new LiquidToJSXConverter(SHOPIFY_THEME_DIR, OUTPUT_DIR);
  
  // Convert sections
  converter.convertAllSections();
  
  // Copy assets
  converter.copyAssets();
  
  console.log('\n🎉 All done! Your Shopify theme is now in Next.js format!');
  console.log('\nNext steps:');
  console.log('1. Review converted components in:', OUTPUT_DIR);
  console.log('2. Manually adjust any complex Liquid logic');
  console.log('3. Import CSS from public/theme-assets');
  console.log('4. Test each section on your pages');
}

module.exports = { LiquidToJSXConverter };