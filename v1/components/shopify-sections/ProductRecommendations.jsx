// components/shopify-sections/ProductRecommendations.jsx
// Converted from Shopify section: product-recommendations

'use client';
import Image from 'next/image';

export default function ProductRecommendations({ settings, data }) {
  // Settings from Shopify:
  // Show dynamic recommendations: checkbox
  // Fullscreen: checkbox
  // Title in center: checkbox
  // Title: text
  // Count: text
  // Show items in desktop: select

  return (
    <>
      {%- if section.settings.show_product_recommendations -%}
  {%- if recommendations.performed -%}
    {%- if recommendations.products_count > 0 -%}
	  {%- assign slider_mode = true -%}
      <div className="container container-fluid-custom-mobile-padding">
        <div className="tt-block-title">
          {%- if section.settings.title != blank -%}<h2 className="tt-title-small">{settings.title}</h2>{%- endif -%}
        </div>
        <div className="tt-carousel-products row arrow-location-right-top tt-alignment-img tt-layout-product-item">
          {%- for product in recommendations.products -%}
          <div className="col-2 col-md-4 col-lg-3">{%- include 'product-grid-item' -%}</div>
          {%- endfor -%}
        </div>
      </div>
    {%- endif -%}
  {%- else  -%}
    <div className="container-indent 5"
         data-fullscreen="{settings.fullscreen}"
         data-titleposition="{section.settings.titleincenter && (text-center{% else %}text-left)}"
         data-title="{settings.title}"
         data-product-id="{product.id}"
         data-section-id="{section.id}"
         data-limit="{settings.product_upsell_collection_count}"
         data-section-type="product-recommendations"
         data-sectionname="product-recommendations"
         data-slickshow="{settings.slickdesktoptoshow}"></div>
  {%- endif -%}
{%- endif -%}
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Product recommendations",
  "settings": [
    {
      "type": "checkbox",
      "id": "show_product_recommendations",
      "label": "Show dynamic recommendations",
      "info": "Dynamic recommendations change and improve over time. [Learn more](https://help.shopify.com/en/themes/development/recommended-products)",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "fullscreen",
      "label": "Fullscreen",
      "default": false
    },
    {
      "type": "checkbox",
      "id": "titleincenter",
      "label": "Title in center",
      "default": false
    },
    {
      "type": "text",
      "id": "title",
      "label": "Title",
      "default": "RELATED PRODUCTS"
    },
    {
      "type": "text",
      "id": "product_upsell_collection_count",
      "label": "Count",
      "default": "8",
      "info": "Integer"
    },
    {
      "type": "select",
      "id": "slickdesktoptoshow",
      "label": "Show items in desktop",
      "options": [
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "6",
          "label": "6"
        }
      ],
      "default": "4"
    }
  ],
  "presets": [
    {
      "name": "Product Recommendations",
      "category": "Simple Section"
    }
  ]
};
