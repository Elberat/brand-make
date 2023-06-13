import React from 'react';
import { t } from 'i18next';
import styles from './About.module.css';


export const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        <div className='container' >

          <div className={styles.text}>
            <h2>{t('whoWeAre')}</h2>
            <p>{t('whoWeAreDescription')}</p>
          </div>
          <div className={styles.image}/>


        </div>


      </div>
    </div>
  );
};
