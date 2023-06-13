import { tShirts } from 'common/DataBase/TShirts';
import { DevelopingStages } from 'components/DevelopingStages/DevelopingStages';
import { Hero } from 'components/Hero/Hero';
import { OurWorks } from 'components/OurWorks/OurWorks';
import { Products } from 'components/Products/Products';
// import { ProductTable } from 'components/ProductTable/ProductTable';
import { Reviews } from 'components/Reviews/Reviews';
import { TopButton } from 'components/TopButton/TopButton';
import { MovingTitle } from 'components/UI/MovingTitle/MovingTitle';
import { SocialMedia } from 'components/UI/SocialMedia/SocialMedia';
import { t } from 'i18next';
import React from 'react';


const TShirt = () => {
  return (
    <>
      <main>
        <TopButton/>
        <SocialMedia/>
        <Hero/>
        <div id='catalog'>
          <MovingTitle>
            {t('ourProducts')}
          </MovingTitle>

          <div className='container'>
            <Products products={tShirts}/>
            {/* <ProductTable/> */}
          </div>
        </div>

        <div id='developingStages'>
          <MovingTitle>
            {t('developingStages')}
          </MovingTitle>

          <DevelopingStages/>
        </div>

        <div id='reviews'>
          <MovingTitle>
            {t('reviews')}
          </MovingTitle>

          <Reviews/>
        </div>

        <div id='ourWorks'>
          <MovingTitle>
            {t('ourWorks')}
          </MovingTitle>

          <OurWorks/>
        </div>
      </main>
    </>
  );
};

export default TShirt;
