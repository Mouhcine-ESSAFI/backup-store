// components/shopify-sections/IndexSectionColumnProducts.jsx
// Converted from Shopify section: index-section-column_products

'use client';
import Image from 'next/image';

export default function IndexSectionColumnProducts({ settings, data }) {
  // Settings from Shopify:
  // Products In Row: select

  return (
    <>
      <div className="container-indent">
  <div className="container">
    <div className="row">
      {%- if section.blocks.size > 0 -%}
      
      {%- for block in section.blocks -%}{%- assign b_i = block.settings -%}
      {%- assign name_collection = b_i.collection -%}
      {%- if name_collection == blank -%}{%- assign name_collection = "all" -%}{%- endif -%}
      {%- assign collection = collections[name_collection] -%}
      
      {%- cycle = "", '<div className="divider visible-xs"></div>', '<div className="divider visible-sm visible-xs"></div>' -%}
      <div className="col-sm-6 col-md-{settings.items}">
        <h6 className="tt-title-sub">{b_i.text1}</h6>
        <div className="tt-layout-vertical-listing">
          
          {%- for product in collection.products limit: b_i.limit -%}
          {%- assign sale_on = false -%}
          {%- assign shownewicon = false -%}
          {%- if product.selected_or_first_available_variant.compare_at_price > product.selected_or_first_available_variant.price -%}
          {%- assign sale_on = true -%}
          {%- endif -%}
          {%- assign url_images_size = '150x' -%}
          
          {%- assign pr_variant = false -%}
          <div className="respimgsize tt-item options-js">
            <div className="tt-layout-vertical">
              <a href="{{ product.url | within: collection }}" className="tt-img" title="View {product.title}">
                <img className="lazyload"
                     data-mainimage="{{ product.featured_image | product_img_url: '100x100' | replace: '100x100', 'respimgsize' }}"
                     alt="{{ product.featured_image.alt | escape }}"/>
              </a>
              <div className="tt-description">
                {%- if b_i.show_rating -%}
                <div className="tt-rating" data-url="{{ product.url | within: collection }}" title="{{ 'products.general.view_review' | t }}">
                  <span className="shopify-product-reviews-badge" data-id="{product.id}"></span>
                </div>
                {%- endif -%}
                {%- if b_i.show_type or b_i.show_vendor -%}
                <ul className="tt-add-info">
                  {b_i.show_type && (<li><a href="/collections/{collection.handle}/{product.vendor}" className="text-uppercase">{product.vendor}</a></li>)}
                  {b_i.show_vendor && (<li><a href="/collections/{collection.handle}/{product.type}" className="text-uppercase">{product.type}</a></li>)}
                </ul>
                {%- endif -%}
                <h6 className="tt-title"><a href="{{ product.url | within: collection }}" title="View {product.title}">{product.title}</a></h6>
                {%- if sale_on and product.variants.size == 1 -%}
                <div className="tt-price"><span className="new-price">{{ product.selected_or_first_available_variant.price | money }}</span><span className="old-price">{{ product.selected_or_first_available_variant.compare_at_price | money }}</span></div>
                {%- else -%}
                <div className="tt-price"><span>{product.price_min != product.price_max && ({{ product.price_min | money_without_trailing_zeros }} - {{ product.price_max | money_without_trailing_zeros }}{% else %}{{ product.selected_or_first_available_variant.price | money }})}</span><span className="old-price hide"></span></div>
                {%- endif -%}

                {%- if b_i.show_options -%}
				{%- if product.available -%}{% include 'product-grid-options' %}{%- endif -%}
				{%- endif -%}
                
              </div>
            </div>
          </div>
          {%- endfor -%}
          
        </div>
        {b_i.show_button && (<a className="btn-link-02 tt-offset-16" href="collections/{collection.handle}">{b_i.text2}</a>)}
      </div>
      {%- endfor -%}
      
      {%- else -%}
      <span style="display: flex; justify-content: center;">This section doesn’t currently include any content. Add content to this section using the sidebar.</span>
      {%- endif -%}

    </div>
  </div>
</div>
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Columns Products",
  "class": "index-section",
  "settings": [
    {
      "type": "select",
      "id": "items",
      "label": "Products In Row",
      "options": [
        {
          "value": "6",
          "label": "2"
        },
        {
          "value": "4",
          "label": "3"
        }
      ],
      "default": "4",
      "info": "For screen size > 1024"
    }
  ],
  "blocks": [
    {
      "type": "item",
      "limit": 3,
      "name": "Column",
      "settings": [
        {
          "label": "Collection",
          "id": "collection",
          "type": "collection"
        },
        {
          "type": "text",
          "id": "limit",
          "label": "Items Length. Integer",
          "default": "3"
        },
        {
          "type": "textarea",
          "id": "text1",
          "label": "Title",
          "default": "NEW PRODUCTS"
        },
        {
          "type": "header",
          "content": "Show button"
        },
        {
          "type": "checkbox",
          "id": "show_button",
          "label": "Show button",
          "default": false
        },
        {
          "type": "text",
          "id": "text2",
          "label": "Button name",
          "default": "See All Products"
        },
        {
          "type": "header",
          "content": "Settings"
        },
        {
          "type": "checkbox",
          "id": "show_rating",
          "label": "Show Rating",
          "default": true
        },
        {
          "type": "checkbox",
          "id": "show_type",
          "label": "Show type",
          "default": true
        },
        {
          "type": "checkbox",
          "id": "show_vendor",
          "label": "Show vendor",
          "default": false
        },
        {
          "type": "checkbox",
          "id": "show_options",
          "label": "Show options",
          "default": false
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Columns Products",
      "category": "Products",
      "blocks": []
    }
  ]
};
