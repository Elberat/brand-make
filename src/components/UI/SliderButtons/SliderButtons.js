import React, { useCallback } from 'react';
import { Arrow } from 'assets/icons/Arrow';
import styles from './buttons.module.css';


const className = 'paginationButton';
const activeClassName = 'paginationButtonActive';

export const SliderButtons = (props) => {
  const {
    sliderRef,
    slidesLength,
    activeSlideIndex,
  } = props;

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);


  const handlePaginate = (index) => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideTo(index);
  };

  return (
    <div className='container'>
      <div className={styles.sliderButtons}>
        <button
          className={styles.arrow}
          onClick={handlePrev}>
          <Arrow
            fill='#131313'
          />
        </button>
        <div className={styles.pagination}>
          {[ ...Array(slidesLength) ].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginate(index)}
              className={styles[ activeSlideIndex === index ? activeClassName : className ]}
            />
          ))}
        </div>
        <button
          className={styles.arrow }
          onClick={handleNext}>
          <Arrow
            fill='#131313'
            className={styles.rotated}
          />
        </button>
      </div>
    </div>
  );
};
