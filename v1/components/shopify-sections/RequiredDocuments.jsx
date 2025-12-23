// components/shopify-sections/RequiredDocuments.jsx
// Converted from Shopify section: required_documents

'use client';
import Image from 'next/image';

export default function RequiredDocuments({ settings, data }) {
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
  "name": "Required documents",
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
