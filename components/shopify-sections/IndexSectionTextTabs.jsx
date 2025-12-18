// components/shopify-sections/IndexSectionTextTabs.jsx
// Converted from Shopify section: index-section-text_tabs

'use client';
import Image from 'next/image';

export default function IndexSectionTextTabs({ settings, data }) {
  // Settings from Shopify:
  // Top Offset: select
  // Fullwidth size: checkbox
  // undefined: header
  // Show title: checkbox
  // Title to left: checkbox
  // Boxed title when fullwidth: checkbox
  // Description: textarea
  // Title: textarea
  // undefined: header
  // Titles color: color
  // Texts color: color
  // undefined: header
  // Buttons to: select
  // Button background color: color
  // Button text color: color
  // Button background active color: color
  // Button text active color: color
  // undefined: header
  // undefined: paragraph
  // undefined: paragraph
  // undefined: paragraph
  // undefined: paragraph
  // undefined: paragraph
  // undefined: paragraph
  // undefined: paragraph
  // undefined: paragraph
  // undefined: paragraph
  // undefined: paragraph
  // undefined: paragraph
  // Button custom styles: textarea
  // HOVER. Button custom styles: textarea
  // undefined: header
  // undefined: header
  // Main title block bottom padding: range
  // undefined: paragraph
  // Font size Main description: range
  // Line height Main description: range
  // Font weight Main description: range
  // undefined: paragraph
  // Main title top offset: range
  // Font size Main title: range
  // Line height Main title: range
  // Font weight Main title: range
  // undefined: paragraph
  // Item content top offset from buttons: range
  // undefined: paragraph
  // Item title top offset: range
  // Font size Item title: range
  // Line height Item title: range
  // Font weight Item title: range
  // undefined: paragraph
  // Item description top offset: range
  // Font size Item description: range
  // Line height Item description: range
  // Font weight Item description: range
  // undefined: header
  // Main title block bottom padding: range
  // undefined: paragraph
  // Font size Main description: range
  // Line height Main description: range
  // undefined: paragraph
  // Main title top offset: range
  // Font size Main title: range
  // Line height Main title: range
  // undefined: paragraph
  // Item content top offset from buttons: range
  // undefined: paragraph
  // Item title top offset: range
  // Font size Item title: range
  // Line height Item title: range
  // undefined: paragraph
  // Item description top offset: range
  // Font size Item description: range
  // Line height Item description: range
  // undefined: header
  // Use background color or padding: checkbox
  // Background color: color
  // Vertical top padding desktop: text
  // Vertical bottom padding desktop: text
  // Vertical top padding mobile: text
  // Vertical bottom padding mobile: text
  // undefined: paragraph
  // Show background image: checkbox
  // Image: image_picker
  // Image postion: select
  // Image size: select
  // undefined: header
  // Auto-rotate tabs: checkbox
  // Change tabs every: select

  return (
    <>
      {%- assign item = section.settings -%}
{%- assign sectionid = section.id -%}
{%- assign tabs = '' -%}
{%- assign tabscont = '' -%}
{%- assign grid = '' -%}
{%- assign blockid = '' -%}
{%- assign usepadding = '' -%}

<div className="{item.top_offset == 'none' && (nomargin {% elsif item.top_offset == 'small' %}tt-offset-small )}container-indent texttabssection texttabssection{section.id}" data-sectionname="index_texttabssection">
  {item.usebgcolor && (<div{item.showbgimage && ( style="background-image: url({{ item.image | img_url: '2048x' }});")}>)}
  <div className="container{item.fullwidth && (-fluid-custom container-fluid-custom-mobile-padding)}">
    {%- if item.show_title -%}
    <div className="tt-block-title{item.title_to_left && ( text-left)}{item.boxed_title and item.fullwidth && ( container)}">
      {%- unless item.text1 == '' -%}<div className="tt-description">{item.text1}</div>{%- endunless -%}
      {%- unless item.text2 == '' -%}<h2 className="tt-title">{item.text2}</h2>{%- endunless -%}
    </div>
    {%- endif -%}
    <!-- tab -->
    
    {%- if section.blocks.size > 0 -%}
    {%- for block in section.blocks -%}{%- assign b_i = block.settings -%}
    {%- case block.type -%}
    {%- when 'item' -%}
    {% capture val %}{b_i.text}{% endcapture %}
    {% assign tabs = tabs | append: val | append: "%%|%%" %}
    
    {% capture val %}
    {%- if b_i.showimage -%}
    <div className="tt-layout01__img respimgsize">
      {%- if b_i.image == blank -%}{%- include "get_svg" type:'image' size:'500x300px' -%}
      {%- else -%}
      <img className="lazyload"
           data-src="{{ b_i.image | img_url: '1000x' }}"
           alt="{{ b_i.image.alt }}">
      {%- endif -%}
    </div>
    {%- endif -%}
    <div className="tt-layout01__content">
      {b_i.titlem != "" && (<div className="{b_i.titletextalign}">{b_i.titlem}</div>)}
      
      {b_i.use2columns && (
      <div className="tt-desc row {b_i.contenttextalign}">
        <div className="col-md-6">
          {b_i.desc1}
        </div>
        <div className="col-md-6 align-self-center">
          {b_i.desc2}
        </div>
      </div>
      {% else %}
      <div className="tt-desc {b_i.contenttextalign}">
        {b_i.desc1}
      </div>
      )}

    </div>
    {% endcapture %}
    
    {%- assign tabscont = tabscont | append: val | append: "%%|%%" -%}
	{%- assign grid = grid | append: b_i.columnsize | append: "%%|%%" -%}
    {%- assign blockid = blockid | append: block.id | append: "%%|%%" -%}
    {%- assign usepadding = usepadding | append: b_i.usepadding | append: "%%|%%" -%}
    
    {%- when 'button' -%}
    {% capture buttonhtml %}

    <div className="{b_i.textalign} sectionbtn">
      <a href="{b_i.btnurl == blank && (#{% else %}{b_i.btnurl})}" className="btn">{b_i.btnname}</a>
    </div>

    {% endcapture %}
    {%- endcase -%}

    {%- endfor -%}
    {%- else -%}
    <span style="display: flex; justify-content: center;">This section doesn’t currently include any content. Add content to this section using the sidebar.</span>
    {%- endif -%}

    {%- assign tabs = tabs | split: "%%|%%" -%}
    {%- assign tabscont = tabscont | split: "%%|%%" -%}
    {%- assign grid = grid | split: "%%|%%" -%}
    {%- assign blockid = blockid | split: "%%|%%" -%}
    {%- assign usepadding = usepadding | split: "%%|%%" -%}
    <div className="tabs-box">
      <ul className="nav nav-tabs nav-tabs__default02" role="tablist"{item.module_autoplay && ( data-customtabsdelay="{item.delay_time}")}>
        {%- for _tabs in tabs -%}
        <li className="nav-item">
          <a className="nav-link{forloop.first && ( show active)}" data-toggle="tab" href="#tt-tab-0{forloop.index}{{ sectionid }}" role="tab"><span>{{ _tabs }}</span></a>
        </li>
        {%- endfor -%}
      </ul>
      <div className="tab-content tab-content__default02">
        {%- for _tabscont in tabscont -%}
        <div className="{grid[forloop.index0] == 'col-md-12' && (tab-design {usepadding[forloop.index0] == 'false' && ( no-paddings )})}tab-content{{ blockid[forloop.index0] }} tab-pane{forloop.first && ( active)} fade" id="tt-tab-0{forloop.index}{{ sectionid }}" role="tabpanel">
          
          {grid[forloop.index0] != 'col-md-12' && (<div className="row justify-content-center">
            <div className="tab-design{usepadding[forloop.index0] == 'false' && ( no-paddings)} {{ grid[forloop.index0] }}">)}
              
              <div className="tt-layout01">
                {{ _tabscont }}
              </div>
              
          {grid[forloop.index0] != 'col-md-12' && (</div>
          </div>)}
          
        </div>
        {%- endfor -%}
      </div>
    </div>
    
    {{ buttonhtml }}
  </div>
  {item.usebgcolor && (</div>)}
</div>

<style>
  .texttabssection{section.id}.texttabssection .nav-tabs__default02 {
    justify-content: {item.buttons_to};
    align-content: {item.buttons_to};
    align-items: {item.buttons_to};
  }
  .texttabssection{section.id} .nav-tabs__default02 li>a {
    color: {item.cbtntext};
    background: {item.bg_color};
    {item.btn_custom_styles}
  }
  .texttabssection{section.id} .nav-tabs__default02 li>a.active,
  .texttabssection{section.id} .nav-tabs__default02 li>a:hover {
    color: {item.cbtntext_a};
    background: {item.bg_color_a};
    {item.btn_custom_styles_hover}
  }
  {item.usebgcolor && (
  .texttabssection{section.id} > div{
    background-color: {item.bgco};
    background-repeat: no-repeat;
    background-size: {item.imagesize};
    background-position: {item.imagealign};
  }
  
  @media (min-width: 1025px){
    .texttabssection{section.id} > div{
      padding-top: {item.bgdepad}px;
      padding-bottom: {item.bgdepad_2}px;
    }
  }
  @media (max-width: 1024px){
    .texttabssection{section.id} > div{
      padding-top: {item.bgmopad}px;
      padding-bottom: {item.bgmopad_2}px;
    }
  }
  )}

  .texttabssection{section.id} .tab-content__default02{
    margin-top: {item.toppaddingitem}px;
  }
  .texttabssection{section.id} .tt-block-title{
    padding-bottom: {item.titlepadding}px;
  }
  .texttabssection{section.id} .tt-block-title .tt-title{
    margin-top: {item.toppaddingmtitle}px;
    font-size: {item.fontsizemtitle}px;
    line-height: {item.lineheightmtitle}px;
    font-weight: {item.fontweightmtitle};
    color: {item.colortext1};
  }
  .texttabssection{section.id} .tt-block-title .tt-description{
    font-size: {item.fontsizemdesc}px;
    line-height: {item.lineheightmdesc}px;
    font-weight: {item.fontweightmdesc};
    color: {item.colortext2};
  }
  .texttabssection{section.id} .tt-layout01 .tt-title {
    margin-top: {item.toppaddingititle}px;
    font-size: {item.fontsizeititle}px;
    line-height: {item.lineheightititle}px;
    font-weight: {item.fontweightititle};
  }
  .texttabssection{section.id} .tt-layout01 .tt-desc{
    margin-top: {item.toppaddingidesc}px;
    font-size: {item.fontsizeidesc}px;
    line-height: {item.lineheightidesc}px;
    font-weight: {item.fontweightidesc};
  }
  
  @media (max-width: 768px){
    .texttabssection{section.id} .tab-content__default02{
      margin-top: {item.toppaddingitem_mobile}px;
    }
    .texttabssection{section.id} .tt-block-title{
      padding-bottom: {item.titlepadding_mobile}px;
    }
    .texttabssection{section.id} .tt-block-title .tt-title{
      margin-top: {item.toppaddingmtitle_mobile}px;
      font-size: {item.fontsizemtitle_mobile}px;
      line-height: {item.lineheightmtitle_mobile}px;
    }
    .texttabssection{section.id} .tt-block-title .tt-description{
      font-size: {item.fontsizemdesc_mobile}px;
      line-height: {item.lineheightmdesc_mobile}px;
    }
    .texttabssection{section.id} .tt-layout01 .tt-title {
      margin-top: {item.toppaddingititle_mobile}px;
      font-size: {item.fontsizeititle_mobile}px;
      line-height: {item.lineheightititle_mobile}px;
    }
    .texttabssection{section.id} .tt-layout01 .tt-desc{
      margin-top: {item.toppaddingidesc_mobile}px;
      font-size: {item.fontsizeidesc_mobile}px;
      line-height: {item.lineheightidesc_mobile}px;
    }
  }

  {%- for block in section.blocks -%}
  {%- assign b_i = block.settings -%}
  {%- case block.type -%}
  {%- when 'item' -%}
  .tab-content{block.id} .tt-layout01 .tt-title {
    color: {b_i.text1color};
  }
  .tab-content{block.id} .tt-layout01{
    color: {b_i.text2color};
  }
  .tab-content__default02 .tab-content{block.id}.tab-design,
  .tab-content__default02 .tab-content{block.id} .tab-design{
    background-color: {b_i.bg_color};
    border-radius: {b_i.bg_round}px;
    border: {b_i.border}px solid {b_i.bordercolor};
    {b_i.item_bg_styles}
  }
  {%- when 'button' -%}
  .texttabssection{section.id} .sectionbtn .btn{
    background:{b_i.bg_color};
    color:{b_i.cbtntext};
    {b_i.btn_custom_styles}
  }
  .texttabssection{section.id} .sectionbtn .btn:hover{
    background:{b_i.bg_color_a};
    color:{b_i.cbtntext_a};
    {b_i.btn_custom_styles_hover}
  }
  @media (min-width: 1025px){
    .texttabssection{section.id} .sectionbtn{
      margin-top: {b_i.toppadding}px;
    }
  }
  @media (max-width: 1024px){
    .texttabssection{section.id} .sectionbtn{
      margin-top: {b_i.toppadding_mobile}px;
    }
  }
  {%- endcase -%}
  {%- endfor -%}
</style>
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Text Tabs",
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
      "default": false
    },
    {
      "type": "header",
      "content": "Title"
    },
    {
      "type": "checkbox",
      "id": "show_title",
      "label": "Show title",
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
      "type": "textarea",
      "id": "text1",
      "label": "Description",
      "default": "Text field"
    },
    {
      "type": "textarea",
      "id": "text2",
      "label": "Title",
      "default": "Text Field"
    },
    {
      "type": "header",
      "content": "Colors"
    },
    {
      "type": "color",
      "id": "colortext1",
      "label": "Titles color",
      "default": "#191919"
    },
    {
      "type": "color",
      "id": "colortext2",
      "label": "Texts color",
      "default": "#777777"
    },
    {
      "type": "header",
      "content": "Tabs buttons style"
    },
    {
      "type": "select",
      "id": "buttons_to",
      "label": "Buttons to",
      "default": "center",
      "options": [
        {
          "value": "flex-start",
          "label": "Left"
        },
        {
          "value": "center",
          "label": "Center"
        },
        {
          "value": "flex-end",
          "label": "Right"
        }
      ]
    },
    {
      "type": "color",
      "id": "bg_color",
      "label": "Button background color",
      "default": "#2879FE"
    },
    {
      "type": "color",
      "id": "cbtntext",
      "label": "Button text color",
      "default": "#191919"
    },
    {
      "type": "color",
      "id": "bg_color_a",
      "label": "Button background active color",
      "default": "#2267D8"
    },
    {
      "type": "color",
      "id": "cbtntext_a",
      "label": "Button text active color",
      "default": "#ffffff"
    },
    {
      "type": "header",
      "content": "Button custom styles"
    },
    {
      "type": "paragraph",
      "content": "padding: top right bottom left; Values in px"
    },
    {
      "type": "paragraph",
      "content": "[background: link to find your gradient](https://cssgradient.io/);"
    },
    {
      "type": "paragraph",
      "content": "height: button height in px;"
    },
    {
      "type": "paragraph",
      "content": "[box-shadow: link to find your value](https://www.cssmatic.com/box-shadow);"
    },
    {
      "type": "paragraph",
      "content": "border-radius: value in px;"
    },
    {
      "type": "paragraph",
      "content": "border: solid \"width - value in px\" \"Border color\";"
    },
    {
      "type": "paragraph",
      "content": "font-size: values in px;"
    },
    {
      "type": "paragraph",
      "content": "letter-spacing: values in em or px;"
    },
    {
      "type": "paragraph",
      "content": "font-family: your font name;"
    },
    {
      "type": "paragraph",
      "content": "font-weight: example 300 or 500 or 600;"
    },
    {
      "type": "paragraph",
      "content": "text-decoration: underline or none;"
    },
    {
      "type": "textarea",
      "id": "btn_custom_styles",
      "label": "Button custom styles",
      "info": "not for \"Underline by default\""
    },
    {
      "type": "textarea",
      "id": "btn_custom_styles_hover",
      "label": "HOVER. Button custom styles",
      "info": "not for \"Underline by default\""
    },
    {
      "type": "header",
      "content": "Style settings"
    },
    {
      "type": "header",
      "content": "Desktop screen"
    },
    {
      "type": "range",
      "id": "titlepadding",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Main title block bottom padding",
      "default": 36
    },
    {
      "type": "paragraph",
      "content": "Main description"
    },
    {
      "type": "range",
      "id": "fontsizemdesc",
      "min": 14,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Font size Main description",
      "default": 24
    },
    {
      "type": "range",
      "id": "lineheightmdesc",
      "min": 14,
      "max": 101,
      "step": 1,
      "unit": "px",
      "label": "Line height Main description",
      "default": 33
    },
    {
      "type": "range",
      "id": "fontweightmdesc",
      "min": 300,
      "max": 900,
      "step": 100,
      "label": "Font weight Main description",
      "default": 400
    },
    {
      "type": "paragraph",
      "content": "Main title"
    },
    {
      "type": "range",
      "id": "toppaddingmtitle",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Main title top offset",
      "default": 16
    },
    {
      "type": "range",
      "id": "fontsizemtitle",
      "min": 14,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Font size Main title",
      "default": 48
    },
    {
      "type": "range",
      "id": "lineheightmtitle",
      "min": 14,
      "max": 101,
      "step": 1,
      "unit": "px",
      "label": "Line height Main title",
      "default": 53
    },
    {
      "type": "range",
      "id": "fontweightmtitle",
      "min": 300,
      "max": 900,
      "step": 100,
      "label": "Font weight Main title",
      "default": 600
    },
    {
      "type": "paragraph",
      "content": "Item content settings"
    },
    {
      "type": "range",
      "id": "toppaddingitem",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Item content top offset from buttons",
      "default": 0
    },
    {
      "type": "paragraph",
      "content": "Item settings title"
    },
    {
      "type": "range",
      "id": "toppaddingititle",
      "min": -20,
      "max": 80,
      "step": 1,
      "unit": "px",
      "label": "Item title top offset",
      "default": 9
    },
    {
      "type": "range",
      "id": "fontsizeititle",
      "min": 12,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Font size Item title",
      "default": 24
    },
    {
      "type": "range",
      "id": "lineheightititle",
      "min": 12,
      "max": 101,
      "step": 1,
      "unit": "px",
      "label": "Line height Item title",
      "default": 33
    },
    {
      "type": "range",
      "id": "fontweightititle",
      "min": 300,
      "max": 900,
      "step": 100,
      "label": "Font weight Item title",
      "default": 500
    },
    {
      "type": "paragraph",
      "content": "Item settings description"
    },
    {
      "type": "range",
      "id": "toppaddingidesc",
      "min": -20,
      "max": 80,
      "step": 1,
      "unit": "px",
      "label": "Item description top offset",
      "default": 23
    },
    {
      "type": "range",
      "id": "fontsizeidesc",
      "min": 12,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Font size Item description",
      "default": 18
    },
    {
      "type": "range",
      "id": "lineheightidesc",
      "min": 12,
      "max": 101,
      "step": 1,
      "unit": "px",
      "label": "Line height Item description",
      "default": 24
    },
    {
      "type": "range",
      "id": "fontweightidesc",
      "min": 300,
      "max": 900,
      "step": 100,
      "label": "Font weight Item description",
      "default": 400
    },
    {
      "type": "header",
      "content": "Mobile screen"
    },
    {
      "type": "range",
      "id": "titlepadding_mobile",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Main title block bottom padding",
      "default": 21
    },
    {
      "type": "paragraph",
      "content": "Main description"
    },
    {
      "type": "range",
      "id": "fontsizemdesc_mobile",
      "min": 14,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Font size Main description",
      "default": 16
    },
    {
      "type": "range",
      "id": "lineheightmdesc_mobile",
      "min": 14,
      "max": 101,
      "step": 1,
      "unit": "px",
      "label": "Line height Main description",
      "default": 24
    },
    {
      "type": "paragraph",
      "content": "Main title"
    },
    {
      "type": "range",
      "id": "toppaddingmtitle_mobile",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Main title top offset",
      "default": 16
    },
    {
      "type": "range",
      "id": "fontsizemtitle_mobile",
      "min": 14,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Font size Main title",
      "default": 24
    },
    {
      "type": "range",
      "id": "lineheightmtitle_mobile",
      "min": 14,
      "max": 101,
      "step": 1,
      "unit": "px",
      "label": "Line height Main title",
      "default": 31
    },
    {
      "type": "paragraph",
      "content": "Item content settings"
    },
    {
      "type": "range",
      "id": "toppaddingitem_mobile",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Item content top offset from buttons",
      "default": 0
    },
    {
      "type": "paragraph",
      "content": "Item settings title"
    },
    {
      "type": "range",
      "id": "toppaddingititle_mobile",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Item title top offset",
      "default": 20
    },
    {
      "type": "range",
      "id": "fontsizeititle_mobile",
      "min": 12,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Font size Item title",
      "default": 24
    },
    {
      "type": "range",
      "id": "lineheightititle_mobile",
      "min": 12,
      "max": 101,
      "step": 1,
      "unit": "px",
      "label": "Line height Item title",
      "default": 33
    },
    {
      "type": "paragraph",
      "content": "Item settings description"
    },
    {
      "type": "range",
      "id": "toppaddingidesc_mobile",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Item description top offset",
      "default": 23
    },
    {
      "type": "range",
      "id": "fontsizeidesc_mobile",
      "min": 12,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Font size Item description",
      "default": 18
    },
    {
      "type": "range",
      "id": "lineheightidesc_mobile",
      "min": 12,
      "max": 101,
      "step": 1,
      "unit": "px",
      "label": "Line height Item description",
      "default": 24
    },
    {
      "type": "header",
      "content": "Background Settings"
    },
    {
      "type": "checkbox",
      "id": "usebgcolor",
      "label": "Use background color or padding",
      "default": false
    },
    {
      "type": "color",
      "id": "bgco",
      "label": "Background color",
      "default": "#ffffff"
    },
    {
      "type": "text",
      "id": "bgdepad",
      "label": "Vertical top padding desktop",
      "default": "80",
      "info": "integer, in px"
    },
    {
      "type": "text",
      "id": "bgdepad_2",
      "label": "Vertical bottom padding desktop",
      "default": "80",
      "info": "integer, in px"
    },
    {
      "type": "text",
      "id": "bgmopad",
      "label": "Vertical top padding mobile",
      "default": "80",
      "info": "integer, in px"
    },
    {
      "type": "text",
      "id": "bgmopad_2",
      "label": "Vertical bottom padding mobile",
      "default": "80",
      "info": "integer, in px"
    },
    {
      "type": "paragraph",
      "content": "Background image"
    },
    {
      "type": "checkbox",
      "id": "showbgimage",
      "label": "Show background image",
      "default": false
    },
    {
      "type": "image_picker",
      "id": "image",
      "label": "Image"
    },
    {
      "type": "select",
      "id": "imagealign",
      "label": "Image postion",
      "default": "center",
      "options": [
        {
          "value": "top",
          "label": "Top"
        },
        {
          "value": "center",
          "label": "Center"
        },
        {
          "value": "bottom",
          "label": "Bottom"
        }
      ]
    },
    {
      "type": "select",
      "id": "imagesize",
      "label": "Image size",
      "default": "cover",
      "options": [
        {
          "value": "cover",
          "label": "Full background size"
        },
        {
          "value": "contain",
          "label": "Contain"
        }
      ]
    },
    {
      "type": "header",
      "content": "Tabs autoplay"
    },
    {
      "type": "checkbox",
      "id": "module_autoplay",
      "label": "Auto-rotate tabs",
      "default": false
    },
    {
      "type": "select",
      "id": "delay_time",
      "label": "Change tabs every",
      "options": [
        {
          "value": "4000",
          "label": "4 seconds"
        },
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
      "default": "5000"
    }
  ],
  "blocks": [
    {
      "type": "item",
      "name": "Tab Item",
      "settings": [
        {
          "type": "text",
          "id": "text",
          "label": "Tab name",
          "default": "Tab Name"
        },
        {
          "type": "header",
          "content": "Content"
        },
        {
          "type": "select",
          "id": "columnsize",
          "label": "Desktop tab size",
          "default": "col-md-12",
          "options": [
            {
              "value": "col-md-8",
              "label": "8 Columns"
            },
            {
              "value": "col-md-10",
              "label": "10 Columns"
            },
            {
              "value": "col-md-12",
              "label": "12 Columns"
            }
          ]
        },
        {
          "type": "checkbox",
          "id": "showimage",
          "label": "Show image",
          "default": false
        },
        {
          "type": "image_picker",
          "id": "image",
          "label": "Image"
        },
        {
          "type": "select",
          "id": "titletextalign",
          "label": "Content text align",
          "default": "text-center",
          "options": [
            {
              "value": "text-left",
              "label": "Left"
            },
            {
              "value": "text-center",
              "label": "Center"
            }
          ]
        },
        {
          "type": "textarea",
          "id": "titlem",
          "label": "Title",
          "default": "Title"
        },
        {
          "type": "select",
          "id": "contenttextalign",
          "label": "Content text align",
          "default": "text-left",
          "options": [
            {
              "value": "text-left",
              "label": "Left"
            },
            {
              "value": "text-center",
              "label": "Center"
            }
          ]
        },
        {
          "type": "textarea",
          "id": "desc1",
          "label": "Html content 1",
          "default": "Html content",
          "info": "Default"
        },
        {
          "type": "checkbox",
          "id": "use2columns",
          "label": "Use second column html content",
          "default": false
        },
        {
          "type": "textarea",
          "id": "desc2",
          "label": "Html content 2",
          "default": "Second column html content",
          "info": "Second column content"
        },
        {
          "type": "header",
          "content": "Design"
        },
        {
          "type": "color",
          "id": "text1color",
          "label": "Title color",
          "default": "#191919"
        },
        {
          "type": "color",
          "id": "text2color",
          "label": "Text color",
          "default": "#777777"
        },
        {
          "type": "checkbox",
          "id": "usepadding",
          "label": "Use internal background padding",
          "default": true
        },
        {
          "type": "color",
          "id": "bg_color",
          "label": "Item background color",
          "default": "#FFFFFF"
        },
        {
          "type": "range",
          "id": "bg_round",
          "min": 0,
          "max": 50,
          "step": 1,
          "unit": "px",
          "label": "Item background roundness",
          "default": 10
        },
        {
          "type": "range",
          "id": "border",
          "min": 0,
          "max": 20,
          "step": 1,
          "unit": "px",
          "label": "Item border",
          "default": 5
        },
        {
          "type": "color",
          "id": "bordercolor",
          "label": "Item border color",
          "default": "#000000"
        },
        {
          "type": "paragraph",
          "content": "Item custom styles"
        },
        {
          "type": "paragraph",
          "content": "[background: link to find your gradient](https://cssgradient.io/);"
        },
        {
          "type": "paragraph",
          "content": "[box-shadow: link to find your value](https://www.cssmatic.com/box-shadow);"
        },
        {
          "type": "textarea",
          "id": "item_bg_styles",
          "label": "Item background custom styles"
        }
      ]
    },
    {
      "type": "button",
      "name": "Button",
      "limit": 1,
      "settings": [
        {
          "type": "url",
          "id": "btnurl",
          "label": "Button link"
        },
        {
          "type": "text",
          "id": "btnname",
          "label": "Button Name",
          "default": "READ MORE"
        },
        {
          "type": "select",
          "id": "textalign",
          "label": "Button align",
          "default": "text-center",
          "options": [
            {
              "value": "text-left",
              "label": "Left"
            },
            {
              "value": "text-center",
              "label": "Center"
            },
            {
              "value": "text-right",
              "label": "Right"
            }
          ]
        },
        {
          "type": "header",
          "content": "Colors"
        },
        {
          "type": "color",
          "id": "bg_color",
          "label": "Button background color",
          "default": "#191919"
        },
        {
          "type": "color",
          "id": "cbtntext",
          "label": "Button text color",
          "default": "#ffffff"
        },
        {
          "type": "color",
          "id": "bg_color_a",
          "label": "Button background active color",
          "default": "#ffffff"
        },
        {
          "type": "color",
          "id": "cbtntext_a",
          "label": "Button text active color",
          "default": "#191919"
        },
        {
          "type": "header",
          "content": "Button custom styles"
        },
        {
          "type": "paragraph",
          "content": "padding: top right bottom left; Values in px"
        },
        {
          "type": "paragraph",
          "content": "[background: link to find your gradient](https://cssgradient.io/);"
        },
        {
          "type": "paragraph",
          "content": "height: button height in px;"
        },
        {
          "type": "paragraph",
          "content": "[box-shadow: link to find your value](https://www.cssmatic.com/box-shadow);"
        },
        {
          "type": "paragraph",
          "content": "border-radius: value in px;"
        },
        {
          "type": "paragraph",
          "content": "border: solid \"width - value in px\" \"Border color\";"
        },
        {
          "type": "paragraph",
          "content": "font-size: values in px;"
        },
        {
          "type": "paragraph",
          "content": "letter-spacing: values in em or px;"
        },
        {
          "type": "paragraph",
          "content": "font-family: your font name;"
        },
        {
          "type": "paragraph",
          "content": "font-weight: example 300 or 500 or 600;"
        },
        {
          "type": "paragraph",
          "content": "text-decoration: underline or none;"
        },
        {
          "type": "textarea",
          "id": "btn_custom_styles",
          "label": "Button custom styles",
          "info": "not for \"Underline by default\""
        },
        {
          "type": "textarea",
          "id": "btn_custom_styles_hover",
          "label": "HOVER. Button custom styles",
          "info": "not for \"Underline by default\""
        },
        {
          "type": "header",
          "content": "Desktop screen offset"
        },
        {
          "type": "range",
          "id": "toppadding",
          "min": 0,
          "max": 100,
          "step": 1,
          "unit": "px",
          "label": "Button top offset",
          "default": 50
        },
        {
          "type": "header",
          "content": "Mobile screen offset"
        },
        {
          "type": "range",
          "id": "toppadding_mobile",
          "min": 0,
          "max": 100,
          "step": 1,
          "unit": "px",
          "label": "Button top offset",
          "default": 30
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Text Tabs",
      "category": "Simple Section"
    }
  ]
};
