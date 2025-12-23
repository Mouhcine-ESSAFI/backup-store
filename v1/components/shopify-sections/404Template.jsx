// components/shopify-sections/404Template.jsx
// Converted from Shopify section: 404-template

'use client';
import Image from 'next/image';

export default function 404Template({ settings, data }) {
  // Settings from Shopify:
  // Image: image_picker
  // undefined: header
  // Background Color: color
  // undefined: header
  // Text 1 Color: color
  // Text 2 Color: color
  // undefined: header
  // Background Color: color
  // Text Color: color
  // Active Background Color: color
  // Active Text Color: color

  return (
    <>
      {%- assign item = section.settings -%}
<div className="container-indent nomargin">
  <div className="tt-page404" style="background: {item.bg_color};">
    {item.image != blank && (<img src="{{ item.image | img_url: '1024x' }}" alt="{{ item.image.alt }}">)}
    <h1 className="tt-title" style="color: {item.t1_color};">{{ 'general.404.title' | t }}</h1>
    <p style="color: {item.t2_color};">{{ 'general.404.subtext' | t }}</p>
    <a href="/" className="btn btn-white ttbtnmainstyle" style="color:{item.cbtntext}; background:{item.cbtnbg};" data-c="{item.cbtntext}" data-ac="{item.acbtntext}" data-bgc="{item.cbtnbg}" data-abgc="{item.acbtnbg}" data-hovercolors>{{ 'general.404.button' | t }}</a>
  </div>
</div>
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "404",
  "settings": [
    {
      "type": "image_picker",
      "id": "image",
      "label": "Image"
    },
    {
      "type": "header",
      "content": "Background"
    },
    {
      "type": "color",
      "id": "bg_color",
      "label": "Background Color",
      "default": "#2879fe"
    },
    {
      "type": "header",
      "content": "Texts"
    },
    {
      "type": "color",
      "id": "t1_color",
      "label": "Text 1 Color",
      "default": "#ffffff"
    },
    {
      "type": "color",
      "id": "t2_color",
      "label": "Text 2 Color",
      "default": "#ffffff"
    },
    {
      "type": "header",
      "content": "Button Colors"
    },
    {
      "type": "color",
      "id": "cbtnbg",
      "label": "Background Color",
      "default": "#ffffff"
    },
    {
      "type": "color",
      "id": "cbtntext",
      "label": "Text Color",
      "default": "#191919"
    },
    {
      "type": "color",
      "id": "acbtnbg",
      "label": "Active Background Color",
      "default": "#191919"
    },
    {
      "type": "color",
      "id": "acbtntext",
      "label": "Active Text Color",
      "default": "#ffffff"
    }
  ]
};
