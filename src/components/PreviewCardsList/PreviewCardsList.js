import { PreviewCard } from 'components/PreviewCard/PreviewCard';
import React from 'react';
import blackHoodie from 'assets/images/hoodie_small.png';
import styles from './list.module.css';


export const PreviewCardsList = ({ products }) => {
  return (
    <div
      className={styles.products}
    >
      {products.map(product => (
        <PreviewCard
          key={product.name}
          img={product.image ?? blackHoodie}
          product={product}
        />
      ))}
    </div>
  );
};
