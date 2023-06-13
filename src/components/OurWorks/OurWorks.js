import React, { useRef, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import cokeWork from 'assets/images/cokeWork.jpg';
import insultWork from 'assets/images/insultWork.JPG';
import islambek from 'assets/images/islambek.JPG';
import navat from 'assets/images/navat.JPG';
import brixoteamWork from 'assets/images/brixoteamWork.JPG';
import { Navigation, Pagination } from 'swiper';
import { SliderButtons } from 'components/UI/SliderButtons/SliderButtons';


import 'swiper/css';
import useMediaQuery from 'hooks/useMediaQuary';
import styles from './works.module.css';


const works = [
  { image: brixoteamWork },
  { image: insultWork },
  { image: cokeWork },
  { image: navat },
  { image: islambek },
];

export const OurWorks = () => {
  const sliderRef = useRef(null);

  const [ activeSlideIndex, setActiveSlideIndex ] = useState(1);

  const isMobile = useMediaQuery('(max-width: 820px)');

  return (
    <>
      <Swiper
        ref={sliderRef}
        onSlideChange={e => {
          const newSlideIndex = e.activeIndex;
          setActiveSlideIndex(newSlideIndex);
        }}
        modules={[ Navigation, Pagination ]}
        navigation
        loop={true}
        className={styles.works}
        slidesPerView={ isMobile ? '1.4' : '2.5'}
        spaceBetween={20}
        initialSlide={0}
        observer={true}
        breakpoints={{
          820: {
            slidesPerView: 2.2,
            spaceBetween: 78,
            centeredSlides: true,
            initialSlide: 2,
            loop: false,
          },
        }}
      >
        {works.map((work, index) => (
          <SwiperSlide key={index} className={styles.work}>
            <img
              className={styles.imageWork}
              src={work.image}
              alt={work.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderButtons
        activeSlideIndex={activeSlideIndex}
        setActiveSlideIndex={setActiveSlideIndex}
        slidesLength={works.length}
        sliderRef={sliderRef}
      />
    </>
  );
};
