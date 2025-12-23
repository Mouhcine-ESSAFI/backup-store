// components/shopify-sections/GiftTemplate.jsx
// Converted from Shopify section: gift-template

'use client';
import Image from 'next/image';

export default function GiftTemplate({ settings, data }) {
  // Settings from Shopify:
  // undefined: header
  // Show logo: checkbox
  // Logo image: image_picker
  // Logo Main width (in pixels): text

  return (
    <>
      {%- assign item = section.settings -%}
{%- assign logo_size = item.logo_max_width | append: 'x' -%}
{item.show_logo && ({item.image_l != blank && (
<a href="{shop.url}" className="tt-logo" itemprop="url">
  <img className="tt-retina" src="{{ item.image_l | img_url: logo_size }}" alt="{{ item.image_l.alt }}">
</a>
)})}
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Logo",
  "settings": [
    {
      "type": "header",
      "content": "Logo"
    },
    {
      "type": "checkbox",
      "id": "show_logo",
      "label": "Show logo",
      "default": true
    },
    {
      "type": "image_picker",
      "id": "image_l",
      "label": "Logo image"
    },
    {
      "type": "text",
      "id": "logo_max_width",
      "label": "Logo Main width (in pixels)",
      "default": "175"
    }
  ]
};
