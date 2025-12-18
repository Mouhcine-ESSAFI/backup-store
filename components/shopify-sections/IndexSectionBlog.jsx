// components/shopify-sections/IndexSectionBlog.jsx
// Converted from Shopify section: index-section-blog

'use client';
import Image from 'next/image';

export default function IndexSectionBlog({ settings, data }) {
  // Settings from Shopify:
  // Top Offset: select
  // Custom css classes: textarea
  // Fullwidth size: checkbox
  // Show Title Block: checkbox
  // Title to left: checkbox
  // Boxed title when fullwidth: checkbox
  // Title: textarea
  // Small description: textarea
  // Big description: textarea
  // undefined: header
  // Use title as a blog link: checkbox
  // Hover text: text
  // undefined: header
  // Blog: blog
  // Items Length. Integer: text
  // Items in row: select
  // Show tags: checkbox
  // Show author: checkbox
  // Show date: checkbox
  // Show comment: checkbox
  // undefined: paragraph
  // Show description: checkbox
  // undefined: paragraph
  // Truncate Excerpt: checkbox
  // Show Words: text
  // Last Symbols: text

  return (
    <>
      {%- assign item = section.settings -%}
{%- assign blog = blogs[item.blog] -%}
{%- assign grid = item.items | plus: 0 -%}

{%- capture image_size -%}600x{%- endcapture -%}

<div className="{item.top_offset == 'none' && (nomargin {% elsif item.top_offset == 'small' %}tt-offset-small )}container-indent {item.custom_classes}">
  <div className="container{item.fullwidth && (-fluid)}">
    {%- if item.show_title -%}
    <div className="tt-block-title{item.title_to_left && ( text-left)}{item.boxed_title and item.fullwidth && ( container)}">
      <h2 className="tt-title">
        {%- if item.use_title_as_link -%}<a href="{blog.url}" className="title-hover-underline" title="{item.button_text}">{item.text1}</a>
        {%- else -%}{item.text1}
        {%- endif -%}
      </h2>
      {% unless item.text2 == '' %}<div className="tt-description">{item.text2}</div>{% endunless %}
      {% unless item.default_carousel %}{% unless item.text3 == '' %}<p>{item.text3}</p>{% endunless %}{% endunless %}
    </div>)}
    <div className="tt-blog-thumb-list">
      <div className="row">
        {%- unless blog.empty? -%}
        
        {%- for article in blog.articles limit: item.limit -%}
        <div className="col-12 col-sm-6 col-md-6 col-lg-{{ grid }}">
          <div className="tt-blog-thumb respimgsize">
            {%- if article.image != blank -%}
            <div className="tt-img">
              <a href="{article.url}" target="_blank">
                <img className="lazyload"
                     data-mainimage="{{ article.image | product_img_url: '100x100' | replace: '100x100', 'respimgsize' }}"
                     alt="{{ article.image.alt | escape }}"/>
              </a>
            </div>
            {%- endif -%}
            
            <div className="tt-title-description">
              <div className="tt-background"></div>
              {%- if article.tags.size > 0 and item.show_tags -%}<div className="tt-tag text-uppercase">
                {%- for tag in article.tags -%}
              		{%- assign a_url = tag | handle -%}{%- assign a_url = blog.url | append: '/tagged/' | append: a_url  -%}
              		{{ tag | link_to: a_url }}
              	{%- endfor -%}
              </div>)}
              <div className="tt-title{settings.block_titles_uppercase && ( text-uppercase)}">
                <a href="{article.url}">{article.title}</a>
              </div>
              {%- if item.show_description -%}
              <p>{article.excerpt.size > 0 && (
                {%- if section.settings.truncate_excerpt -%}{{ article.excerpt | strip_html | truncatewords: section.settings.truncate, section.settings.truncate_last_symbols }}
                {%- else -%}{article.excerpt}
                {%- endif -%}
                {%- else -%}{{ article.content | strip_html | truncatewords: section.settings.truncate, section.settings.truncate_last_symbols }}{%- endif -%}
              </p>
              {%- endif -%}
              <div className="tt-meta">
                {%- if section.settings.blog_show_author or section.settings.blog_show_date -%}
                <div className="tt-autor">
                  {item.blog_show_author && ({{ "blogs.general.author_by_html" | t: author: article.author }})}
                  {item.blog_show_date && ( {{ "blogs.general.on" | t }} {{ article.published_at | date: '%B' }} {{ article.published_at | date: '%d, %Y' }})}
                </div>
                {%- endif -%}
                {%- if item.show_comment -%}
                {%- if article.comments.size > 0 -%}{%- assign comment_url = article.url | append: '#comments' -%}{%- else -%}{%- assign comment_url = article.url | append: '#addcomment' -%}{%- endif -%}
                <div className="tt-comments">
                  <a href="{{ comment_url }}"><i className="tt-icon icon-f-88"></i>{{ article.comments.size }}</a>
                </div>
                {%- endif -%}
              </div>
            </div>
          </div>
        </div>
        {%- endfor -%}
        
        {%- else -%}
        <span style="display: flex; justify-content: center;">This section doesn’t currently include any content. Add content to this section using the sidebar.</span>
        {%- endunless -%}
      </div>
    </div>
  </div>
</div>
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Blog Posts",
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
      "type": "textarea",
      "id": "custom_classes",
      "label": "Custom css classes",
      "info": "For the custom styles. Add your styles in the theme.css.liquid"
    },
    {
      "type": "checkbox",
      "id": "fullwidth",
      "label": "Fullwidth size",
      "default": false
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
      "type": "textarea",
      "id": "text1",
      "label": "Title",
      "default": "LATES FROM BLOG"
    },
    {
      "type": "textarea",
      "id": "text2",
      "label": "Small description",
      "default": "Latest and most interesting news",
      "info": "Empty field = hide field"
    },
    {
      "type": "textarea",
      "id": "text3",
      "label": "Big description",
      "info": "Empty field = hide field"
    },
    {
      "type": "header",
      "content": "Use title as link"
    },
    {
      "type": "checkbox",
      "id": "use_title_as_link",
      "label": "Use title as a blog link",
      "default": true
    },
    {
      "type": "text",
      "id": "button_text",
      "label": "Hover text",
      "default": "SHOW ALL"
    },
    {
      "type": "header",
      "content": "Blog settings"
    },
    {
      "id": "blog",
      "type": "blog",
      "label": "Blog"
    },
    {
      "type": "text",
      "id": "limit",
      "label": "Items Length. Integer",
      "default": "8"
    },
    {
      "type": "select",
      "id": "items",
      "label": "Items in row",
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
      ],
      "default": "4",
      "info": "For screen size > 1024"
    },
    {
      "type": "checkbox",
      "id": "show_tags",
      "label": "Show tags",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "blog_show_author",
      "label": "Show author",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "blog_show_date",
      "label": "Show date",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "show_comment",
      "label": "Show comment",
      "default": true
    },
    {
      "type": "paragraph",
      "content": "_____"
    },
    {
      "type": "checkbox",
      "id": "show_description",
      "label": "Show description",
      "default": true
    },
    {
      "type": "paragraph",
      "content": "Works only for the  \"Content\" field. Field \"Excerpt\" will show full."
    },
    {
      "type": "checkbox",
      "id": "truncate_excerpt",
      "label": "Truncate Excerpt",
      "default": false
    },
    {
      "type": "text",
      "id": "truncate",
      "label": "Show Words",
      "default": "15",
      "info": "Integer"
    },
    {
      "type": "text",
      "id": "truncate_last_symbols",
      "label": "Last Symbols",
      "default": "..."
    }
  ],
  "presets": [
    {
      "name": "Blog Posts",
      "category": "Blog"
    }
  ]
};
