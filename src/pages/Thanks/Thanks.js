import React from 'react';
import cap from 'assets/images/cap.png';
import t_shirt from 'assets/images/t_shirt.png';
import sweatshirt from 'assets/images/sweatshirt.png';
import polo from 'assets/images/polo.png';
import shopper from 'assets/images/shopper.png';
import blackHoodie from 'assets/images/hoodie_small.png';
import { t } from 'i18next';
import { HeroDescription } from 'components/UI/HeroDesription/HeroDescription';
import { Button } from 'components/UI/Button/Button';
import { PreviewCardsList } from 'components/PreviewCardsList/PreviewCardsList';
import { useNavigate } from 'react-router-dom';
import styles from './thanks.module.css';


const products = [
  { path: '/', image: blackHoodie, name: t('hoodie') },
  { path: '/caps', image: cap, name: t('cap') },
  { path: '/t-shirts', image: t_shirt, name: t('tShirt') },
  { path: '/', image: sweatshirt, name: t('sweatshirt') },
  { path: '/', image: polo, name: t('polo') },
  { path: '/', image: shopper, name: t('shopper') },
];

const Thanks = () => {
  const navigate = useNavigate();
  const handleComeBack = () => {
    navigate('/');
  };
  return (
    <div>
      <div className={styles.thankText}>
        <HeroDescription
          title={t('thankForOrder')}
          description={t('thankDescription')}
          variant="large"
        >
          <Button onClick={handleComeBack}>{t('comeHome')}</Button>
        </HeroDescription>
      </div>

      <PreviewCardsList
        products={products}
      />
    </div>
  );
};

export default Thanks;
