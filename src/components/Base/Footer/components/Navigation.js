import React from 'react';
import { t } from 'i18next';
import styles from '../footer.module.css';


export const Navigation = () => {
  return (
    <li>
      <ul className={styles.navList}>
        <li className={styles.navTitle}>{t('navigation')}</li>
        <li>
          <a href="#about">{t('about')}</a>
        </li>
        <li>
          <a href="#catalog">{t('catalog')}</a>
        </li>
        <li>
          <a href="#ourWorks">{t('ourWorks')}</a>
        </li>
      </ul>
    </li>
  );
};
