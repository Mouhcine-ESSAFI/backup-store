// components/shopify-sections/PageGallery.jsx
// Converted from Shopify section: page-gallery

'use client';
import Image from 'next/image';

export default function PageGallery({ settings, data }) {
  // Settings from Shopify:
  // No settings

  return (
    <>
      <div className="container-indent">
  <div className="container">
    {% include 'portfolio-widget' value: page.content %}
  </div>
</div>
    </>
  );
}

// Schema from Shopify
export const schema = null;
