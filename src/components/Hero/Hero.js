import Phone from 'assets/icons/Phone';
import Model from 'components/Models/Model';
import cap from 'assets/images/cap.png';
import t_shirt from 'assets/images/t_shirt.png';
import sweatshirt from 'assets/images/sweatshirt.png';
import polo from 'assets/images/polo.png';
import shopper from 'assets/images/shopper.png';
import blackHoodie from 'assets/images/hoodie_small.png';
import { SmallModel } from 'components/Models/SmallModel';
import { Button } from 'components/UI/Button/Button';
import { HeroDescription } from 'components/UI/HeroDesription/HeroDescription';
import { t } from 'i18next';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from 'common/constants';
import { handleOrderCall } from 'common/helpers';
import GLBModel from 'components/Models/GLBModel';
import styles from './hero.module.css';


const smallHoodieStyles = {
  left: '100px',
  transform: 'rotate(-9deg)',
  opacity: .5,
  width: '237px',
  height: '330px',
};

export const Hero = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const currentImage = () => {
    switch (pathname) {
    case PATHS.home: return blackHoodie;
    case PATHS.tShirts: return t_shirt;
    case PATHS.polo: return polo;
    case PATHS.caps: return cap;
    case PATHS.shopper: return shopper;
    case PATHS.sweatshirt: return sweatshirt;

    default: return blackHoodie;
    }
  };

  return (
    <div className={styles.hero}>
      <div className={styles.heroPreview}>
        <div className={styles.decorationBackground}>
          {pathname === PATHS.home || pathname === PATHS.hoodie ? <Model/> :
            <GLBModel/>
          }
        </div>
      </div>

      <HeroDescription
        title={t('mainTitle')}
        description={t('mainDescription')}
      >
        <div className={styles.orderCall}>
          <Button onClick={() => handleOrderCall(navigate)} fullWidth={true}>
            <Phone/>
            {t('orderCall')}
          </Button>
          <a href='#catalog'>
            <Button variant="outlined">{t('catalog')}</Button>
          </a>
        </div>
      </HeroDescription>

      <div className={styles.smallHoodies}>
        <SmallModel
          style={smallHoodieStyles}
          image={currentImage()}
        />
        <SmallModel
          style={{
            ...smallHoodieStyles,
            left: 'auto',
            right: '100px',
            transform: 'rotate(9deg)',
          }}
          image={currentImage()}
        />
      </div>
    </div>
  );
};
