// components/shopify-sections/PasswordTemplate.jsx
// Converted from Shopify section: password-template

'use client';
import Image from 'next/image';

export default function PasswordTemplate({ settings, data }) {
  // Settings from Shopify:
  // Background Image: image_picker
  // undefined: header
  // Show logo: checkbox
  // Logo image: image_picker
  // Logo Main width (in pixels): text
  // undefined: header
  // Title: textarea
  // Description: textarea
  // undefined: header
  // Show newsletter: checkbox
  // Use mailchimp: checkbox
  // Title: textarea
  // Form Text: textarea
  // Button Text: textarea
  // undefined: header
  // Show password: checkbox
  // Title: textarea
  // Form Text: textarea
  // Button Text: textarea
  // undefined: header
  // Copyright: textarea

  return (
    <>
      {%- assign item = section.settings -%}
{%- assign logo_size = item.logo_max_width | append: 'x' -%}
<div id="tt-pageContent">
  <div className="tt-coming-soon"{item.image != blank && ( style="background-image: url({{ item.image | img_url: '2048x' }});")}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 tt-coming-soon-content">
          
          {item.show_logo && ({item.image_l != blank && (
          <div className="tt-logo"><img className="tt-retina" src="{{ item.image_l | img_url: logo_size }}" alt="{{ item.image_l.alt }}"></div>
          )})}
          
          {item.t1 != '' && (<h1 className="tt-title">{item.t1}</h1>)}
          {item.t2 != '' && (<div className="description">{item.t2}</div>)}
          
          {item.show_n && (
          {item.n_t1 != '' && (<h2 className="tt-title">{item.n_t1}</h2>)}
          {%- if item.use_mailchimp_form -%}
          {settings.mailchimp_form_action != "" && (
          <div className="form-inline form-default justify-content-center">
            <form action="{settings.mailchimp_form_action}" method="post" name="mc-embedded-subscribe-form" target="_blank">
              <div className="form-group">
                <input type="email" name="EMAIL" className="form-control" id="inputEmail2" placeholder="{item.n_t2}">
                <button type="submit" className="btn btn-primary ttbtnmainstyle">{item.n_t3}</button>
              </div>
            </form>
          </div>
          {% else %}
          <strong className="text-center" style="display: inline-block; margin-bottom: 60px;"><u><a href="{shop.url}/admin/themes">
            Add newsletter redirect link in:<br>
            Customize Theme / General Settings / Newsletter / MailChimp form action URL
            </a></u></strong>
          )}
          {% else %}
          <div className="form-inline form-default justify-content-center">
            {%- form 'customer' -%}
            {{ form.errors | default_errors }}
            <div className="form-group">
              <input type="hidden" name="contact[tags]" value="newsletter">
              <input type="email"
                     name="contact[email]"
                     className="form-control"
                     value=""
                     placeholder="{item.n_t2}"
                     autocomplete="off"
                     autocapitalize="off"
                     spellcheck="false" >
              <button type="submit" className="btn" name="commit">{item.n_t3}</button>
            </div>
          </div>
          {%- endform -%}
          )}
          )}

          {item.show_p && (
          {item.p_t1 != '' && (<h2 className="tt-title">{item.p_t1}</h2>)}
          <div className="form-inline form-default justify-content-center">
            {% form 'storefront_password' %}
            <div className="form-group">
              <input type="password" name="password" className="form-control" id="inputPassword2" placeholder="{item.p_t2}">
              <button type="submit" className="btn btn-primary">{item.p_t3}</button>
            </div>
              {{ form.errors | default_errors }}
            {% endform %}
          </div>
          )}
        </div>
      </div>
    </div>
    <div className="coming-soon-bottom">
      {item.f_t1 != '' && (<p>
        {item.f_t1}
      </p>)}
      {section.blocks.size > 0 && (
      <ul className="tt-social-icon">
        {section.blocks.map(block => (
        {% assign b_i = block.settings %}
        <li>
          <a href="{b_i.link}" target="blank" className="{b_i.icon}"></a>
        </li>
        ))}
      </ul>
      )}
    </div>
  </div>
</div>
    </>
  );
}

// Schema from Shopify
export const schema = {
  "name": "Settings",
  "settings": [
    {
      "type": "image_picker",
      "id": "image",
      "label": "Background Image"
    },
    {
      "type": "header",
      "content": "Logo"
    },
    {
      "type": "checkbox",
      "id": "show_logo",
      "label": "Show logo",
      "default": true
    },
    {
      "type": "image_picker",
      "id": "image_l",
      "label": "Logo image"
    },
    {
      "type": "text",
      "id": "logo_max_width",
      "label": "Logo Main width (in pixels)",
      "default": "175"
    },
    {
      "type": "header",
      "content": "Texts"
    },
    {
      "type": "textarea",
      "id": "t1",
      "label": "Title",
      "default": "WEBSITE IS COMING SOON"
    },
    {
      "type": "textarea",
      "id": "t2",
      "label": "Description",
      "default": "Successful brands get into the mind slowly. A blurb in a magazine. A mention in a newspaper. A comment from a friend. A display in a retail store."
    },
    {
      "type": "header",
      "content": "Newsletter"
    },
    {
      "type": "checkbox",
      "id": "show_n",
      "label": "Show newsletter",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "use_mailchimp_form",
      "label": "Use mailchimp",
      "default": true,
      "info": "Default address - shopify store admin panel in the customers tab"
    },
    {
      "type": "textarea",
      "id": "n_t1",
      "label": "Title",
      "default": "SUBSCRIBE TO OUR NEWSLETTER"
    },
    {
      "type": "textarea",
      "id": "n_t2",
      "label": "Form Text",
      "default": "Enter your e-mail"
    },
    {
      "type": "textarea",
      "id": "n_t3",
      "label": "Button Text",
      "default": "SUBSCRIBE"
    },
    {
      "type": "header",
      "content": "Password"
    },
    {
      "type": "checkbox",
      "id": "show_p",
      "label": "Show password",
      "default": true
    },
    {
      "type": "textarea",
      "id": "p_t1",
      "label": "Title",
      "default": "ENTER THE PASSWORD TO GET ACCESS TO THE SITE"
    },
    {
      "type": "textarea",
      "id": "p_t2",
      "label": "Form Text",
      "default": "Enter Password"
    },
    {
      "type": "textarea",
      "id": "p_t3",
      "label": "Button Text",
      "default": "ENTER"
    },
    {
      "type": "header",
      "content": "Footer"
    },
    {
      "type": "textarea",
      "id": "f_t1",
      "label": "Copyright",
      "default": "&copy; Wokiee 2018. All Rights Reserved"
    }
  ],
  "blocks": [
    {
      "type": "social",
      "name": "Social Button",
      "settings": [
        {
          "type": "paragraph",
          "content": "icon-g-64 (facebook)"
        },
        {
          "type": "paragraph",
          "content": "icon-g-58 (twitter)"
        },
        {
          "type": "paragraph",
          "content": "icon-g-66 (gmail)"
        },
        {
          "type": "paragraph",
          "content": "icon-g-67 (instagram)"
        },
        {
          "type": "paragraph",
          "content": "icon-g-70 (pinterest)"
        },
        {
          "type": "text",
          "id": "icon",
          "label": "Icon code",
          "default": "icon-g-64"
        },
        {
          "type": "url",
          "id": "link",
          "label": "Link",
          "info": "Optional"
        }
      ]
    }
  ]
};
