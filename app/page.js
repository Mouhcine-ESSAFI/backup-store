import IndexSectionBigBanners from '@/components/shopify-sections/IndexSectionBigBanners';
import { getFeaturedProducts } from '@/lib/data';

export default async function HomePage() {
  const featuredTours = await getFeaturedProducts(6);

  return (
    <main>
      {/* Hero Banner */}
      <IndexSectionBigBanners 
        section={{
          settings: {
            top_offset: 'none',
            fullwidth: true
          },
          blocks: [
            {
              id: '1',
              settings: {
                image: '/shopify-data/images/excursiones-al-desierto-desde-marrakech.jpg',
                text1: '',
                text2: '<span style="font-size:36px;line-height:44px;">Escápate de la rutina</span> <br>al auténtico desierto de Marruecos <br>y vive nuevas aventuras <br>en un viaje de ensueño',
                text3: '',
                show_button: true,
                button_name: '¡DESCUBRE LAS EXPERIENCIAS!',
                link: '/pages/tours-al-desierto',
                position: 'normal',
                textalign: 'center',
                text_color1: '#ffffff',
                text_color2: '#ffffff',
                text_color3: '#ffffff',
                cbtntext: '#ffffff',
                cbtnbg: '#3d3d46',
                acbtntext: '#ffffff',
                acbtnbg: '#000001',
                use_parallax: false,
                use_link: true,
                show_mask: false
              }
            }
          ]
        }}
      />

      {/* More sections will go here */}
    </main>
  );
}