// components/shopify-sections/PageGalleryWide.jsx
// Converted from Shopify section: page-gallery_wide

'use client';
import Image from 'next/image';

export default function PageGalleryWide({ settings, data }) {
  // Settings from Shopify:
  // No settings

  return (
    <>
      <div className="container-indent">
  <div className="container-fluid-custom">
    {% include 'portfolio-widget' value: page.content %}
  </div>
</div>
    </>
  );
}

// Schema from Shopify
export const schema = null;
