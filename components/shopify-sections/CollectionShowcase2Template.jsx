// components/shopify-sections/CollectionShowcase2Template.jsx
// Converted from Shopify section: collection_showcase_2-template

'use client';
import Image from 'next/image';

export default function CollectionShowcase2Template({ settings, data }) {
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
  "name": "Collection showcase 2",
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
