// components/shopify-sections/IndexSectionTextBlock.jsx
// Converted from Shopify section: index-section-text_block

'use client';
import Image from 'next/image';

export default function IndexSectionTextBlock({ settings, data }) {
  // Settings from Shopify:
  // Title: textarea
  // Small description: textarea
  // Center big description: checkbox
  // Big description: textarea

  return (
    <>
      {%- assign item = section.settings -%}
<div className="container-indent">
  <div className="container">
    <div className="tt-block-title pb-3">
      {item.text1}
      {% unless item.text2 == '' %}<div className="tt-description">{item.text2}</div>{% endunless %}
    </div>
    {% unless item.text3 == '' %}<div{item.center_b_d && ( className="text-center")}>
      {item.text3}
    </div>{% endunless %}
  </div>
</div>
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Text Block",
  "class": "index-section",
  "settings": [
    {
      "type": "textarea",
      "id": "text1",
      "label": "Title",
      "default": "WELCOME!"
    },
    {
      "type": "textarea",
      "id": "text2",
      "label": "Small description",
      "default": "ABOUT OUR STORE",
      "info": "Empty field = hide field"
    },
    {
      "type": "checkbox",
      "id": "center_b_d",
      "label": "Center big description",
      "default": true
    },
    {
      "type": "textarea",
      "id": "text3",
      "label": "Big description",
      "default": "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      "info": "Empty field = hide field"
    }
  ],
  "presets": [
    {
      "name": "Text Block",
      "category": "Simple Section"
    }
  ]
};
