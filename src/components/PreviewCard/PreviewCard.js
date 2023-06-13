import { SmallModel } from 'components/Models/SmallModel';
import { Button } from 'components/UI/Button/Button';
import { t } from 'i18next';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './previewCard.module.css';


export const PreviewCard = ({ product, ...props }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(product.path);
  };

  return (
    <div {...props} className={styles.card}>
      <div className={styles.figure}>
        <div className={styles.productImage}>
          <SmallModel
            style={{ position: 'static' }}
            image={product.image}
          />
        </div>
      </div>
      <h4 className={styles.name}>{product.name}</h4>
      <Button
        onClick={handleNavigate}
        variant='outlined'
      >{t('orderProduct')}</Button>
    </div>
  );
};
