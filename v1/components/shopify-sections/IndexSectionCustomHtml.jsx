// components/shopify-sections/IndexSectionCustomHtml.jsx
// Converted from Shopify section: index-section-custom_html

'use client';
import Image from 'next/image';

export default function IndexSectionCustomHtml({ settings, data }) {
  // Settings from Shopify:
  // Top Offset: checkbox
  // Fullwidth Container: checkbox
  // Fullwidth without container: checkbox
  // Content: textarea
  // undefined: header
  // Use background color: checkbox
  // Fullwidth background color: checkbox
  // Background color: color

  return (
    <>
      {%- assign item = section.settings -%}
<div className="container-indent{% unless item.topoffset %} nomargin{% endunless %}"{item.usebgcolor and item.usebgcolorfullwidth && ( style="background: {item.bgco}")}>
  <div{% unless item.fullwidth2 %} className="container{item.fullwidth && (-fluid-custom container-fluid-custom-mobile-padding)}"{% endunless %}{item.usebgcolor and item.usebgcolorfullwidth == false && ( style="background: {item.bgco}")}>
    {%- if item.data contains '[images]' -%}{% include 'portfolio-widget' value: item.data %}
    {%- else -%}{item.data}
    {%- endif -%}
  </div>
</div>
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Custom Html",
  "class": "index-section",
  "settings": [
    {
      "type": "checkbox",
      "id": "topoffset",
      "label": "Top Offset",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "fullwidth",
      "label": "Fullwidth Container",
      "default": false
    },
    {
      "type": "checkbox",
      "id": "fullwidth2",
      "label": "Fullwidth without container",
      "default": false,
      "info": "Work with option \"Fullwidth Container\""
    },
    {
      "type": "textarea",
      "id": "data",
      "label": "Content"
    },
    {
      "type": "header",
      "content": "Background color"
    },
    {
      "type": "checkbox",
      "id": "usebgcolor",
      "label": "Use background color",
      "default": false
    },
    {
      "type": "checkbox",
      "id": "usebgcolorfullwidth",
      "label": "Fullwidth background color",
      "default": false
    },
    {
      "type": "color",
      "id": "bgco",
      "label": "Background color",
      "default": "#ffffff"
    }
  ],
  "presets": [
    {
      "name": "Custom Html",
      "category": "Simple Section",
      "settings": {}
    }
  ]
};
