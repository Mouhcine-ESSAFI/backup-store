// components/shopify-sections/Page.jsx
// Converted from Shopify section: page

'use client';
import Image from 'next/image';

export default function Page({ settings, data }) {
  // Settings from Shopify:
  // undefined: header
  // Disable top margin: checkbox

  return (
    <>
      <div className="container-indent{section.settings.ct_top_margin && ( mt-4)}">
  <div className="container">
    {page.content}
  </div>
</div>
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Page",
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
