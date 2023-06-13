import { ProductCard } from 'components/PorductCard/ProductCard';
import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import styles from './products.module.css';


export const Products = ({ products = [] }) => {
  return (
    <Swiper
      className={styles.products}
      spaceBetween={20}
      slidesPerView={1.15}
      breakpoints={{ 820: { slidesPerView: 1.6 } }}
    >
      {products.map((product, index) => (

        <SwiperSlide className={styles.productSlide} key={product.name}>
          <ProductCard key={product.name} product={product} index={index}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
