// components/shopify-sections/CollectionShowcaseTemplate.jsx
// Converted from Shopify section: collection_showcase-template

'use client';
import Image from 'next/image';

export default function CollectionShowcaseTemplate({ settings, data }) {
  // Settings from Shopify:
  // undefined: header
  // Disable top margin: checkbox

  return (
    <>
      
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Collection showcase",
  "settings": [
    {
      "type": "header",
      "content": "General"
    },
    {
      "type": "checkbox",
      "id": "ct_top_margin",
      "label": "Disable top margin",
      "default": true
    }
  ]
};
