// components/shopify-sections/Search.jsx
// Converted from Shopify section: search

'use client';
import Image from 'next/image';

export default function Search({ settings, data }) {
  // Settings from Shopify:
  // No settings

  return (
    <>
      {%- if search.performed -%}

{%- if search.results_count == 0 -%}

<div className="container-indent nomargin">
  <div className="tt-empty-search">
    <span className="tt-icon icon-h-04"></span>
    <h1 className="tt-title">{{ 'general.search.no_results_title_html' | t }}</h1>
    <p>{{ 'general.search.no_results_html' | t }} <span className="color-def-dark">'{search.terms}'</span></p>
  </div>
</div>
{%- else -%}

<div className="container-indent">
  <div className="container">
    <h1 className="tt-title-subpages noborder">
      {{ 'general.search.results_title' | t }} "{search.terms}" <span className="tt-title-total">({search.results_count})</span>
    </h1>
    <div className="row">
      <div className="col-md-12">
        {%- paginate search.results by 12 -%}
        <div className="tt-product-listing row">
          {%- for item in search.results -%}{%- assign product = item -%}
          <div className="col-6 col-md-4 col-lg-3 tt-col-item">{%- include "product-grid-item" -%}</div>
          {%- endfor -%}
        </div>
        {%- if paginate.pages > 1 -%}{%- include 'pagination' -%}{%- endif -%}
        {%- endpaginate -%}
      </div>
    </div>
  </div>
</div>

{%- endif -%}


{%- else -%}

<div className="container-indent nomargin">
  <div className="tt-empty-search">
    <span className="tt-icon icon-h-04"></span>
    <h1 className="tt-title">{{ 'general.search.no_results_title_html' | t }}</h1>
  </div>
</div>

{%- endif -%}
    </>
  );
}

// Schema from Shopify
export const schema = null;
