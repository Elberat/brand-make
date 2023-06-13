import React, { useRef, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import quotes from 'assets/icons/quotes.svg';
import geeksReview from 'assets/images/geeks_review.png';
import navatReview from 'assets/images/navat_review.png';
import bakaiBank_review from 'assets/images/bakai_bank_review.png';
import cocaColaReview from 'assets/images/coca_cola_review.png';
import { Navigation, Pagination } from 'swiper';
import { SliderButtons } from 'components/UI/SliderButtons/SliderButtons';


import 'swiper/css';
import styles from './reviews.module.css';


const reviews = [

  {
    image: cocaColaReview,
    title: 'От руководства компании ЗАО «Кока-Кола Бишкек Боттлерс»',
    description: `
Выражаем огромную благодарность компании Brand Make за оперативность,
трудолюбие и качество как в процессе производства,
так и в процессе решения возникших вопросов в ходе нашего сотрудничества!
    `,
  },
  {
    image: geeksReview,
    title: 'Джуманазаров Данияр Руководитель отдела маркетинга IT-курсов Geeks',
    description: `
С тех пор, как мы начали сотрудничать с Brand Make - у меня перестала
“болеть голова” по любым вопросам касательно корпоративных вещей.
Лучшее соотношение цена/качество.
Выражаем благодарность за отзывчивость
и оперативную работу. Ребята всегда быстро реагируют на любые рабочие просьбы и лично доставляют заказ в офис.
    `,
  },
  {
    image: bakaiBank_review,
    title: 'От руководителя маркетингового отдела ОАО «Бакай Банк»',
    description: `
Выражаем благодарность компании Brand Make за проявленную оперативность и качество выпускаемой продукции!
Компания в краткие сроки обеспечила всех сотрудников банка премиальной униформой!
    `,
  },
  {
    image: navatReview,
    title: 'От персонала и руководства сети заведений «Нават»',
    description: `
Благодарим Вас за проявленную оперативность,
качество выпускаемой продукции,
сроки, а так же за экспертную помощь в выборе униформы для сотрудников наших заведений!
    `,
  },
];

export const Reviews = () => {
  const sliderRef = useRef(null);

  const [ activeSlideIndex, setActiveSlideIndex ] = useState(1);

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
        className={styles.reviews}
        slidesPerView={1.2}
        spaceBetween={20}
        initialSlide={1}
        observer={true}
        breakpoints={{
          820: {
            slidesPerView: 2.5,
            spaceBetween: 78,
            centeredSlides: true,
            loop: false,
          },
        }}
      >
        {reviews.map(review => (
          <SwiperSlide key={review.title} className={styles.review}>
            <div className={styles.reviewWrapper}>
              <div className={styles.topReview}>
                <img
                  className={styles.imageReview}
                  src={review.image}
                  alt={review.title}
                />

                <div className={styles.descriptionWrapper}>
                  <h4>{review.title}</h4>

                  <img
                    src={quotes}
                    alt="quotes"
                  />
                </div>
              </div>
              <p>{review.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderButtons
        activeSlideIndex={activeSlideIndex}
        setActiveSlideIndex={setActiveSlideIndex}
        slidesLength={reviews.length}
        sliderRef={sliderRef}
      />
    </>
  );
};
