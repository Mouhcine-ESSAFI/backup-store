// components/shopify-sections/ListCollectionsTemplate.jsx
// Converted from Shopify section: list-collections-template

'use client';
import Image from 'next/image';

export default function ListCollectionsTemplate({ settings, data }) {
  // Settings from Shopify:
  // Top Offset: select
  // Fullwidth size: checkbox
  // Default Grid: radio
  // Unique value in row: textarea
  // Show Button: checkbox
  // undefined: header
  // Show section CONTENT: checkbox
  // Custom html code: textarea
  // undefined: header
  // Show title: checkbox
  // Title to left: checkbox
  // Boxed title when fullwidth: checkbox
  // Title: textarea
  // Description: textarea
  // undefined: header
  // Button size: select
  // Animation for text background: select
  // Main text information position: select
  // undefined: header
  // Description background roundness: range

  return (
    <>
      {%- assign item = section.settings -%}
{%- assign info_image_size = '600x600' -%}

{%- assign lineitem = section.settings.lineitem | append: ',' | split: ',' -%}
{%- assign linerow = '' -%}{%- assign count = 0 -%}{%- assign itemlimit = section.settings.item_grid | plus: 0 -%}
{%- assign newlinecount = 0 -%}{%- capture current_itemlimit -%}{%- if lineitem[newlinecount] != empty? -%}{{ lineitem[newlinecount] | strip }}{%- else -%}{{ itemlimit }}{%- endif -%}{%- endcapture -%}{%- assign current_itemlimit = current_itemlimit | plus: 0 -%}{%- if current_itemlimit > 4 -%}{%- assign current_itemlimit = itemlimit -%}{%- endif -%}
{%- for block in section.blocks limit: limit -%}{%- assign count = count | plus: 1 -%}
{%- if count == current_itemlimit or forloop.last -%}{%- assign linerow = linerow | append: count -%}{%- assign count = 0 -%}{%- unless forloop.last -%}{%- assign linerow = linerow | append: "|" -%}{%- endunless -%}
{%- assign newlinecount = newlinecount | plus: 1 -%}{%- capture current_itemlimit -%}{%- if lineitem[newlinecount] != empty? -%}{{ lineitem[newlinecount] | strip }}{%- else -%}{{ itemlimit }}{%- endif -%}{%- endcapture -%}{%- assign current_itemlimit = current_itemlimit | plus: 0 -%}{%- if current_itemlimit > 4 -%}{%- assign current_itemlimit = itemlimit -%}{%- endif -%}
{%- endif -%}
{%- endfor -%}{%- assign linerow = linerow | split: '|' -%}{%- assign array = '' -%}{%- assign clearfix = '' -%}
{%- for _linerow in linerow -%}{%- for i in (1.._linerow) -%}
{%- if _linerow == '1' -%}{%- assign array = array | append: 'col-sm-12 col-md-12' | append: '|' -%}
{%- elsif _linerow == '2' -%}{%- assign array = array | append: 'col-sm-6' | append: '|' -%}
{%- elsif _linerow == '3' -%}{%- assign array = array | append: 'col-sm-6 col-md-6 col-lg-4' | append: '|' -%}
{%- elsif _linerow == '4' -%}{%- assign array = array | append: 'col-sm-6 col-md-6 col-lg-3' | append: '|' -%}
{%- endif -%}{%- unless forloop.last -%}{%- assign clearfix = clearfix | append: ',' -%}{%- endunless -%}
{%- endfor -%}{%- assign clearfix = clearfix | append: '<div className="clearfix hidden-xs hidden-sm"></div>' | append: ',' -%}{%- endfor -%}{%- assign array = array | split: '|' -%}{%- assign clearfix = clearfix | split: ',' -%}

<div className="{item.top_offset == 'none' && (nomargin {% elsif item.top_offset == 'small' %}tt-offset-small )}container-indent">
  <div className="container{item.fullwidth && (-fluid)}">
    {%- if item.show_title_m -%}
    <div className="tt-block-title{item.title_to_left && ( text-left)}{item.boxed_title and item.fullwidth && ( container)}">
      <h2 className="tt-title">{item.text1}</h2>
      {%- unless item.text2 == '' -%}<div className="tt-description">{item.text2}</div>{%- endunless -%}
    </div>
    {%- endif -%}
    <div className="tt-layout-promo-box">
      <div className="row">
        
        {%- if item.html != '' -%}{item.html}{%- endif -%}
        
        {%- if item.show_blocks -%}
        {%- if section.blocks.size > 0 -%}

        {%- for block in section.blocks -%}
          {%- assign b_i = block.settings -%}
          {%- assign collection = collections[b_i.collection] -%}

          {%- assign bg_alpha = b_i.background_alpha | divided_by: 100.00 -%}
          {%- assign bg_color = b_i.cbtnbg | color_modify: 'alpha', bg_alpha -%}
          {%- assign bg_alpha_a = b_i.background_alpha_a | divided_by: 100.00 -%}
          {%- assign bg_color_a = b_i.acbtnbg | color_modify: 'alpha', bg_alpha_a -%}
          {%- assign radius = '-moz-border-radius:' | append: item.bg_round | append: 'px;' | append: '-webkit-border-radius:' | append: item.bg_round | append: 'px;' | append: 'border-radius:' | append: item.bg_round | append: 'px;' | append: '-khtml-border-radius:' | append: item.bg_round | append: 'px;' %}
        
        <div className="{{ array[forloop.index0] }} respimgsize">          
          <a href="{b_i.external_link && ({b_i.link}{% else %}{collection.url})}" className="tt-promo-box{b_i.description_size == 'use_main_size' && ({item.description_size == 'small' && ( tt-one-child)}{% else %}{b_i.description_size == 'small' && ( tt-one-child)})}{b_i.animation == 'use_main_animation' && ({item.animation == 'simple' && ( hover-type-2)}{% else %}{b_i.animation == 'simple' && ( hover-type-2)})}" data-hovercolors>
            {%- if b_i.image == blank and b_i.usecollectionimage == false or collection.image == blank -%}
            <span>
              {% include "get_svg" type:'collection' size:info_image_size %}
            </span>
            {%- else -%}
            {%- unless b_i.usecollectionimage -%}
        	<img className="lazyload"
                 data-mainimageratio = '{{ b_i.image.aspect_ratio }}'
                 data-mainimage="{{ b_i.image | img_url: '100x100' | replace: '100x100', 'respimgsize' }}"
                 alt="{{ b_i.image.alt }}">
            {%- else -%}
        	<img className="lazyload"
                 data-mainimageratio = '{{ collection.image.aspect_ratio }}'
                 data-mainimage="{{ collection.image | img_url: '100x100' | replace: '100x100', 'respimgsize' }}"
                 alt="{{ collection.image.alt }}">
            {%- endunless -%}
            {%- endif -%}

            {%- unless b_i.description_size == 'hide' -%}{%- if item.show_title -%}
            <div className="tt-description {b_i.position != 'use_main_position' && ({b_i.position}{% else %}{item.position})}">
              <div className="tt-description-wrapper{b_i.text_to_left && ( text-left)}">
                <div className="tt-background" style="background:{{ bg_color }}; {{ radius }}" data-bgc="{{ bg_color }}" data-abgc="{{ bg_color_a }}"></div>
                <div className="tt-title-small" style="color:{b_i.cbtntext};" data-c="{b_i.cbtntext}" data-ac="{b_i.acbtntext}">{collection != blank && ({b_i.custom_name != ''%}{b_i.custom_name}{% else && ({collection.title})}{% else %}Select Collection)}</div>
              </div>
            </div>
            {%- endif -%}{%- endunless -%}
          </a>

        </div>
        {%- endfor -%}
        
        {%- else -%}
        <span style="display: flex; justify-content: center;">This section doesn’t currently include any content. Add content to this section using the sidebar.</span>
        {%- endif -%}{%- endif -%}
        
      </div>
    </div>
  </div>
</div>
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Collections list page",
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
      "default": false
    },
    {
      "type": "radio",
      "id": "item_grid",
      "label": "Default Grid",
      "options": [
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
      "default": "3"
    },
    {
      "type": "textarea",
      "id": "lineitem",
      "label": "Unique value in row",
      "info": "Integers(max 4). Separate by comma: 1,2,3,4"
    },
    {
      "type": "checkbox",
      "id": "show_title",
      "label": "Show Button",
      "default": true
    },
    {
      "type": "header",
      "content": "Custom html"
    },
    {
      "type": "checkbox",
      "id": "show_blocks",
      "label": "Show section CONTENT",
      "default": true
    },
    {
      "type": "textarea",
      "id": "html",
      "label": "Custom html code",
      "info": "Paste your custom html code with bootstrap 4"
    },
    {
      "type": "header",
      "content": "Title"
    },
    {
      "type": "checkbox",
      "id": "show_title_m",
      "label": "Show title",
      "default": false
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
      "type": "textarea",
      "id": "text1",
      "label": "Title",
      "default": "POPULAR"
    },
    {
      "type": "textarea",
      "id": "text2",
      "label": "Description",
      "default": "CLOTHING BRANDS"
    },
    {
      "type": "header",
      "content": "Main settings"
    },
    {
      "type": "select",
      "id": "description_size",
      "label": "Button size",
      "default": "small",
      "options": [
        {
          "value": "small",
          "label": "Small"
        },
        {
          "value": "big",
          "label": "Big"
        }
      ]
    },
    {
      "type": "select",
      "id": "animation",
      "label": "Animation for text background",
      "default": "simple",
      "options": [
        {
          "value": "scale",
          "label": "Scale"
        },
        {
          "value": "simple",
          "label": "No scale"
        }
      ]
    },
    {
      "type": "select",
      "id": "position",
      "label": "Main text information position",
      "info": "Main settings for all items",
      "default": "normal",
      "options": [
        {
          "value": "tt-point-v-t tt-point-h-l",
          "label": "Top Left"
        },
        {
          "value": "tt-point-v-t",
          "label": "Top Center"
        },
        {
          "value": "tt-point-v-t tt-point-h-r",
          "label": "Top Right"
        },
        {
          "value": "tt-point-h-l",
          "label": "Left"
        },
        {
          "value": "normal",
          "label": "Center"
        },
        {
          "value": "tt-point-h-r",
          "label": "Right"
        },
        {
          "value": "tt-point-v-b tt-point-h-l",
          "label": "Bottom Left"
        },
        {
          "value": "tt-point-v-b",
          "label": "Bottom Center"
        },
        {
          "value": "tt-point-v-b tt-point-h-r",
          "label": "Bottom Right"
        }
      ]
    },
    {
      "type": "header",
      "content": "Description background roundness"
    },
    {
      "type": "range",
      "id": "bg_round",
      "min": 0,
      "max": 50,
      "step": 1,
      "unit": "px",
      "label": "Description background roundness",
      "default": 12
    }
  ],
  "blocks": [
    {
      "type": "collection",
      "name": "Collection",
      "settings": [
        {
          "label": "Collection",
          "id": "collection",
          "type": "collection"
        },
        {
          "type": "checkbox",
          "id": "external_link",
          "label": "Use external link",
          "default": false
        },
        {
          "type": "url",
          "id": "link",
          "label": "Link",
          "info": "Optional"
        },
        {
          "type": "checkbox",
          "id": "usecollectionimage",
          "label": "Set Collection Image",
          "default": false,
          "info": "Set image in collection settings. Default \"Custom Image\""
        },
        {
          "type": "image_picker",
          "id": "image",
          "label": "Custom Image"
        },
        {
          "type": "header",
          "content": "Unique settings"
        },
        {
          "type": "checkbox",
          "id": "text_to_left",
          "label": "Text to left",
          "default": false
        },
        {
          "type": "select",
          "id": "description_size",
          "label": "Description size",
          "info": "Set unique size for this item",
          "default": "use_main_size",
          "options": [
            {
              "value": "use_main_size",
              "label": "Use main size"
            },
            {
              "value": "hide",
              "label": "Hide"
            },
            {
              "value": "small",
              "label": "Small"
            },
            {
              "value": "big",
              "label": "Big"
            }
          ]
        },
        {
          "type": "select",
          "id": "animation",
          "label": "Animation for text background",
          "info": "Set unique animation for this item",
          "default": "use_main_animation",
          "options": [
            {
              "value": "use_main_animation",
              "label": "Use main animation"
            },
            {
              "value": "scale",
              "label": "Scale"
            },
            {
              "value": "simple",
              "label": "No scale"
            }
          ]
        },
        {
          "type": "select",
          "id": "position",
          "label": "Text information position",
          "info": "Set unique position for this item",
          "default": "use_main_position",
          "options": [
            {
              "value": "use_main_position",
              "label": "Use main position"
            },
            {
              "value": "tt-point-v-t tt-point-h-l",
              "label": "Top Left"
            },
            {
              "value": "tt-point-v-t",
              "label": "Top Center"
            },
            {
              "value": "tt-point-v-t tt-point-h-r",
              "label": "Top Right"
            },
            {
              "value": "tt-point-h-l",
              "label": "Left"
            },
            {
              "value": "normal",
              "label": "Center"
            },
            {
              "value": "tt-point-h-r",
              "label": "Right"
            },
            {
              "value": "tt-point-v-b tt-point-h-l",
              "label": "Bottom Left"
            },
            {
              "value": "tt-point-v-b",
              "label": "Bottom Center"
            },
            {
              "value": "tt-point-v-b tt-point-h-r",
              "label": "Bottom Right"
            }
          ]
        },
        {
          "type": "header",
          "content": "Texts"
        },
        {
          "type": "text",
          "id": "custom_name",
          "label": "Custom Name",
          "info": "If \"Custom Name\" is empty, title = default collection name"
        },
        {
          "type": "header",
          "content": "Colors"
        },
        {
          "type": "color",
          "id": "cbtntext",
          "label": "Base text color",
          "default": "#191919"
        },
        {
          "type": "color",
          "id": "acbtntext",
          "label": "Active text color",
          "default": "#ffffff"
        },
        {
          "type": "paragraph",
          "content": "Background color"
        },
        {
          "type": "color",
          "id": "cbtnbg",
          "label": "Base background color",
          "default": "#ffffff"
        },
        {
          "type": "text",
          "id": "background_alpha",
          "label": "Base background opacity",
          "default": "90",
          "info": "Range: 0-100 Percent"
        },
        {
          "type": "color",
          "id": "acbtnbg",
          "label": "Active background color",
          "default": "#191919"
        },
        {
          "type": "text",
          "id": "background_alpha_a",
          "label": "Active background opacity",
          "default": "90",
          "info": "Range: 0-100 Percent"
        }
      ]
    }
  ]
};
