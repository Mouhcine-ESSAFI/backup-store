// components/shopify-sections/IndexSectionMasonryProducts.jsx
// Converted from Shopify section: index-section-masonry_products

'use client';
import Image from 'next/image';

export default function IndexSectionMasonryProducts({ settings, data }) {
  // Settings from Shopify:
  // Top Offset: select
  // Fullwidth size: checkbox
  // Show Title Block: checkbox
  // Title: textarea
  // Small description: textarea
  // Big description: textarea
  // undefined: header
  // Collection: collection
  // Double size: checkbox
  // Items Length. Integer: text

  return (
    <>
      {%- assign slider_mode = true -%}
{%- assign item = section.settings -%}

{%- assign name_collection = item.collection -%}
{%- if name_collection == blank -%}{%- assign name_collection = "all" -%}{%- endif -%}
{%- assign collection = collections[name_collection] -%}
{%- assign length = item.limit | plus: 0 -%}

<div className="{item.top_offset == 'none' && (nomargin {% elsif item.top_offset == 'small' %}tt-offset-small )}container-indent">
  <div className="container{item.fullwidth && (-fluid)}" data-sectionname="index_sectionmasonry_products">
    {item.show_title && (<div className="tt-block-title">
      <h2 className="tt-title">{item.text1}</h2>
      {% unless item.text2 == '' %}<div className="tt-description">{item.text2}</div>{% endunless %}
      {% unless item.default_carousel %}{% unless item.text3 == '' %}<p>{item.text3}</p>{% endunless %}{% endunless %}
    </div>)}
    <div className="tt-product-listing-masonry">
      <div className="tt-product-index-init tt-add-item">
        {%- for product in collection.products limit: length -%}
        {%- if item.doblesize -%}
        {%- capture masonrydoublesize -%}{%- cycle = '', '', 'double-size', '', '', 'double-size', '', '', '', '' -%}{%- endcapture -%}
        {%- capture external_size -%}{%- cycle = '500x', '500x', '1024x', '500x', '500x', '1024x', '500x', '500x', '500x', '500x' -%}{%- endcapture -%}
        {%- else -%}{%- assign external_size = '500x' -%}
        {%- endif -%}
        
        {%- unless settings.products_design == 'hidden' -%}<div className="element-item {{ masonrydoublesize }}">{%- endunless -%}
          {%- include "product-grid-item" -%}
        {%- unless settings.products_design == 'hidden' -%}</div>{%- endunless -%}
        {%- endfor -%}
      </div>
    </div>
  </div>
</div>
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Products Masonry",
  "class": "index-section",
  "settings": [
    {
      "type": "select",
      "id": "top_offset",
      "label": "Top Offset",
      "default": "normal",
      "options": [
        {
          "value": "none",
          "label": "None"
        },
        {
          "value": "small",
          "label": "Small"
        },
        {
          "value": "normal",
          "label": "Normal"
        }
      ]
    },
    {
      "type": "checkbox",
      "id": "fullwidth",
      "label": "Fullwidth size",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "show_title",
      "label": "Show Title Block",
      "default": true
    },
    {
      "type": "textarea",
      "id": "text1",
      "label": "Title",
      "default": "TRENDING"
    },
    {
      "type": "textarea",
      "id": "text2",
      "label": "Small description",
      "default": "TOP VIEW IN THIS WEEK",
      "info": "If you want delete text from the screen clear field"
    },
    {
      "type": "textarea",
      "id": "text3",
      "label": "Big description",
      "info": "If you want delete text from the screen clear field. Field not work with slider mode"
    },
    {
      "type": "header",
      "content": "Products settings"
    },
    {
      "label": "Collection",
      "id": "collection",
      "type": "collection"
    },
    {
      "type": "checkbox",
      "id": "doblesize",
      "label": "Double size",
      "default": true
    },
    {
      "type": "text",
      "id": "limit",
      "label": "Items Length. Integer",
      "default": "10"
    }
  ],
  "presets": [
    {
      "name": "Products Masonry",
      "category": "Lookbook"
    }
  ]
};
