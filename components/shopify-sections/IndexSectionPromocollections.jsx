// components/shopify-sections/IndexSectionPromocollections.jsx
// Converted from Shopify section: index-section-promocollections

'use client';
import Image from 'next/image';

export default function IndexSectionPromocollections({ settings, data }) {
  // Settings from Shopify:
  // Top Offset: select
  // Items In Line: select
  // Show See All: checkbox
  // See All: text

  return (
    <>
      {%- assign item = section.settings -%}
{%- assign grid = section.settings.items -%}
{%- capture info_image_size -%}
{%- case grid -%}
{%- when '6' -%}600x400px
{%- when '4' -%}400x350px
{%- else -%}300x200px
{%- endcase -%}
{%- endcapture -%}
{%- assign img_size = info_image_size | split: 'x' | first | append: 'x' -%}

<div className="{item.top_offset == 'none' && (nomargin {% elsif item.top_offset == 'small' %}tt-offset-small )}container-indent">
  <div className="container container-fluid-custom-mobile-padding">
    <div className="tt-categories-listing">
      <div className="row">
        {%- if section.blocks.size > 0 -%}
        {%- for block in section.blocks -%}{%- assign item = block.settings -%}
        {%- assign collection = collections[item.collection] -%}
        {%- assign links = linklists[item.linklist].links -%}
        <div className="col-6 col-md-{{ grid }} col-12-440width">
          <div className="respimgsize tt-items-categories">
            <a className="tt-title-block" href="{collection.url}">
              <h2 className="tt-title">{item.custom_name != ''%}{item.custom_name}{% else && ({collection.title})}</h2>
              {%- if item.image == blank and collection.image == blank -%}
              <div style="margin-top: 17px;">{% include "get_svg" type:'collection' size:info_image_size %}</div>
              {%- else -%}
              {%- unless item.usecollectionimage -%}
              <img className="lazyload"
                   data-mainimageratio = '{{ item.image.aspect_ratio }}'
                   data-mainimage="{{ item.image | img_url: '100x100' | replace: '100x100', 'respimgsize' }}"
                   alt="{{ item.image.alt }}">
              {%- else -%}
              <img className="lazyload"
                   data-mainimageratio = '{{ collection.image.aspect_ratio }}'
                   data-mainimage="{{ collection.image | img_url: '100x100' | replace: '100x100', 'respimgsize' }}"
                   alt="{{ collection.image.alt }}">
              {%- endunless -%}
              {%- endif -%}
            </a>
            {%- if links.size > 0 -%}
            <ul>
              {%- for link in links -%}
              <li><a href="{link.url}">{link.title}</a></li>
              {%- endfor -%}
            </ul>
            {%- endif -%}
            {%- if section.settings.showtitle -%}<a href="{collection.url}" className="btn-link-02">{settings.title}</a>{%- endif -%}
          </div>
        </div>
        {%- endfor -%}
        {%- else -%}
        <span style="display: flex; justify-content: center;">This section doesn’t currently include any content. Add content to this section using the sidebar.</span>
        {%- endif -%}
      </div>
    </div>
  </div>
</div>
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Promo Collections",
  "class": "index-section",
  "settings": [
    {
      "type": "select",
      "id": "top_offset",
      "label": "Top Offset",
      "default": "normal",
      "options": [
        {
          "value": "none",
          "label": "None"
        },
        {
          "value": "small",
          "label": "Small"
        },
        {
          "value": "normal",
          "label": "Normal"
        }
      ]
    },
    {
      "type": "select",
      "id": "items",
      "label": "Items In Line",
      "default": "4",
      "options": [
        {
          "value": "6",
          "label": "2"
        },
        {
          "value": "4",
          "label": "3"
        },
        {
          "value": "3",
          "label": "4"
        }
      ]
    },
    {
      "type": "checkbox",
      "id": "showtitle",
      "label": "Show See All",
      "default": true
    },
    {
      "type": "text",
      "id": "title",
      "label": "See All",
      "default": "See All Products"
    }
  ],
  "blocks": [
    {
      "type": "item",
      "name": "Collection",
      "settings": [
        {
          "label": "Collection",
          "id": "collection",
          "type": "collection"
        },
        {
          "type": "image_picker",
          "id": "image",
          "label": "Custom Image"
        },
        {
          "type": "text",
          "id": "custom_name",
          "label": "Custom Name",
          "info": "If \"Custom Name\" is empty, title = default collection name"
        },
        {
          "type": "link_list",
          "id": "linklist",
          "label": "Links"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Promo Collections",
      "category": "Collection",
      "blocks": [
        {
          "type": "item"
        },
        {
          "type": "item"
        },
        {
          "type": "item"
        }
      ]
    }
  ]
};
