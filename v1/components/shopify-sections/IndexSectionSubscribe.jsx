// components/shopify-sections/IndexSectionSubscribe.jsx
// Converted from Shopify section: index-section-subscribe

'use client';
import Image from 'next/image';

export default function IndexSectionSubscribe({ settings, data }) {
  // Settings from Shopify:
  // Top Offset: select
  // Fullwidth size: checkbox
  // Big column size for screen > 1024px: range
  // Medium column size for screen > 791px: range
  // All in left: checkbox
  // undefined: header
  // Text 1: textarea
  // Text 2: textarea
  // Input field text: textarea
  // Button name: textarea
  // Text 3: textarea
  // undefined: header
  // Font size text 1: range
  // Line height text 1: range
  // Font weight text 1: range
  // Text 2 top offset: range
  // Font size text 2: range
  // Line height text 2: range
  // Font weight text 2: range
  // Form top offset: range
  // Text 3 top offset: range
  // Font size text 3: range
  // Line height text 3: range
  // Font weight text 3: range
  // undefined: header
  // Font size text 1 mobile: range
  // Line height text 1 mobile: range
  // Text 2 top offset mobile: range
  // Font size text 2 mobile: range
  // Line height text 2 mobile: range
  // Form top offset mobile: range
  // Text 3 top offset mobile: range
  // Font size text 3 mobile: range
  // Line height text 3 mobile: range
  // undefined: header
  // Text 1 color: color
  // Text 2 color: color
  // Text 3 color: color
  // Links color: color
  // Links by default underline: checkbox
  // undefined: header
  // Input background color: color
  // Input border color: color
  // Border width: range
  // Input text color: color
  // ACTIVE. Input background color: color
  // ACTIVE. Input border color: color
  // ACTIVE. Border width: range
  // ACTIVE. Input text color: color
  // Button background color: color
  // Button text color: color
  // Button background active color: color
  // Button text active color: color
  // Button custom styles: textarea
  // HOVER. Button custom styles: textarea
  // undefined: header
  // Use background color: checkbox
  // Use boxed background color: checkbox
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
  // Use minimal height: checkbox
  // Min height for big screen size: text
  // Min height for medium screen size: text
  // Min height for mobile screen size: text

  return (
    <>
      {%- assign item = section.settings -%}

<div className="{item.top_offset == 'none' && (nomargin {% elsif item.top_offset == 'small' %}tt-offset-small )}container-indent subsection{section.id}">
  {item.usebgcolor and item.useboxedbgcolor == false && (<div className="subsectionbg"{item.showbgimage_bg && ( style="background-image: url({{ item.image_bg | img_url: '2048x' }});")}>)}
  <div className="container{item.fullwidth && (-fluid-custom-mobile-padding container-fluid-custom)}">
    <div className="row justify-content-center{item.usebgcolor and item.useboxedbgcolor && ( subsectionbg)}"{item.usebgcolor and item.useboxedbgcolor and item.showbgimage_bg && ( style="background-image: url({{ item.image_bg | img_url: '2048x' }});")}>
      <div className="col-md-{item.mdsize} col-lg-{item.lgsize}">
        <div className="tt-layout-newsletter02{item.allinleft && ( text-left)}">
          {item.text1 != "" && (<h2 className="tt-title">{item.text1}</h2>)}
          {item.text2 != "" && (<div className="tt-title-description">{item.text2}</div>)}

          <div className="form-default{item.allinleft && ( text-left)}">
            {%- if settings.use_mailchimp_form -%}
            {%- if settings.mailchimp_form_action != "" -%}
            <form action="{settings.mailchimp_form_action}" method="post" name="mc-embedded-subscribe-form" target="_blank">
              <div className="form-group">
                <input type="email" name="EMAIL" className="form-control"
                       value="{customer && ({customer.email})}"
                       placeholder="{item.subfplholder}"
                       >
                <button type="submit" className="btn">{item.subfbtext}</button>
              </div>
            </form>
            {%- else -%}
            <strong><u><a href="{shop.url}/admin/themes" style="color: black;">
              Add newsletter redirect link in:<br>
              Customize Theme / General Settings / Newsletter / MailChimp form action URL
              </a></u></strong>
            {%- endif -%}

            {%- else -%}
            {%- form 'customer' -%}
            {{ form.errors | default_errors }}
            {%- if form.posted_successfully? -%}

            {%- endif -%}
            <div className="form-group">
              <input type="hidden" name="contact[tags]" value="newsletter">
              <input type="email"
                     name="contact[email]"
                     className="form-control"
                     value="{customer && ({customer.email})}"
                     placeholder="{item.subfplholder}"
                     autocomplete="off"
                     autocapitalize="off"
                     spellcheck="false" >
              <button type="submit" className="btn" name="commit">{item.subfbtext}</button>
            </div>
            {%- endform -%}
            {%- endif -%}
          </div>

          {item.text3 != "" && (<p>{item.text3}</p>)}
                   
        </div>

        {%- for block in section.blocks -%}{%- assign b_i = block.settings -%}
        {%- if b_i.show_socials -%}
        <div className="tt-footer-social-icon socblock{block.id}">
          <ul className="tt-social-icon{% unless item.allinleft %} justify-content-center{% endunless %}">
            {%- if b_i.facebook_url -%}<li><a className="icon-g-64" target="_blank" href="{b_i.facebook_url}"></a></li>{%- endif -%}
            {%- if b_i.twitter_url -%}<li><a className="icon-h-58" target="_blank" href="{b_i.twitter_url}"></a></li>{%- endif -%}
            {%- if b_i.gmail_url -%}<li><a className="icon-g-66" target="_blank" href="{b_i.gmail_url}"></a></li>{%- endif -%}
            {%- if b_i.instagram_url -%}<li><a className="icon-g-67" target="_blank" href="{b_i.instagram_url}"></a></li>{%- endif -%}
            {%- if b_i.pinterest_url -%}<li><a className="icon-g-70" target="_blank" href="{b_i.pinterest_url}"></a></li>{%- endif -%}
            {%- if b_i.youtube_url -%}<li><a className="icon-g-76" target="_blank" href="{b_i.youtube_url}"></a></li>{%- endif -%}
            {%- if b_i.whatsapp_url -%}<li><a target="_blank" href="{b_i.whatsapp_url}">{% include "svg-whatsapp" %}</a></li>{%- endif -%}
          </ul>
        </div>
        {%- endif -%}
        {%- endfor -%}
        
      </div>
    </div>
  </div>
  {item.usebgcolor and item.useboxedbgcolor == false && (</div>)}
</div>

<style>
  .subsection{section.id} .tt-layout-newsletter02 .tt-title {
    font-size: {item.fontsizetext1}px;
    line-height: {item.lineheighttext1}px;
    color: {item.colortext1};
    font-weight: {item.fontweighttext1};
  }
  .subsection{section.id} .tt-layout-newsletter02 .tt-title-description {
    font-size: {item.fontsizetext2}px;
    line-height: {item.lineheighttext2}px;
    font-weight: {item.fontweighttext2};
    margin-top: {item.text2offset}px;
    color: {item.colortext2};
  }
  .subsection{section.id} .tt-layout-newsletter02 p {
    font-size: {item.fontsizetext3}px;
    line-height: {item.lineheighttext3}px;
    font-weight: {item.fontweighttext3};
    margin-top: {item.text3offset}px;
    color: {item.colortext3};
  }
  .subsection{section.id} .tt-layout-newsletter02 form {
    margin-top: {item.formoffset}px;
  }
  @media (max-width: 1024px){
    .subsection{section.id} .tt-layout-newsletter02 .tt-title {
      font-size: {item.fontsizetext1_mobile}px;
      line-height: {item.lineheighttext1_mobile}px;
    }
    .subsection{section.id} .tt-layout-newsletter02 .tt-title-description {
      font-size: {item.fontsizetext2_mobile}px;
      line-height: {item.lineheighttext2_mobile}px;
      margin-top: {item.text2offset_mobile}px;
    }
    .subsection{section.id} .tt-layout-newsletter02 p {
      font-size: {item.fontsizetext3_mobile}px;
      line-height: {item.lineheighttext3_mobile}px;
      margin-top: {item.text3offset_mobile}px;
    }
    .subsection{section.id} .tt-layout-newsletter02 form {
      margin-top: {item.formoffset_mobile}px;
    }
  }
  .subsection{section.id} .tt-layout-newsletter02 form .form-group .form-control {
    background-color: {item.bg_form};
    border: {item.bg_form_bo_s}px solid {item.bg_form_bo};
    color: {item.bg_form_text};
  }
  .subsection{section.id} .tt-layout-newsletter02 form .form-group .form-control:hover,
  .subsection{section.id} .tt-layout-newsletter02 form .form-group .form-control:focus {
    background-color: {item.bg_forma};
    border: {item.bg_form_bo_sa}px solid {item.bg_form_boa};
    color: {item.bg_form_texta};
    padding-left: calc(15px - {{ item.bg_form_bo_s | times: -1 | plus: item.bg_form_bo_sa }}px);
  }
  .subsection{section.id} .tt-layout-newsletter02 form .btn{
  	color: {item.cbtntext};
    background: {item.bg_color};
    {item.btn_custom_styles}
  }
  .subsection{section.id} .tt-layout-newsletter02 form .btn:hover{
  	color: {item.cbtntext_a};
    background: {item.bg_color_a};
    {item.btn_custom_styles_hover}
  }
  .subsection{section.id} .tt-layout-newsletter02 a {
    color: {item.colorlink};
  }
  {item.defaultuderline && (
  .subsection{section.id} .tt-layout-newsletter02 a {
    text-decoration: underline;
  }
  .subsection{section.id} .tt-layout-newsletter02 a:hover {
    text-decoration: none;
  }
  )}
  .subsection{section.id} .form-default ::-webkit-input-placeholder {
    color: {item.bg_form_text};
  }
  .subsection{section.id} .form-default ::-moz-placeholder {
    color: {item.bg_form_text};
  }
  .subsection{section.id} .form-default :-moz-placeholder {
    color: {item.bg_form_text};
  }
  .subsection{section.id} .form-default :-ms-input-placeholder {
    color: {item.bg_form_text};
  }
  .subsection{section.id} .form-default .form-control:hover::-webkit-input-placeholder,
  .subsection{section.id} .form-default .form-control:focus::-webkit-input-placeholder {
    color: {item.bg_form_texta};
  }
  .subsection{section.id} .form-default .form-control:hover::-moz-placeholder,
  .subsection{section.id} .form-default .form-control:focus::-moz-placeholder {
    color: {item.bg_form_texta};
  }
  .subsection{section.id} .form-default .form-control:hover:-moz-placeholder,
  .subsection{section.id} .form-default .form-control:focus:-moz-placeholder {
    color: {item.bg_form_texta};
  }
  .subsection{section.id} .form-default .form-control:hover:-ms-input-placeholder,
  .subsection{section.id} .form-default .form-control:focus:-ms-input-placeholder {
    color: {item.bg_form_texta};
  }
  .subsection{section.id} .subsectionbg{
    background-color: {item.bgco};
    background-repeat: no-repeat;
    background-size: {item.imagesize_bg};
    background-position: {item.imagealign_bg};
  }
  .subsection{section.id} .row.subsectionbg{
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 1025px){
    .subsection{section.id} .subsectionbg{
      padding-top: {item.bgdepad}px;
      padding-bottom: {item.bgdepad_2}px;
    }
  }
  @media (max-width: 1024px){
    .subsection{section.id} .subsectionbg{
      padding-top: {item.bgmopad}px;
      padding-bottom: {item.bgmopad_2}px;
    }
  }
  {item.usemiheight && (
  @media (min-width: 791px){
    .subsection{section.id} > div > div > .row{
      align-items: center;
      min-height: {item.backgroundminheight2}px;
    }
  }
  @media (min-width: 1200px){
    .subsection{section.id} > div > div > .row{
      align-items: center;
      min-height: {item.backgroundminheight3}px;
    }
  }
  @media (max-width: 790px){
    .subsection{section.id} > div > div > .row{
      align-items: center;
      min-height: {item.backgroundminheight1}px;
    }
  }
  )}
  
  {%- for block in section.blocks -%}{%- assign b_i = block.settings -%}
  .subsection{section.id} .tt-social-icon li a svg{
    top: 0;
  }
  .subsection{section.id} .tt-social-icon li a{
    color: {b_i.soccolor};
  }
  .subsection{section.id} .tt-social-icon li a svg path{
    fill: {b_i.soccolor};
  }
  .subsection{section.id} .tt-social-icon li a:hover{
    color: {b_i.soccolor_hover};
  }
  .subsection{section.id} .tt-social-icon li a:hover svg path{
    fill: {b_i.soccolor_hover};
  }  
  @media (min-width: 769px){
    .subsection{section.id} .socblock{block.id}{
      margin-top: {b_i.socoffset}px;
    }
    .subsection{section.id} .tt-social-icon li a{
      font-size: {b_i.socfontsize}px;
    }
    .subsection{section.id} .tt-social-icon li a svg{
      top: {b_i.soccorrecttopsvg}px;
      width: {b_i.socfontsizesvg}px;
      height: {b_i.socfontsizesvg}px;
    }
    .subsection{section.id} .tt-social-icon li:first-child {
      margin-right: {b_i.socpadding}px;
    }
    .subsection{section.id} .tt-social-icon li:not(:last-child):not(:first-child) {
      margin: 0 {b_i.socpadding}px;
    }
    .subsection{section.id} .tt-social-icon li:last-child {
      margin-left: {b_i.socpadding}px;
    }
  }
  @media (max-width: 769px){
    .subsection{section.id} .socblock{block.id}{
      margin-top: {b_i.socoffset_mobile}px;
    }
    .subsection{section.id} .tt-social-icon li a{
      font-size: {b_i.socfontsize_mobile}px;
    }
    .subsection{section.id} .tt-social-icon li a svg{
      top: {b_i.soccorrecttopsvg}px;
      width: {b_i.socfontsizesvg_mobile}px;
      height: {b_i.socfontsizesvg_mobile}px;
    }
    .subsection{section.id} .tt-social-icon li:first-child {
      margin-right: {b_i.socpadding_mobile}px;
    }
    .subsection{section.id} .tt-social-icon li:not(:last-child):not(:first-child) {
      margin: 0 {b_i.socpadding_mobile}px;
    }
    .subsection{section.id} .tt-social-icon li:last-child {
      margin-left: {b_i.socpadding_mobile}px;
    }
  }
  {%- endfor -%}
  
</style>
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Subscribe form",
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
      "type": "range",
      "id": "lgsize",
      "min": 4,
      "max": 12,
      "step": 1,
      "label": "Big column size for screen > 1024px",
      "default": 8
    },
    {
      "type": "range",
      "id": "mdsize",
      "min": 4,
      "max": 12,
      "step": 1,
      "label": "Medium column size for screen > 791px",
      "default": 10
    },
    {
      "type": "checkbox",
      "id": "allinleft",
      "label": "All in left",
      "default": false
    },
    {
      "type": "header",
      "content": "Content"
    },
    {
      "type": "textarea",
      "id": "text1",
      "label": "Text 1",
      "default": "KEEP IN TOUCH"
    },
    {
      "type": "textarea",
      "id": "text2",
      "label": "Text 2",
      "default": "Enjoy 15% off your first order when you join our mailing list."
    },
    {
      "type": "textarea",
      "id": "subfplholder",
      "label": "Input field text",
      "default": "Enter your e-mail"
    },
    {
      "type": "textarea",
      "id": "subfbtext",
      "label": "Button name",
      "default": "JOIN US"
    },
    {
      "type": "textarea",
      "id": "text3",
      "label": "Text 3",
      "default": "By clicking the button you agree to the <a href=\"#\">Privacy Policy</a> and <a href=\"#\">Terms and Conditions</a>"
    },
    {
      "type": "header",
      "content": "Desktop texts size"
    },
    {
      "type": "range",
      "id": "fontsizetext1",
      "min": 14,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Font size text 1",
      "default": 34
    },
    {
      "type": "range",
      "id": "lineheighttext1",
      "min": 14,
      "max": 101,
      "step": 1,
      "unit": "px",
      "label": "Line height text 1",
      "default": 41
    },
    {
      "type": "range",
      "id": "fontweighttext1",
      "min": 300,
      "max": 900,
      "step": 100,
      "label": "Font weight text 1",
      "default": 500
    },
    {
      "type": "range",
      "id": "text2offset",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Text 2 top offset",
      "default": 10
    },
    {
      "type": "range",
      "id": "fontsizetext2",
      "min": 14,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Font size text 2",
      "default": 18
    },
    {
      "type": "range",
      "id": "lineheighttext2",
      "min": 14,
      "max": 101,
      "step": 1,
      "unit": "px",
      "label": "Line height text 2",
      "default": 22
    },
    {
      "type": "range",
      "id": "fontweighttext2",
      "min": 300,
      "max": 900,
      "step": 100,
      "label": "Font weight text 2",
      "default": 300
    },
    {
      "type": "range",
      "id": "formoffset",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Form top offset",
      "default": 34
    },
    {
      "type": "range",
      "id": "text3offset",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Text 3 top offset",
      "default": 30
    },
    {
      "type": "range",
      "id": "fontsizetext3",
      "min": 12,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Font size text 3",
      "default": 14
    },
    {
      "type": "range",
      "id": "lineheighttext3",
      "min": 14,
      "max": 101,
      "step": 1,
      "unit": "px",
      "label": "Line height text 3",
      "default": 22
    },
    {
      "type": "range",
      "id": "fontweighttext3",
      "min": 300,
      "max": 900,
      "step": 100,
      "label": "Font weight text 3",
      "default": 300
    },
    {
      "type": "header",
      "content": "Mobile texts size"
    },
    {
      "type": "range",
      "id": "fontsizetext1_mobile",
      "min": 14,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Font size text 1 mobile",
      "default": 31
    },
    {
      "type": "range",
      "id": "lineheighttext1_mobile",
      "min": 14,
      "max": 101,
      "step": 1,
      "unit": "px",
      "label": "Line height text 1 mobile",
      "default": 38
    },
    {
      "type": "range",
      "id": "text2offset_mobile",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Text 2 top offset mobile",
      "default": 10
    },
    {
      "type": "range",
      "id": "fontsizetext2_mobile",
      "min": 14,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Font size text 2 mobile",
      "default": 18
    },
    {
      "type": "range",
      "id": "lineheighttext2_mobile",
      "min": 14,
      "max": 101,
      "step": 1,
      "unit": "px",
      "label": "Line height text 2 mobile",
      "default": 22
    },
    {
      "type": "range",
      "id": "formoffset_mobile",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Form top offset mobile",
      "default": 34
    },
    {
      "type": "range",
      "id": "text3offset_mobile",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Text 3 top offset mobile",
      "default": 30
    },
    {
      "type": "range",
      "id": "fontsizetext3_mobile",
      "min": 12,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Font size text 3 mobile",
      "default": 14
    },
    {
      "type": "range",
      "id": "lineheighttext3_mobile",
      "min": 14,
      "max": 101,
      "step": 1,
      "unit": "px",
      "label": "Line height text 3 mobile",
      "default": 22
    },
    {
      "type": "header",
      "content": "Texts color"
    },
    {
      "type": "color",
      "id": "colortext1",
      "label": "Text 1 color",
      "default": "#191919"
    },
    {
      "type": "color",
      "id": "colortext2",
      "label": "Text 2 color",
      "default": "#777777"
    },
    {
      "type": "color",
      "id": "colortext3",
      "label": "Text 3 color",
      "default": "#777777"
    },
    {
      "type": "color",
      "id": "colorlink",
      "label": "Links color",
      "default": "#2879FE"
    },
    {
      "type": "checkbox",
      "id": "defaultuderline",
      "label": "Links by default underline",
      "default": false
    },
    {
      "type": "header",
      "content": "Form colors"
    },
    {
      "type": "color",
      "id": "bg_form",
      "label": "Input background color",
      "default": "#ffffff"
    },
    {
      "type": "color",
      "id": "bg_form_bo",
      "label": "Input border color",
      "default": "#e9e7e7"
    },
    {
      "type": "range",
      "id": "bg_form_bo_s",
      "min": 0,
      "max": 10,
      "step": 1,
      "unit": "px",
      "label": "Border width",
      "default": 1
    },
    {
      "type": "color",
      "id": "bg_form_text",
      "label": "Input text color",
      "default": "#777777"
    },
    {
      "type": "color",
      "id": "bg_forma",
      "label": "ACTIVE. Input background color",
      "default": "#ffffff"
    },
    {
      "type": "color",
      "id": "bg_form_boa",
      "label": "ACTIVE. Input border color",
      "default": "#2879fe"
    },
    {
      "type": "range",
      "id": "bg_form_bo_sa",
      "min": 0,
      "max": 10,
      "step": 1,
      "unit": "px",
      "label": "ACTIVE. Border width",
      "default": 1
    },
    {
      "type": "color",
      "id": "bg_form_texta",
      "label": "ACTIVE. Input text color",
      "default": "#777777"
    },
    {
      "type": "color",
      "id": "bg_color",
      "label": "Button background color",
      "default": "#2879fe"
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
      "default": "#191919"
    },
    {
      "type": "color",
      "id": "cbtntext_a",
      "label": "Button text active color",
      "default": "#ffffff"
    },
    {
      "type": "textarea",
      "id": "btn_custom_styles",
      "label": "Button custom styles"
    },
    {
      "type": "textarea",
      "id": "btn_custom_styles_hover",
      "label": "HOVER. Button custom styles"
    },
    {
      "type": "header",
      "content": "Background color"
    },
    {
      "type": "checkbox",
      "id": "usebgcolor",
      "label": "Use background color",
      "default": false
    },
    {
      "type": "checkbox",
      "id": "useboxedbgcolor",
      "label": "Use boxed background color",
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
      "id": "showbgimage_bg",
      "label": "Show background image",
      "default": false
    },
    {
      "type": "image_picker",
      "id": "image_bg",
      "label": "Image"
    },
    {
      "type": "select",
      "id": "imagealign_bg",
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
      "id": "imagesize_bg",
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
      "type": "checkbox",
      "id": "usemiheight",
      "label": "Use minimal height",
      "default": false
    },
    {
      "type": "text",
      "id": "backgroundminheight3",
      "label": "Min height for big screen size",
      "default": "450",
      "info": "integer, in px"
    },
    {
      "type": "text",
      "id": "backgroundminheight2",
      "label": "Min height for medium screen size",
      "default": "450",
      "info": "integer, in px"
    },
    {
      "type": "text",
      "id": "backgroundminheight1",
      "label": "Min height for mobile screen size",
      "default": "200",
      "info": "integer, in px"
    }
  ],
  "blocks": [
    {
      "type": "social",
      "name": "Social Buttons",
      "limit": 1,
      "settings": [
        {
          "type": "paragraph",
          "content": "Social Buttons"
        },
        {
          "type": "checkbox",
          "id": "show_socials",
          "label": "Show social buttons",
          "default": true
        },
        {
          "type": "url",
          "id": "facebook_url",
          "label": "Facebook",
          "info": "If url is empty? Link will be hidden"
        },
        {
          "type": "url",
          "id": "twitter_url",
          "label": "Twitter",
          "info": "If url is empty? Link will be hidden"
        },
        {
          "type": "url",
          "id": "gmail_url",
          "label": "Gmail",
          "info": "If url is empty? Link will be hidden"
        },
        {
          "type": "url",
          "id": "instagram_url",
          "label": "Instagram",
          "info": "If url is empty? Link will be hidden"
        },
        {
          "type": "url",
          "id": "pinterest_url",
          "label": "Pinterest",
          "info": "If url is empty? Link will be hidden"
        },
        {
          "type": "url",
          "id": "youtube_url",
          "label": "Youtube",
          "info": "If url is empty? Link will be hidden"
        },
        {
          "type": "url",
          "id": "whatsapp_url",
          "label": "Whatsapp",
          "info": "If url is empty? Link will be hidden"
        },
        {
          "type": "color",
          "id": "soccolor",
          "label": "Icons color",
          "default": "#d8d8d8"
        },
        {
          "type": "color",
          "id": "soccolor_hover",
          "label": "Icons color hover",
          "default": "#191919"
        },
        {
          "type": "range",
          "id": "socoffset",
          "min": 0,
          "max": 100,
          "step": 1,
          "unit": "px",
          "label": "Social top offset",
          "default": 30
        },
        {
          "type": "range",
          "id": "socfontsize",
          "min": 14,
          "max": 100,
          "step": 1,
          "unit": "px",
          "label": "Social icons font size",
          "default": 24
        },
        {
          "type": "range",
          "id": "socfontsizesvg",
          "min": 10,
          "max": 100,
          "step": 1,
          "unit": "px",
          "label": "Svg social icons size",
          "default": 16
        },
        {
          "type": "range",
          "id": "soccorrecttopsvg",
          "min": -50,
          "max": 50,
          "step": 1,
          "unit": "px",
          "label": "Svg social icons correct top position",
          "default": 0
        },
        {
          "type": "range",
          "id": "socpadding",
          "min": 0,
          "max": 100,
          "step": 1,
          "unit": "px",
          "label": "Icons internal padding",
          "default": 5
        },
        {
          "type": "range",
          "id": "socoffset_mobile",
          "min": 0,
          "max": 100,
          "step": 1,
          "unit": "px",
          "label": "MOBILE. Social top offset",
          "default": 30
        },
        {
          "type": "range",
          "id": "socfontsize_mobile",
          "min": 14,
          "max": 100,
          "step": 1,
          "unit": "px",
          "label": "MOBILE. Social icons font size",
          "default": 24
        },
        {
          "type": "range",
          "id": "socfontsizesvg_mobile",
          "min": 10,
          "max": 100,
          "step": 1,
          "unit": "px",
          "label": "MOBILE. Svg social icons size",
          "default": 16
        },
        {
          "type": "range",
          "id": "soccorrecttopsvg_mobile",
          "min": -50,
          "max": 50,
          "step": 1,
          "unit": "px",
          "label": "MOBILE. Svg social icons correct top position",
          "default": 0
        },
        {
          "type": "range",
          "id": "socpadding_mobile",
          "min": 0,
          "max": 100,
          "step": 1,
          "unit": "px",
          "label": "MOBILE. Icons internal padding",
          "default": 5
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Subscribe form",
      "category": "Simple Section"
    }
  ]
};
