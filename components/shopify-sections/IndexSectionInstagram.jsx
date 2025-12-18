// components/shopify-sections/IndexSectionInstagram.jsx
// Converted from Shopify section: index-section-instagram

'use client';
import Image from 'next/image';

export default function IndexSectionInstagram({ settings, data }) {
  // Settings from Shopify:
  // undefined: paragraph
  // undefined: paragraph
  // Top Offset: select
  // Design in line: checkbox
  // Grid: select
  // Grid no paddins in images: checkbox
  // Grid paddings left/right: checkbox
  // Fullwidth size: checkbox
  // Show titles: checkbox
  // Title to left: checkbox
  // Boxed title when fullwidth: checkbox
  // Title: text
  // Description: text

  return (
    <>
      {%- assign item = section.settings -%}
<div className="{item.top_offset == 'none' && (nomargin {% elsif item.top_offset == 'small' %}tt-offset-small )}container-indent">
  <div className="container{item.fullwidth && (-fluid)}">
    {%- if item.show_titles -%}
    <div className="tt-block-title{item.title_to_left && ( text-left)}{item.boxed_title and item.fullwidth && ( container)}">
      <h2 className="tt-title">{item.text1}</h2>
      {%- unless item.text2 == '' -%}<div className="tt-description">{item.text2}</div>{%- endunless -%}
    </div>
    {%- endif -%}
    <div className="row">
      <div className="{item.containerpadding && (inscontainerpadding )}{item.gridnopadding && (gridnopadding )}{item.in_line && (instafeed-fluid{% else %}instafeed-col{item.grid_5 == "small" && ( instafeed-col-item-06{% elsif item.grid_5 == "normal5" %} instafeed-col-item-05{% elsif item.grid_5 == "normal" %} instafeed-col-item-08)})}">
      	{%- if section.blocks.size > 0 -%}
        <div className="instagram_gallery">
          {%- for block in section.blocks -%}
          {%- assign b_i = block.settings -%}
          {%- if b_i.imgurl == blank -%}<div className="">{%- else -%}<a href="{b_i.imgurl}" className="" rel="noopener" target="_blank">{%- endif -%}
            {%- if b_i.image == blank -%}{%- include "get_svg" type:'image' size:'640x640' -%}
            {%- else -%}
            <img className="lazyload"
                 data-src="{{ b_i.image | img_url: '640x640' }}"
                 alt="{{ b_i.image.alt }}">
            {%- endif -%}
          {%- if b_i.imgurl != blank -%}</a>{%- else -%}</div>{%- endif -%}
          {%- endfor -%}
        </div>
        {%- else -%}
        <span style="width: 100%; display: flex; justify-content: center;">This section doesn’t currently include any content. Add content to this section using the sidebar.</span>
        {%- endif -%}
      </div>
    </div>
  </div>
</div>
<style>
  ._instafeed-default a:before, .instafeed-fluid a:before, .instafeed-col a:before{content: "\ea02";}
</style>
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Instagram",
  "class": "index-section",
  "settings": [
    {
      "type": "paragraph",
      "content": "!!! Facebook changed its privacy policy for its users and Instagram no longer works with javascript library codes. We recommend using your own image with a link to your Instagram post."
    },
    {
      "type": "paragraph",
      "content": "_____________"
    },
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
      "type": "checkbox",
      "id": "in_line",
      "label": "Design in line",
      "default": true,
      "info": "Not work with \"Grid\""
    },
    {
      "type": "select",
      "id": "grid_5",
      "label": "Grid",
      "default": "none",
      "options": [
        {
          "value": "none",
          "label": "Grid view. 4 in row"
        },
        {
          "value": "normal5",
          "label": "Grid view. 5 in row"
        },
        {
          "value": "small",
          "label": "Grid view. 6 in row"
        },
        {
          "value": "normal",
          "label": "Grid view. 8 in row"
        }
      ]
    },
    {
      "type": "checkbox",
      "id": "gridnopadding",
      "label": "Grid no paddins in images",
      "default": false
    },
    {
      "type": "checkbox",
      "id": "containerpadding",
      "label": "Grid paddings left/right",
      "default": true,
      "info": "Work with \"Fullwidth size\""
    },
    {
      "type": "checkbox",
      "id": "fullwidth",
      "label": "Fullwidth size",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "show_titles",
      "label": "Show titles",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "title_to_left",
      "label": "Title to left",
      "default": false
    },
    {
      "type": "checkbox",
      "id": "boxed_title",
      "label": "Boxed title when fullwidth",
      "default": false
    },
    {
      "type": "text",
      "id": "text1",
      "label": "Title",
      "default": "<a target=\"_blank\" href=\"https://www.instagram.com/wokieeshopify\">@ FOLLOW</a> US ON"
    },
    {
      "type": "text",
      "id": "text2",
      "label": "Description",
      "default": "INSTAGRAM"
    }
  ],
  "blocks": [
    {
      "type": "image",
      "name": "Image",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Image"
        },
        {
          "type": "url",
          "id": "imgurl",
          "label": "Image link"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Instagram",
      "category": "Instagram",
      "blocks": [
        {
          "type": "image"
        },
        {
          "type": "image"
        },
        {
          "type": "image"
        },
        {
          "type": "image"
        },
        {
          "type": "image"
        },
        {
          "type": "image"
        }
      ]
    }
  ]
};
