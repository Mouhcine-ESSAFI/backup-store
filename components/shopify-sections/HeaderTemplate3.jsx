// components/shopify-sections/HeaderTemplate3.jsx
// Converted from Shopify section: header-template-3

'use client';
import Image from 'next/image';

export default function HeaderTemplate3({ settings, data }) {
  // Settings from Shopify:
  // undefined: header
  // undefined: paragraph
  // Show categorie button: checkbox
  // Open categorie button on home page: checkbox
  // undefined: header
  // Enable sticky header: checkbox
  // undefined: header
  // Menu Menu: link_list
  // undefined: header
  // Header fullwidth: checkbox
  // undefined: header
  // Show sticky logo on desktop: checkbox
  // Width of the sticky logo on the desktop (in pixels): text
  // Show sticky logo on the mobile: checkbox
  // Width of the sticky logo on the mobile (in pixels): text
  // Logo Text: text
  // Desktop logo top offset: text
  // Logo Main: image_picker
  // Logo Main width (in pixels): text
  // Logo Mobile: image_picker
  // Logo Mobile width (in pixels): text
  // undefined: header
  // Show customer links: checkbox
  // Show options links: checkbox
  // Show simple info: checkbox
  // Simple info: textarea
  // undefined: header
  // Compare text: text
  // Wishlist text: text
  // Cart text: text

  return (
    <>
      {%- assign item = section.settings -%}

{%- capture image_size -%}{item.logo_max_width}x{%- endcapture -%}
{%- capture image_size_retina -%}{{ item.logo_max_width | times: 2 }}x{%- endcapture -%}
{%- capture headerlogo -%}{%- if item.logo != blank -%}{{ item.logo | img_url: image_size }}{%- else -%}title_{item.logo_text}{%- endif -%}{%- endcapture -%}
{%- capture headerlogoretina -%}{%- if item.logo != blank -%}{{ item.logo | img_url: image_size_retina }}{%- endif -%}{%- endcapture -%}
{%- capture headerlogoalt -%}{{ item.logo.alt }}{%- endcapture -%}

{%- if template == "index" and settings.header_position -%}
{%- capture headerlogo -%}{%- if settings.show_static_logo -%}{{ 'staticlogo.png' | asset_img_url: image_size }}{%- else -%}title_{item.logo_text}{%- endif -%}{%- endcapture -%}
{%- endif -%}

{%- capture image_size -%}{item.logo_max_mobile_width}x{%- endcapture -%}
{%- capture image_size_retina -%}{{ item.logo_max_mobile_width | times: 2 }}x{%- endcapture -%}
{%- capture headerlogomobile -%}{%- if item.logomobile != blank -%}{{ item.logomobile | img_url: image_size }}{%- else -%}title_{item.logo_text}{%- endif -%}{%- endcapture -%}
{%- capture headerlogomobileretina -%}{%- if item.logomobile != blank -%}{{ item.logomobile | img_url: image_size_retina }}{%- endif -%}{%- endcapture -%}
{%- capture headerlogomobilealt -%}{{ item.logomobile.alt }}{%- endcapture -%}

{%- capture image_size -%}{item.logo_max_width_d}x{%- endcapture -%}
{%- capture image_size_retina -%}{{ item.logo_max_width_d | times: 2 }}x{%- endcapture -%}
{%- capture sheaderlogo -%}{%- if item.logo != blank -%}{{ item.logo | img_url: image_size }}{%- else -%}title_{item.logo_text}{%- endif -%}{%- endcapture -%}
{%- capture sheaderlogoretina -%}{%- if item.logo != blank -%}{{ item.logo | img_url: image_size_retina }}{%- endif -%}{%- endcapture -%}

{%- capture image_size -%}{item.logo_max_width_m}x{%- endcapture -%}
{%- capture image_size_retina -%}{{ item.logo_max_width_m | times: 2 }}x{%- endcapture -%}
{%- capture sheaderlogomobile -%}{%- if item.logomobile != blank -%}{{ item.logomobile | img_url: image_size }}{%- else -%}title_{item.logo_text}{%- endif -%}{%- endcapture -%}
{%- capture sheaderlogomobileretina -%}{%- if item.logomobile != blank -%}{{ item.logomobile | img_url: image_size_retina }}{%- endif -%}{%- endcapture -%}

{%- assign str_blocks_title = '|' -%}
{%- assign str_blocks_title_drag = '|' -%}
{%- for block in section.blocks -%}
{%- assign str_blocks_title = str_blocks_title | append: block.settings.linklist | append: '_' | append: forloop.index0 -%}
{%- unless forloop.last -%}{%- assign str_blocks_title = str_blocks_title | append: '|' -%}{%- endunless -%}
{%- endfor -%}
{%- for block in section.blocks -%}
{%- assign str_blocks_title_drag = str_blocks_title_drag | append: block.settings.newnavigation_item | append: '_' | append: forloop.index0 -%}
{%- unless forloop.last -%}{%- assign str_blocks_title_drag = str_blocks_title_drag | append: '|' -%}{%- endunless -%}
{%- endfor -%}


{%- assign menu_currency = '' -%}
{%- assign menu_language = '' -%}
{%- assign infobar = '' -%}
{%- assign topbar = '' -%}
{%- for block in section.blocks -%}
{%- if block.type == 'menu_currency' -%}{%- assign menu_currency = block.settings -%}{%- endif -%}
{%- if block.type == 'menu_language' -%}{%- assign menu_language = block.settings -%}{%- endif -%}
{%- if block.type == 'infobar' -%}{%- assign infobar = block -%}{%- endif -%}
{%- if block.type == 'topbar' -%}{%- assign topbar = block -%}{%- endif -%}
{%- endfor -%}

{%- if item.show_categorie_button and settings.use_header_inline == false -%}<div className="CATEGORIE MOBILE"></div>{%- endif -%}
<header className="desctop-menu-large headertype3 headertype3-bottom">
  {%- include "main-menu-mobile" mm: item.main_menu_selected -%}
  {%- include "header_infobar" -%}
  {%- include "header_topbar" -%}

  {settings.use_header_inline && ({%- include "header_mobile_inline" -%}
  {% else %}
  <!-- tt-mobile-header -->
  <div className="tt-mobile-header">
    {%- if item.show_simple_info -%}
    <div className="container-fluid">
      <span className="header-tel-info">
        {item.simple_info}
      </span>
    </div>
    {%- endif -%}
    <div className="container-fluid tt-top-line">
      <div className="tt-header-row">
        <div className="tt-mobile-parent-menu">
          <div className="tt-menu-toggle {item.show_categorie_button && (catmenumob-js{% else %}mainmenumob-js)}">
            {% include "svg-mobile-menu" %}
          </div>
        </div>
        {%- if item.show_categorie_button -%}
        <div className="tt-parent-box">
          <a href="#" className="catmobbtn mainmenumob-js">{% include "svg-categories" %}</a>
        </div>
        {%- endif -%}
        <!-- search -->
        <div className="tt-mobile-parent-search tt-parent-box">
          <!-- tt-search -->
          <div className="tt-search tt-dropdown-obj">
            <button className="tt-dropdown-toggle"
                    data-tooltip="{{ 'general.tooltip_texts.header_search' | t }}"
                    data-tposition="bottom"
                    >
              <i className="icon-f-85"></i>
            </button>
            <div className="tt-dropdown-menu">
              <div className="container">
                <form action="/search" method="get" role="search">
                  <div className="tt-col">
                    <input type="hidden" name="type" value="product" />
                    <input className="tt-search-input"
                           type="search"
                           name="q"
                           placeholder="{{ 'general.search.place_holder' | t }}"
                           aria-label="{{ 'general.search.place_holder' | t }}">
                    <button type="submit" className="tt-btn-search"></button>
                  </div>
                  <div className="tt-col">
                    <button className="tt-btn-close icon-f-84"></button>
                  </div>
                  <div className="tt-info-text">{{ 'general.search.header_message' | t }}</div>
                </form>
              </div>
            </div>
          </div>
          <!-- /tt-search -->
        </div>
        <!-- /search -->
        {%- unless settings.catalogue_mode -%}
        {%- if template != "cart" -%}
        <!-- cart -->
        <div className="tt-mobile-parent-cart tt-parent-box"></div>
        <!-- /cart -->
        {%- endif -%}
        {%- endunless -%}
        {%- if item.show_customer_links -%}
        <!-- account -->
        <div className="tt-mobile-parent-account tt-parent-box"></div>
        <!-- /account -->
        {%- endif -%}
        {%- if item.show_options_links -%}
        <!-- currency -->
        <div className="tt-mobile-parent-multi tt-parent-box"></div>
        <!-- /currency -->
        {%- endif -%}
      </div>
    </div>
    <div className="container-fluid tt-top-line">
      <div className="row">
        <div className="tt-logo-container">
          <a className="tt-logo tt-logo-alignment" href="/">
            {%- if headerlogomobile contains "title_" -%}<h2>{{ headerlogomobile | split:"title_" | last }}</h2>
            {%- else -%}<img src="{{ headerlogomobile }}"
                             srcset="{{ headerlogomobile }} 1x, {{ headerlogomobileretina }} 2x"
                             alt="{{ headerlogomobilealt }}"
                             className="tt-retina">
            {%- endif -%}
          </a>
        </div>
      </div>
    </div>
  </div>
  )}
  <!-- tt-desktop-header -->
  <div className="tt-desktop-header">
    <div className="tt-wrapper-light">
      {% include "menu-customer" %}
      
      {%- if item.show_options_links -%}
      <!-- tt-langue and tt-currency -->
      <div className="tt-desctop-parent-multi tt-parent-box">
        <div className="tt-multi-obj tt-dropdown-obj">
          <button className="tt-dropdown-toggle"
                  data-tooltip="{{ 'general.tooltip_texts.header_settings' | t }}"
                  data-tposition="bottom"
                  ><i className="icon-f-79"></i></button>
          <div className="tt-dropdown-menu">
            <div className="tt-mobile-add">
              <button className="tt-close">Close</button>
            </div>
            <div className="tt-dropdown-inner">
              {%- include "menu-currency" -%}
            </div>
          </div>
        </div>
      </div>
      {%- endif -%}

      <div className="container{item.header_fullwidth && (-fluid)} tt-zindex5">
        <div className="tt-header-holder">

          <div className="tt-desctop-parent-menu tt-parent-box">
            <div className="tt-desctop-menu">
              {%- include "main-menu" -%}
            </div>
          </div>

          <div className="tt-col-obj obj-move-right header-inline-options-box">
            <div className="h-account-details">
              {%- if shop.customer_accounts_enabled -%}
              {%- if customer -%}
              <a href="/account">{{ "layout.customer.account" | t }}</a>
               {{ "customer.general.or" | t }} <a href="/account/logout">{{ "layout.customer.log_out" | t }}</a>
              {%- else -%}<a href="/account/login">{{ "layout.customer.sign_in" | t }}</a>
               {{ "customer.general.or" | t }} <a href="/account/register">{{ "layout.customer.register" | t }}</a>
              {%- endif -%}
              {%- endif -%}
            </div>
            
            {%- assign currency = menu_currency.supported_currencies | split: '|' -%}
            {%- if currency.size > 1 and item.show_options_links -%}
            <div className="single-currency-box">
              <div className="tt-dropdown-obj">
                <button className="tt-dropdown-toggle" data-tooltip="{{ "general.tooltip_texts.currency" | t }}" data-tposition="bottom">
                  {%- for value in currency -%}
                  {%- assign array = value | split: ',' -%}
                  {%- assign iso_4217 = array[0] | upcase | strip -%}
                  {%- assign name = array[1] | strip -%}
                  {iso_4217 == shop.currency && (
                  <span className="tt-text">{{ name }}</span>
                  )}
                  {%- endfor -%}
                  <span className="tt-arrow icon-e-13"></span>
                </button>
                <div className="tt-dropdown-menu" style="display: none;">
                  <div className="tt-dropdown-inner">
                    {%- include "menu-currency" -%}
                  </div>
                </div>
              </div>
            </div>
            {%- endif -%}
            
          </div>

        </div>  
      </div>
    
      <div className="container{item.header_fullwidth && (-fluid)}">
        <div className="tt-header-holder">

          <div className="tt-obj-logo" itemscope itemtype="http://schema.org/Organization">
            {%- include "header_logo" -%}
          </div>

          <div className="tt-col-obj tt-obj-options obj-move-right">
            {%- if item.show_simple_info -%}
            <span className="header-tel-info">
              {item.simple_info}
            </span>
            {%- endif -%}

            {%- if settings.show_compare -%}
            <div className="header-icon-with-text tt-compare">
              <a href="/pages/compare" data-tooltip="{{ "general.tooltip_texts.compare" | t }}" data-tposition="bottom">
                <span className="tt-badge" style="display: none;">0</span>
                <span className="tt-icon">
                  {% include "svg-compare" %}
                </span>
                {item.co_text != '' && (<span className="tt-text">
                  {item.co_text}
                </span>)}
              </a>
            </div>
			{%- endif -%}
            {%- if settings.show_wishlist -%}
            <div className="header-icon-with-text tt-wishlist">
              <a href="/pages/wishlist" data-tooltip="{{ "general.tooltip_texts.wishlist" | t }}" data-tposition="bottom">
                {% assign s = customer.metafields.wishlist | size %}
                <span className="tt-badge"{s == 0 && ( style="display: none;")}>{{ s }}</span>
                <span className="tt-icon">
                  {% include "svg-heart" %}
                </span>
                {item.wl_text != '' && (<span className="tt-text">
                  {item.wl_text}
                </span>)}
              </a>
            </div>
			{%- endif -%}
            {%- include "menu-cart" -%}

          </div>
        </div>
      </div>
	</div>
    <div className="container{item.header_fullwidth && (-fluid)} tt-offset-15">
      <div className="row">
        
        {%- if item.show_categorie_button -%}
        <div className="col-12 col-lg-3">
          <div className="categories-btn-box categories-size-large tostuck-det-js{template == "index" and item.categorie_button_open && ( categories-btn-noclick)}" data-parent="categories-btn-box" data-stuckparent="tt-stuck-parent-categories">
            [CATEGORIE, PLEASE SAVE PAGE]
          </div>
        </div>
        {%- endif -%}
        <div className="col-12 col-lg-9">
          <div className="search-type2 headerformplaceholderstyles">
            <form action="/search" method="get" role="search">
              <button className="tt-btn-submit" type="submit">
                <i className="icon-f-85"></i>
              </button>
              <input type="hidden" name="type" value="product" />
              <input className="tt-search-input"
                     type="search"
                     name="q"
                     placeholder="{{ 'general.search.place_holder' | t }}"
                     aria-label="{{ 'general.search.place_holder' | t }}">
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
  <!-- stuck nav -->
  <div className="tt-stuck-nav{% unless item.header_sticky_header %} disabled{% endunless %}{settings.use_header_inline && ( notshowinmobile)}">
    <div className="container{item.header_fullwidth && (-fluid)}">
      <div className="tt-header-row ">
        {%- if item.showsucklogodesktop -%}
        <div className="tt-stuck-parent-logo">
          <a href="/" className="tt-logo" itemprop="url">
            {%- if headerlogo contains "title_" -%}<h2 className="tt-title">{{ headerlogo | split:"title_" | last }}</h2>
            {%- else -%}<img src="{{ sheaderlogo }}"
                             srcset="{{ sheaderlogo }} 1x, {{ sheaderlogoretina }} 2x"
                             alt="{{ headerlogoalt }}"
                             className="tt-retina" itemprop="logo"/>
            {%- endif -%}
          </a>
        </div>
        {%- endif -%}
        {%- if item.show_categorie_button -%}<div className="tt-stuck-parent-categories fromstuck-det-js"></div>{%- endif -%}
        <div className="tt-stuck-parent-menu"></div>
        {%- if item.show_categorie_button -%}<div className="tt-parent-box"><a href="#" className="catmobbtn mainmenumob-js">{% include "svg-categories" %}</a></div>{%- endif -%}
        <div className="tt-stuck-parent-search tt-parent-box"></div>
        {%- unless settings.catalogue_mode -%}
        {%- if template != "cart" -%}
        <div className="tt-stuck-parent-cart tt-parent-box"></div>
        {%- endif -%}
        {%- endunless -%}
        {%- if item.show_customer_links -%}
        <div className="tt-stuck-parent-account tt-parent-box"></div>
        {%- endif -%}
        {%- if item.show_options_links -%}
        <div className="tt-stuck-parent-multi tt-parent-box"></div>
        {%- endif -%}
      </div>
    </div>
    {%- if item.showsucklogomobile and settings.use_header_inline == false -%}
    <div className="tt-mobile-header">
      <div className="container-fluid tt-top-line">
        <div className="row">
          <div className="tt-logo-container">
            <a className="tt-logo tt-logo-alignment" href="/">
              {%- if headerlogomobile contains "title_" -%}<h2>{{ headerlogomobile | split:"title_" | last }}</h2>
              {%- else -%}<img src="{{ sheaderlogomobile }}"
                               srcset="{{ sheaderlogomobile }} 1x, {{ sheaderlogomobileretina }} 2x"
                               alt="{{ headerlogomobilealt }}"
                               className="tt-retina">
              {%- endif -%}
            </a>
          </div>
        </div>
      </div>
    </div>
    {%- endif -%}
  </div>
  
</header>
{%- if item.show_categorie_button and item.categorie_button_open -%}
<script>
  window.addEventListener('DOMContentLoaded', function() {
    function initPageCatMane(){
      if(!$('.for-categories-menu').length || !$('.categories-btn-noclick').length){
        !$('.for-categories-menu').length && $('.categories-btn-noclick').length && $('.categories-btn-noclick').removeClass('categories-btn-noclick');
        return false;
      }
      var p = $('.categories-btn-noclick').children().first().clone().addClass('categories-btn-align categories-btn-content categories-size-large nobutton');
      $('.for-categories-menu').append(p);
    }
    initPageCatMane();
  })
</script>
{%- endif -%}
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Header type 3",
  "settings": [
    {
      "type": "header",
      "content": "Categories button"
    },
    {
      "type": "paragraph",
      "content": "You will see the changes after saving the page with \"Categories button\"."
    },
    {
      "type": "checkbox",
      "id": "show_categorie_button",
      "label": "Show categorie button",
      "default": true,
      "info": "Do action and save page!"
    },
    {
      "type": "checkbox",
      "id": "categorie_button_open",
      "label": "Open categorie button on home page",
      "default": true,
      "info": "Work with revolution slider and enabled empty column"
    },
    {
      "type": "header",
      "content": "Header settings"
    },
    {
      "type": "checkbox",
      "id": "header_sticky_header",
      "label": "Enable sticky header",
      "default": true
    },
    {
      "type": "header",
      "content": "Main Menu"
    },
    {
      "type": "link_list",
      "id": "main_menu_selected",
      "label": "Menu Menu",
      "default": "main-menu",
      "info": "The main menu is the general menu. From the main menu items, we can create mega-menus and other drop-down lists."
    },
    {
      "type": "header",
      "content": "Header width"
    },
    {
      "type": "checkbox",
      "id": "header_fullwidth",
      "label": "Header fullwidth",
      "default": false
    },
    {
      "type": "header",
      "content": "Logo"
    },
    {
      "type": "checkbox",
      "id": "showsucklogodesktop",
      "label": "Show sticky logo on desktop",
      "default": true
    },
    {
      "type": "text",
      "id": "logo_max_width_d",
      "label": "Width of the sticky logo on the desktop (in pixels)",
      "default": "95"
    },
    {
      "type": "checkbox",
      "id": "showsucklogomobile",
      "label": "Show sticky logo on the mobile",
      "default": true
    },
    {
      "type": "text",
      "id": "logo_max_width_m",
      "label": "Width of the sticky logo on the mobile (in pixels)",
      "default": "95"
    },
    {
      "type": "text",
      "id": "logo_text",
      "label": "Logo Text",
      "default": "Wokiee",
      "info": "Work when logo image is empty."
    },
    {
      "type": "text",
      "id": "logo_margin_top",
      "label": "Desktop logo top offset",
      "default": "0",
      "info": "Integer in px"
    },
    {
      "type": "image_picker",
      "id": "logo",
      "label": "Logo Main",
      "info": "95x19px"
    },
    {
      "type": "text",
      "id": "logo_max_width",
      "label": "Logo Main width (in pixels)",
      "default": "95"
    },
    {
      "type": "image_picker",
      "id": "logomobile",
      "label": "Logo Mobile",
      "info": "95x19px"
    },
    {
      "type": "text",
      "id": "logo_max_mobile_width",
      "label": "Logo Mobile width (in pixels)",
      "default": "95"
    },
    {
      "type": "header",
      "content": "Options in logo bar"
    },
    {
      "type": "checkbox",
      "id": "show_customer_links",
      "label": "Show customer links",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "show_options_links",
      "label": "Show options links",
      "default": true,
      "info": "Currency menu"
    },
    {
      "type": "checkbox",
      "id": "show_simple_info",
      "label": "Show simple info",
      "default": true
    },
    {
      "type": "textarea",
      "id": "simple_info",
      "label": "Simple info",
      "default": "<i class=\"icon-f-93\"></i> 777 2345 7885; +777 2345 7886"
    },
    {
      "type": "header",
      "content": "Icons text"
    },
    {
      "type": "text",
      "id": "co_text",
      "label": "Compare text",
      "default": "COMPARE"
    },
    {
      "type": "text",
      "id": "wl_text",
      "label": "Wishlist text",
      "default": "WISHLIST"
    },
    {
      "type": "text",
      "id": "ca_text",
      "label": "Cart text",
      "default": "MY CART"
    }
  ],
  "blocks": [
    {
      "type": "menu_currency",
      "name": "Multiple Сurrencies",
      "limit": 1,
      "settings": [
        {
          "type": "paragraph",
          "content": "Explain to your customers what is happening at the checkout [Click here](https://help.shopify.com/themes/customization/currencies/show-multiple-currencies#explain-to-your-customers-what-happens-at-checkout)."
        },
        {
          "type": "paragraph",
          "content": "Write ISO 4217 Currency Codes [Click here](http://www.xe.com/iso4217.php). Your currencies name: icon [Click here](http://character-code.com/currency-html-codes.php), text."
        },
        {
          "type": "textarea",
          "id": "supported_currencies",
          "label": "Currencies you wish to support",
          "default": "USD, $&nbsp;&nbsp;US Dollars | EUR, €&nbsp;&nbsp;Euro | GBP, &pound;&nbsp;&nbsp;British Pounds",
          "info": "Example: USD, $ US Dollars | EUR, € Euro | GBP, &pound; British Pounds"
        },
        {
          "type": "paragraph",
          "content": "&nbsp; - space"
        },
        {
          "type": "header",
          "content": "Use shopify multiple currencies from admin panel"
        },
        {
          "type": "paragraph",
          "content": "How to enable [shopify multiple currencies](https://help.shopify.com/en/manual/payments/shopify-payments/multi-currency/setup)?"
        },
        {
          "type": "paragraph",
          "content": "Currency must be greater than 1"
        },
        {
          "type": "checkbox",
          "id": "use_multiple_currencies",
          "label": "Show shopify multiple currencies",
          "default": false,
          "info": "Theme pre-built currency selector will not work"
        },
        {
          "type": "checkbox",
          "id": "show_symbol",
          "label": "Show in the name currency Symbol",
          "default": false,
          "info": "Theme pre-built currency selector will not work"
        },
        {
          "type": "checkbox",
          "id": "show_iso_code",
          "label": "Show in the name Iso Code",
          "default": false,
          "info": "Theme pre-built currency selector will not work"
        },
        {
          "type": "checkbox",
          "id": "show_name",
          "label": "Show currency full name",
          "default": true,
          "info": "Theme pre-built currency selector will not work"
        }
      ]
    },
    {
      "type": "infobar",
      "name": "Information bar",
      "limit": 1,
      "settings": [
        {
          "type": "checkbox",
          "id": "show_content",
          "label": "Show content",
          "default": true
        },
        {
          "type": "checkbox",
          "id": "show_content_index",
          "label": "Show content only in the index",
          "default": false
        },
        {
          "type": "checkbox",
          "id": "show_button_close",
          "label": "Show button close",
          "default": true
        },
        {
          "type": "range",
          "id": "fontsize",
          "min": 10,
          "max": 100,
          "step": 1,
          "label": "Font size",
          "default": 18,
          "unit": "px"
        },
        {
          "type": "range",
          "id": "fontweight",
          "min": 300,
          "max": 900,
          "step": 100,
          "label": "Font weight",
          "default": 400
        },
        {
          "type": "range",
          "id": "toppadding",
          "min": 0,
          "max": 100,
          "step": 1,
          "label": "Text top padding",
          "default": 24,
          "unit": "px"
        },
        {
          "type": "range",
          "id": "minimalheight",
          "min": 0,
          "max": 100,
          "step": 1,
          "label": "Bar minimal height",
          "default": 40,
          "unit": "px"
        },
        {
          "type": "range",
          "id": "btnpos",
          "min": -50,
          "max": 50,
          "step": 1,
          "label": "Button close. Correct vertical position",
          "default": -2,
          "unit": "px"
        },
        {
          "type": "textarea",
          "id": "text",
          "label": "Html Text",
          "default": "STUDENT DISCOUNT 20%, OPTIONAL DELIVERY NEXT DAY, EXCLUSIVE SALE. <a href=\"#\">DETAILS</a>"
        },
        {
          "type": "checkbox",
          "id": "background_image",
          "label": "Use background image",
          "default": false
        },
        {
          "type": "image_picker",
          "id": "image",
          "label": "Background image",
          "info": "Image size max height 150px. Use *.png image. Image always in center and not responsive"
        }
      ]
    },
    {
      "type": "topbar",
      "name": "Top bar",
      "limit": 1,
      "settings": [
        {
          "type": "checkbox",
          "id": "show_content",
          "label": "Show content",
          "default": true
        },
        {
          "type": "textarea",
          "id": "text",
          "label": "Html Text",
          "default": "<div class=\"tt-box-info\">\n<ul>\n<li>\n<i class=\"icon-f-93\"></i>+566 4774 9930; +566 4774 9940\n</li>\n<li>\n<i class=\"icon-f-92\"></i>ALL WEEK FROM 9 AM TO 9 PM </li>\n</ul>\n</div>"
        },
        {
          "type": "header",
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
          "id": "whatsapp_url",
          "label": "Whatsapp",
          "info": "If url is empty? Link will be hidden"
        }
      ]
    },
    {
      "type": "menu_two_columns",
      "name": "Simple submenu 2 columns",
      "settings": [
        {
          "type": "paragraph",
          "content": "Use only item names from the main menu. DO NOT INSERT HERE A LINK FROM THE ADMIN PANEL WITH THE MAIN MENU !!!!!"
        },
        {
          "type": "link_list",
          "id": "linklist",
          "label": "Select menu item",
          "info": "Works on the old method with the menu. Creating navigation with documentation. Select an item from the mega menu. Do not use the new drag and drop in the admin panel menu. Drop limit = 1"
        },
        {
          "type": "textarea",
          "id": "newnavigation_item",
          "label": "Main menu item full name",
          "info": "Works with the new admin panel drag and drop menu. Copy and paste the full name of the item from the main menu. Drop limit = 1"
        }
      ]
    },
    {
      "type": "ms_simplewithtitle",
      "name": "Simple submenu with title",
      "settings": [
        {
          "type": "paragraph",
          "content": "Use only item names from the main menu. DO NOT INSERT HERE A LINK FROM THE ADMIN PANEL WITH THE MAIN MENU !!!!!"
        },
        {
          "type": "link_list",
          "id": "linklist",
          "label": "Select menu item",
          "info": "Works on the old method with the menu. Creating navigation with documentation. Select an item from the mega menu. Do not use the new drag and drop in the admin panel menu. Drop limit = 1"
        },
        {
          "type": "textarea",
          "id": "newnavigation_item",
          "label": "Main menu item full name",
          "info": "Works with the new admin panel drag and drop menu. Copy and paste the full name of the item from the main menu. Drop limit = 1"
        }
      ]
    },
    {
      "type": "megamenu",
      "name": "Megamenu",
      "settings": [
        {
          "type": "paragraph",
          "content": "Use only item names from the main menu. DO NOT INSERT HERE A LINK FROM THE ADMIN PANEL WITH THE MAIN MENU !!!!!"
        },
        {
          "type": "link_list",
          "id": "linklist",
          "label": "Select Menu Item",
          "info": "Works on the old method with the menu. Creating navigation with documentation. Select an item from the mega menu. Do not use the new drag and drop in the admin panel menu. Drop out = 4"
        },
        {
          "type": "textarea",
          "id": "newnavigation_item",
          "label": "Main Menu Item Full Name",
          "info": "Works with the new admin panel drag and drop menu. Copy and paste the full name of the item from the main menu. Dropdown = 2"
        },
        {
          "type": "select",
          "id": "grid",
          "label": "Items In Row",
          "options": [
            {
              "value": "2",
              "label": "6"
            },
            {
              "value": "3",
              "label": "4"
            },
            {
              "value": "4",
              "label": "3"
            },
            {
              "value": "6",
              "label": "2"
            }
          ],
          "default": "4"
        },
        {
          "type": "header",
          "content": "----------------"
        },
        {
          "type": "header",
          "content": "Categorie Images"
        },
        {
          "type": "image_picker",
          "id": "image1",
          "label": "Image Item 1"
        },
        {
          "type": "image_picker",
          "id": "image2",
          "label": "Image Item 2"
        },
        {
          "type": "image_picker",
          "id": "image3",
          "label": "Image Item 3"
        },
        {
          "type": "image_picker",
          "id": "image4",
          "label": "Image Item 4"
        },
        {
          "type": "image_picker",
          "id": "image5",
          "label": "Image Item 5"
        },
        {
          "type": "image_picker",
          "id": "image6",
          "label": "Image Item 6"
        },
        {
          "type": "header",
          "content": "----------------"
        },
        {
          "type": "header",
          "content": "Widgets"
        },
        {
          "type": "radio",
          "id": "widget",
          "label": "Widget In the Submenu",
          "options": [
            {
              "value": "none",
              "label": "None"
            },
            {
              "value": "gallery",
              "label": "Gallery"
            },
            {
              "value": "banner",
              "label": "Banner"
            }
          ],
          "default": "banner"
        },
        {
          "type": "header",
          "content": "Widget > Gallery"
        },
        {
          "type": "checkbox",
          "id": "widgetgallery_grid",
          "label": "Use grid 5 for links, 7 for gallery",
          "default": false
        },
        {
          "type": "text",
          "id": "widgetgallery_title",
          "label": "Title",
          "default": "SPECIALS"
        },
        {
          "type": "url",
          "id": "widgetgallery_url",
          "label": "Title Link"
        },
        {
          "label": "Collection",
          "id": "collection",
          "type": "collection"
        },
        {
          "type": "text",
          "id": "collection_limit",
          "label": "Show Products",
          "default": "4",
          "info": "Integer"
        },
        {
          "type": "header",
          "content": "Widget > Banner"
        },
        {
          "type": "url",
          "id": "widgetbanner_url",
          "label": "Banner Link"
        },
        {
          "type": "image_picker",
          "id": "widgetbanner_img",
          "label": "Image",
          "info": "Image must be JPG, 410 x 430 Px"
        },
        {
          "type": "textarea",
          "id": "widgetbanner_title",
          "label": "Text 1",
          "default": "SALE"
        },
        {
          "type": "textarea",
          "id": "widgetbanner_title2",
          "label": "Text 2",
          "default": "70% OFF"
        },
        {
          "type": "textarea",
          "id": "widgetbanner_title3",
          "label": "Text 3",
          "default": "Free shipping on all US order or order above $99"
        },
        {
          "type": "color",
          "id": "widgetbanner_color",
          "label": "Text 1 Color",
          "default": "#ffffff"
        },
        {
          "type": "color",
          "id": "widgetbanner_color2",
          "label": "Text 2 Color",
          "default": "#ffffff"
        },
        {
          "type": "color",
          "id": "widgetbanner_color3",
          "label": "Text 3 Color",
          "default": "#ffffff"
        },
        {
          "type": "color",
          "id": "widgetbanner_color4",
          "label": "Button Color",
          "default": "#ffffff"
        },
        {
          "type": "checkbox",
          "id": "widgetbanner_btn",
          "label": "Show Button",
          "default": true
        },
        {
          "type": "text",
          "id": "widgetbanner_btnname",
          "label": "Button Name",
          "default": "SHOP NOW!"
        },
        {
          "type": "header",
          "content": "----------------"
        },
        {
          "type": "header",
          "content": "Bottom Banners"
        },
        {
          "type": "select",
          "id": "banners_grid",
          "label": "Show Banners",
          "options": [
            {
              "value": "none",
              "label": "None"
            },
            {
              "value": "customhtml",
              "label": "Custom Html"
            },
            {
              "value": "12",
              "label": "1"
            },
            {
              "value": "6",
              "label": "2"
            }
          ],
          "default": "6"
        },
        {
          "type": "textarea",
          "id": "html",
          "label": "Custom Html",
          "info": "Paste your html code. Banners Off.",
          "default": "Custom Html"
        },
        {
          "type": "url",
          "id": "banner1_url",
          "label": "Banner 1 Link"
        },
        {
          "type": "image_picker",
          "id": "bottombanners_img_1",
          "label": "Image 1",
          "info": "Image must be JPG, 542 x 160 Px"
        },
        {
          "type": "text",
          "id": "banners_tit1",
          "label": "Title 1",
          "default": "SUMMER <span class=\"tt-base-color\">2018</span>"
        },
        {
          "type": "text",
          "id": "banners_tit11",
          "label": "Title 2",
          "default": "NEW ARRIVALS"
        },
        {
          "type": "color",
          "id": "color_11",
          "label": "Title 1 Color",
          "default": "#ffffff"
        },
        {
          "type": "color",
          "id": "color_12",
          "label": "Title 2 Color",
          "default": "#ffffff"
        },
        {
          "type": "url",
          "id": "banner2_url",
          "label": "Banner 2 Link"
        },
        {
          "type": "image_picker",
          "id": "bottombanners_img_2",
          "label": "Image 2",
          "info": "Image must be JPG, 542 x 160 Px"
        },
        {
          "type": "text",
          "id": "banners_tit2",
          "label": "Title 1",
          "default": "CLEARANCE SALES"
        },
        {
          "type": "text",
          "id": "banners_tit21",
          "label": "Title 2",
          "default": "GET UP TO 20% OFF"
        },
        {
          "type": "color",
          "id": "color_21",
          "label": "Title 1 Color",
          "default": "#ffffff"
        },
        {
          "type": "color",
          "id": "color_22",
          "label": "Title 2 Color",
          "default": "#ffffff"
        }
      ]
    }
  ]
};
