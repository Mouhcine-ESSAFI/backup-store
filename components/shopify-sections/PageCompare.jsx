// components/shopify-sections/PageCompare.jsx
// Converted from Shopify section: page-compare

'use client';
import Image from 'next/image';

export default function PageCompare({ settings, data }) {
  // Settings from Shopify:
  // No settings

  return (
    <>
      <div className="container-indent comparepage hide">
  <div className="container">
    <div className="tt-block-title">
      <h1 className="tt-title">{{ "compare.compare_page.title" | t }}</h1>
    </div>
    <div className="tt-compare-table" id="tt-compare-table" style="opacity:0">
      <div className="tt-col-title tt-compare-table-js">
        <div className="title-item maininfo"></div>
        <div className="title-item maininfo"></div>
        <div className="title-item maininfo"></div>
        <div className="title-item maininfo"></div>
        <div className="title-item maininfo"></div>
		<div className="title-item maininfo"></div>        
        <div className="title-item maininfo maininfolast"></div>
        <div className="title-item">{{ 'compare.compare_page.field_description' | t }}</div>
        <div className="title-item">{{ 'compare.compare_page.field_vendor' | t }}</div>
      </div>
      <div className="tt-col-item compare-items-box">
        <div className="compare-init-slider">
        </div>
      </div>
    </div>
    <!-- / -->
  </div>
</div>
<div className="container-indent nomargin comparepageempty hide">
  <div className="tt-empty-wishlist">
    <h1 className="tt-title">{{ "compare.compare_page.empty_title" | t }}</h1>
    <p>{{ "compare.compare_page.empty_compare" | t }}</p>
    <a href="/" className="btn ttbtnmainstyle">{{ "compare.compare_page.continue_shopping" | t }}</a>
  </div>
</div>

<div className="compareitemhtml hide">
  <div className="tt-item tt-compare-table-js">
    <div className="tt-value tt-image-box">
      <a href="#"
         className="tt-remove-item compare-js"
         data-action="delete"
         data-tooltip="{{ 'compare.buttons_text.tooltip_remove' | t }}"
         data-tposition="right"
         data-findtag="svg"
         >{% include "svg-delete-icon" %}</a>
    </div>
    <div className="tt-value tt-image-box">
      <div className="tt-img">
        <a href="#"><img src="{{ 'dummy.png' | asset_url }}" alt=""></a>
      </div>
    </div>
    <div className="tt-value tt-image-box">
      <div className="tt-label-location">
        <div className="tt-label-in-stock">{{ "compare.compare_page.in_stock" | t }}</div><div className="tt-label-our-stock">{{ "compare.compare_page.soldout" | t }}</div>
      </div>
    </div>
    <div className="tt-value tt-image-box"><h2 className="tt-title"><a href="#"></a></h2></div>
    <div className="tt-value tt-image-box"><div className="tt-price"><span className="new-price"></span><span className="old-price"></span></div></div>
    <div className="tt-value tt-image-box">
      <form action="/cart/add" method="post" enctype="multipart/form-data">
        <input type="hidden" name="id" value="false">
        <button className="btn tt-btn-addtocart{settings.ajax_addtocart && ( addtocart-item-js)} thumbprod-button-bg">
          {{ 'products.general.add_to_cart_html' | t }}
        </button>
      </form>
    </div>
    <div className="tt-value tt-image-box tt-image-box-last"></div>

    <div className="tt-value" data-val="description"></div>
    <div className="tt-value" data-val="vendor"></div>
  </div>
  <div className="tt-value" data-val="empty">-</div>
  <div className="title-item" data-val="maintable"></div>
</div>
    </>
  );
}

// Schema from Shopify
export const schema = null;
