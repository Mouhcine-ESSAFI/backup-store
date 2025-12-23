// components/shopify-sections/IndexSectionInstagramShop.jsx
// Converted from Shopify section: index-section-instagram_shop

'use client';
import Image from 'next/image';

export default function IndexSectionInstagramShop({ settings, data }) {
  // Settings from Shopify:
  // Top Offset: checkbox
  // Fullwidth size: checkbox
  // Instagram js: textarea

  return (
    <>
      <div className="container-indent{% unless section.settings.topoffset %} nomargin{% endunless %}">
  <div className="container{section.settings.fullwidth && (-fluid)}">
    {%- if section.blocks.size > 0 -%}
    {%- for block in section.blocks -%}{%- assign b_i = block.settings -%}
    {%- if block.type == 'simpletitle' -%}
    <div className="tt-block-title">
      <h2 className="tt-title">{b_i.text1}</h2>
      {b_i.text2 != '' && (<div className="tt-description">{b_i.text2}</div>)}
    </div>
    {%- endif -%}
    {%- endfor -%}
    {%- endif -%}
    <div className="row">
      {%- if section.blocks.size > 0 -%}
      {%- for block in section.blocks -%}{%- assign b_i = block.settings -%}
      {%- if block.type == 'item' -%}
      <div className="tt-promo-fullwidth-02">
        {%- if b_i.image == blank -%}{% include "get_svg" type:'image' size:'2048x455' %}
        {%- else -%}<img src="{{ b_i.image | img_url: '2048x' }}" alt="{{ b_i.image.alt }}">
        {%- endif -%}
        <div className="tt-description">
          <div className="tt-description-wrapper">
            <div className="tt-title-large" style="color: {b_i.text1color}">{b_i.text1}</div>
            {% unless b_i.text2 == '' %}<p style="color: {b_i.text2color}">{b_i.text2}</p>{% endunless %}
          </div>
        </div>
      </div>
      {%- endif -%}
      {%- endfor -%}
      {%- endif -%}
      {settings.instjs}
    </div>
  </div>
</div>

{{ 'instagram_shop.css' | asset_url | stylesheet_tag }}


{% stylesheet %}
.snptwdgt-container{
margin-top: 20px;
}
.snptwdgt-container .snptwdgt__ftr{
display: none;
}
{% endstylesheet %}
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Instagram Shop",
  "settings": [
    {
      "type": "checkbox",
      "id": "topoffset",
      "label": "Top Offset",
      "default": false
    },
    {
      "type": "checkbox",
      "id": "fullwidth",
      "label": "Fullwidth size",
      "default": true
    },
    {
      "type": "textarea",
      "id": "instjs",
      "label": "Instagram js",
      "info": "[Snapppt](http://www.getsnapppt.com/)"
    }
  ],
  "blocks": [
    {
      "type": "item",
      "limit": 1,
      "name": "Top Image Banner",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Custom Image"
        },
        {
          "type": "textarea",
          "id": "text1",
          "label": "Big Text",
          "default": "HOME<br>INSTAGRAM SHOP"
        },
        {
          "type": "textarea",
          "id": "text2",
          "label": "Big Text",
          "default": "Instagram Shop"
        },
        {
          "type": "color",
          "id": "text1color",
          "label": "Text 1 Color",
          "default": "#333333"
        },
        {
          "type": "color",
          "id": "text2color",
          "label": "Text 2 Color",
          "default": "#2879fe"
        }
      ]
    },
    {
      "type": "simpletitle",
      "limit": 1,
      "name": "Simple title",
      "settings": [
        {
          "type": "textarea",
          "id": "text1",
          "label": "Title",
          "default": "SHOP @WOKIEE INSTAGRAM"
        },
        {
          "type": "textarea",
          "id": "text2",
          "label": "Slogan",
          "default": "CLICK PHOTOS BELOW TO SHOP THE LOOK."
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Instagram Shop",
      "category": "Instagram",
      "blocks": [
        {
          "type": "item"
        }
      ]
    }
  ]
};
