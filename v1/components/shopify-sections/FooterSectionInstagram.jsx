// components/shopify-sections/FooterSectionInstagram.jsx
// Converted from Shopify section: footer-section-instagram

'use client';
import Image from 'next/image';

export default function FooterSectionInstagram({ settings, data }) {
  // Settings from Shopify:
  // undefined: paragraph
  // undefined: paragraph
  // undefined: paragraph
  // Design in line: checkbox
  // Grid: select
  // Grid no paddins in images: checkbox
  // Grid paddings left/right: checkbox
  // Fullwidth size: checkbox

  return (
    <>
      {%- assign item = section.settings -%}
<div className="container{item.fullwidth && (-fluid)} footer-instagram-section">
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
<style>
  ._instafeed-default a:before, .instafeed-fluid a:before, .instafeed-col a:before{content: "\ea02";}
</style>
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Footer Instagram",
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
      "type": "paragraph",
      "content": "You can disable this section in the customizer in settings tab: \"Show footer instagram section\""
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
  ]
};
