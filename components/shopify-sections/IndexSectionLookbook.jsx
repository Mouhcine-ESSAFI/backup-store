// components/shopify-sections/IndexSectionLookbook.jsx
// Converted from Shopify section: index-section-lookbook

'use client';
import Image from 'next/image';

export default function IndexSectionLookbook({ settings, data }) {
  // Settings from Shopify:
  // Top Offset: select
  // Fullwidth size: checkbox
  // Show Title Block: checkbox
  // Title to left: checkbox
  // Boxed title when fullwidth: checkbox
  // Fullwidth paddings: checkbox
  // Title: textarea
  // Small description: textarea
  // Big description: textarea
  // undefined: header
  // Items in row: select
  // Slides To Scroll: select
  // Auto-rotate slides: checkbox
  // Change slides every: select

  return (
    <>
      {%- assign item = section.settings -%}

{%- assign grid = item.toshow -%}
{%- capture info_image_size -%}
{%- case grid -%}
{%- when '1' -%}{item.fullwidth && (1920x800px{% else %}1180x800px)}
{%- when '2' -%}{item.fullwidth && (1200x750px{% else %}800x500px)}
{%- when '3' -%}{item.fullwidth && (800x750px{% else %}400x500px)}
{%- else -%}{item.fullwidth && (650x750px{% else %}300x500px)}
{%- endcase -%}
{%- endcapture -%}

{%- assign img_size = info_image_size | split: 'x' | first | append: 'x' -%}

<div className="{item.top_offset == 'none' && (nomargin {% elsif item.top_offset == 'small' %}tt-offset-small )}container-indent">
  <div className="container{item.fullwidth && (-fluid-custom)}" data-sectionname="index_sectionlookbook"{item.fullwidthpaddings == false and item.fullwidth && ( style="padding: 0 0 44px 0;")}>
    {item.show_title && (
    <div className="tt-block-title{item.title_to_left && ( text-left)}{item.boxed_title and item.fullwidth && ( container)}">
      <h2 className="tt-title">{item.text1}</h2>
      {% unless item.text2 == '' %}<div className="tt-description">{item.text2}</div>{% endunless %}
      {% unless item.default_carousel %}{% unless item.text3 == '' %}<p>{item.text3}</p>{% endunless %}{% endunless %}
    </div>)}
    {%- if section.blocks.size > 0 -%}
    <div className="tt-carousel-lookbook arrow-location-center row tt-dots-absolute slick-animated-show-js" data-slick='{"slidesToShow": {item.toshow}, "slidesToScroll": {item.step}, "autoplay": {item.module_autoplay}, "autoplaySpeed": {item.delay_time}}'>
      {%- for block in section.blocks -%}{%- assign b_i = block.settings -%}
      <div>
        <div className="tt-lookbook">
          {%- if b_i.image == blank -%}{%- include "get_svg" type:'image' size:info_image_size -%}
          {%- else -%}<img src="{{ b_i.image | img_url: img_size }}" alt="{{ b_i.image.alt }}">
          {%- endif -%}
          
          {%- for i in (1..5) -%}
          {%- assign topi = 'positiontop_' | append: i -%}{%- assign topi = b_i[topi] -%}
          {%- assign topl = 'positionleft_' | append: i -%}{%- assign topl = b_i[topl] -%}
          {%- assign pri = 'product_' | append: i -%}{%- assign pri = b_i[pri] -%}
          {%- unless pri == blank -%}

          <div className="tt-hotspot emptycontent" style="top: {{ topi }}%; left: {{ topl }}%;" data-top="{{ topi }}" data-left="{{ topl }}" data-prhandle="{{ pri }}">
            <div className="tt-btn"></div>
            <div className="tt-content-parent">
              
            </div>
          </div>
          {%- endunless -%}
          {%- endfor -%}
        </div>
      </div>
      {%- endfor -%}
    </div>
    {%- else -%}
    <span style="display: flex; justify-content: center;">This section doesn’t currently include any content. Add content to this section using the sidebar.</span>
    {%- endif -%}
  </div>
</div>
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Lookbook",
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
      "type": "checkbox",
      "id": "fullwidth",
      "label": "Fullwidth size",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "show_title",
      "label": "Show Title Block",
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
      "type": "checkbox",
      "id": "fullwidthpaddings",
      "label": "Fullwidth paddings",
      "default": false
    },
    {
      "type": "textarea",
      "id": "text1",
      "label": "Title",
      "default": "DISPLAY YOUR LOOKBOOK"
    },
    {
      "type": "textarea",
      "id": "text2",
      "label": "Small description",
      "default": "AS GRID + SLIDER",
      "info": "If you want delete text from the screen clear field"
    },
    {
      "type": "textarea",
      "id": "text3",
      "label": "Big description",
      "info": "If you want delete text from the screen clear field. Field not work with slider mode"
    },
    {
      "type": "header",
      "content": "Slider Settings"
    },
    {
      "type": "select",
      "id": "toshow",
      "label": "Items in row",
      "options": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "4",
          "label": "4"
        }
      ],
      "default": "3",
      "info": "For screen size > 1024"
    },
    {
      "type": "select",
      "id": "step",
      "label": "Slides To Scroll",
      "default": "3",
      "options": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "4",
          "label": "4"
        }
      ]
    },
    {
      "type": "checkbox",
      "id": "module_autoplay",
      "label": "Auto-rotate slides",
      "default": false
    },
    {
      "type": "select",
      "id": "delay_time",
      "label": "Change slides every",
      "options": [
        {
          "value": "5000",
          "label": "5 seconds"
        },
        {
          "value": "6000",
          "label": "6 seconds"
        },
        {
          "value": "7000",
          "label": "7 seconds"
        },
        {
          "value": "8000",
          "label": "8 seconds"
        },
        {
          "value": "9000",
          "label": "9 seconds"
        },
        {
          "value": "10000",
          "label": "10 seconds"
        }
      ],
      "default": "7000"
    }
  ],
  "blocks": [
    {
      "type": "item",
      "name": "Image",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Image"
        },
        {
          "type": "header",
          "content": "Product 1"
        },
        {
          "type": "text",
          "id": "positiontop_1",
          "label": "Position top",
          "default": "9",
          "info": "In percent"
        },
        {
          "type": "textarea",
          "id": "positionleft_1",
          "label": "Position left",
          "default": "63",
          "info": "In percent"
        },
        {
          "type": "product",
          "id": "product_1",
          "label": "Select product"
        },
        {
          "type": "header",
          "content": "Product 2"
        },
        {
          "type": "text",
          "id": "positiontop_2",
          "label": "Position top",
          "default": "26",
          "info": "In percent"
        },
        {
          "type": "textarea",
          "id": "positionleft_2",
          "label": "Position left",
          "default": "50",
          "info": "In percent"
        },
        {
          "type": "product",
          "id": "product_2",
          "label": "Select product"
        },
        {
          "type": "header",
          "content": "Product 3"
        },
        {
          "type": "text",
          "id": "positiontop_3",
          "label": "Position top",
          "default": "61",
          "info": "In percent"
        },
        {
          "type": "textarea",
          "id": "positionleft_3",
          "label": "Position left",
          "default": "48",
          "info": "In percent"
        },
        {
          "type": "product",
          "id": "product_3",
          "label": "Select product"
        },
        {
          "type": "header",
          "content": "Product 4"
        },
        {
          "type": "text",
          "id": "positiontop_4",
          "label": "Position top",
          "default": "0",
          "info": "In percent"
        },
        {
          "type": "textarea",
          "id": "positionleft_4",
          "label": "Position left",
          "default": "0",
          "info": "In percent"
        },
        {
          "type": "product",
          "id": "product_4",
          "label": "Select product"
        },
        {
          "type": "header",
          "content": "Product 5"
        },
        {
          "type": "text",
          "id": "positiontop_5",
          "label": "Position top",
          "default": "20",
          "info": "In percent"
        },
        {
          "type": "textarea",
          "id": "positionleft_5",
          "label": "Position left",
          "default": "0",
          "info": "In percent"
        },
        {
          "type": "product",
          "id": "product_5",
          "label": "Select product"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Lookbook",
      "category": "Lookbook",
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
