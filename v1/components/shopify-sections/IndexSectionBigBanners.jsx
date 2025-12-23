// components/shopify-sections/IndexSectionBigBanners.jsx
'use client';
import Image from 'next/image';

export default function IndexSectionBigBanners({ section }) {
  const settings = section?.settings || {};
  const blocks = section?.blocks || [];

  // Determine top offset class
  const getOffsetClass = () => {
    if (settings.top_offset === 'none') return 'nomargin';
    if (settings.top_offset === 'small') return 'tt-offset-small';
    return '';
  };

  return (
    <div className={`${getOffsetClass()} container-indent`}>
      <div className={`container${settings.fullwidth ? '-fluid' : ''}`}>
        <div className={`${settings.fullwidth ? 'row' : ''} no-gutter`}>
          {blocks.length > 0 ? (
            blocks.map((block, index) => {
              const b = block.settings || {};
              const shouldLink = !b.show_button && b.use_link;
              
              return (
                <BannerBlock
                  key={block.id || index}
                  block={b}
                  index={index}
                  shouldLink={shouldLink}
                />
              );
            })
          ) : (
            <span style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
              This section doesn't currently include any content. Add content to this section using the sidebar.
            </span>
          )}
        </div>
      </div>

      {/* Inline Styles for Custom Buttons and Masks */}
      {blocks.length > 0 && (
        <style jsx>{`
          ${blocks.map((block, index) => {
            const b = block.settings || {};
            let styles = '';
            
            if (b.show_button) {
              if (b.btn_custom_styles) {
                styles += `.blid-${index} .btn { ${b.btn_custom_styles} }\n`;
              }
              if (b.btn_custom_styles_hover) {
                styles += `.blid-${index} .btn:hover { ${b.btn_custom_styles_hover} }\n`;
              }
            }
            
            if (b.show_mask) {
              const alpha = (b.show_mask_alpha || 30) / 100;
              const maskColor = b.show_mask_color || '#191919';
              const hexAlpha = Math.round(alpha * 255).toString(16).padStart(2, '0');
              styles += `
                .banner-${index} .tt-description { z-index: 2; position: relative; }
                .banner-${index}::after {
                  content: "";
                  background: ${maskColor}${hexAlpha};
                  display: block;
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  top: 0;
                  left: 0;
                  z-index: 1;
                }
              `;
            }
            
            // Custom height styles
            if (b.use_parallax) {
              styles += `
                .banner-${index} .tt-promo-fullwidth {
                  height: ${b.height1 || 650}px;
                }
                @media (max-width: 1199px) {
                  .banner-${index} .tt-promo-fullwidth {
                    height: ${b.height2 || 550}px;
                  }
                }
                @media (max-width: 789px) {
                  .banner-${index} .tt-promo-fullwidth {
                    height: ${b.height3 || 350}px;
                  }
                }
                @media (max-width: 451px) {
                  .banner-${index} .tt-promo-fullwidth {
                    height: ${b.height4 || 250}px;
                  }
                }
              `;
            }
            
            // Custom text styles
            if (b.use_custom_style_for_text_1 && b.custom_style_for_text_1) {
              const customStyles = b.custom_style_for_text_1.replace(
                /\.tt-promo-fullwidth/g, 
                `.banner-${index} .tt-promo-fullwidth`
              );
              styles += customStyles;
            }
            
            return styles;
          }).join('\n')}
        `}</style>
      )}
    </div>
  );
}

function BannerBlock({ block, index, shouldLink }) {
  const ContentWrapper = shouldLink ? 'a' : 'div';
  const wrapperProps = shouldLink ? { href: block.link || '#' } : {};

  const bannerStyle = {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    minHeight: '300px'
  };

  // Add background image if using parallax or no image element
  if (block.use_parallax && block.image) {
    bannerStyle.backgroundImage = `url(${block.image})`;
    bannerStyle.backgroundSize = 'cover';
    bannerStyle.backgroundPosition = 'center';
    bannerStyle.backgroundAttachment = 'fixed';
  }

  return (
    <div className={`col-sm-12 respimgsize blid-${index} banner-${index}`}>
      <ContentWrapper
        {...wrapperProps}
        className="tt-promo-fullwidth"
        style={bannerStyle}
      >
        {/* Image - only if not using parallax */}
        {!block.use_parallax && block.image && (
          <img
            src={block.image}
            alt={block.alt || 'Banner'}
            style={{ 
              width: '100%', 
              height: 'auto', 
              display: 'block',
              objectFit: 'cover'
            }}
          />
        )}

        {/* Placeholder if no image */}
        {!block.image && (
          <div style={{
            width: '100%',
            height: block.use_parallax ? '650px' : '400px',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999'
          }}>
            No image selected
          </div>
        )}

        {/* Text Content Overlay */}
        <div className={`tt-description ${block.position || 'normal'}`}>
          <div className={`tt-description-wrapper text-${block.textalign || 'center'}`}>
            {block.text1 && (
              <div 
                className="tt-title-small"
                style={{ color: block.text_color1 || '#191919' }}
                dangerouslySetInnerHTML={{ __html: block.text1 }}
              />
            )}
            
            {block.text2 && (
              <div 
                className="tt-title-large"
                style={{ color: block.text_color2 || '#191919' }}
                dangerouslySetInnerHTML={{ __html: block.text2 }}
              />
            )}
            
            {block.text3 && (
              <p 
                style={{ color: block.text_color3 || '#191919' }}
                dangerouslySetInnerHTML={{ __html: block.text3 }}
              />
            )}
            
            {block.show_button && (
              <a
                href={block.link || '#'}
                className="btn btn-xl"
                style={{
                  color: block.cbtntext || '#ffffff',
                  background: block.cbtnbg || '#2879fe',
                  padding: '12px 40px',
                  display: 'inline-block',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = block.acbtntext || '#ffffff';
                  e.currentTarget.style.background = block.acbtnbg || '#2267d8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = block.cbtntext || '#ffffff';
                  e.currentTarget.style.background = block.cbtnbg || '#2879fe';
                }}
              >
                {block.button_name || 'SHOP NOW!'}
              </a>
            )}
          </div>
        </div>
      </ContentWrapper>

      {/* Add basic CSS for text positioning */}
      <style jsx>{`
        .tt-description {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .tt-description.tt-point-h-l {
          justify-content: flex-start;
        }
        
        .tt-description.tt-point-h-r {
          justify-content: flex-end;
        }
        
        .tt-description-wrapper {
          max-width: 800px;
          padding: 20px;
        }
        
        .tt-title-small {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .tt-title-large {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 15px;
        }
        
        .tt-description p {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 25px;
        }
        
        @media (max-width: 768px) {
          .tt-title-small {
            font-size: 14px;
          }
          
          .tt-title-large {
            font-size: 32px;
          }
          
          .tt-description p {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}