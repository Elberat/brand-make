import React from 'react';
import { t } from 'i18next';
import styles from '../footer.module.css';


export const Address = () => {
  return (
    <li>
      <ul className={styles.navList}>
        <li className={styles.navTitle}>{t('address')}</li>
        <li>
          <a target='_blank' href="https://2gis.kg/bishkek/firm/70000001063516170" rel="noreferrer">
            {t('location')}
          </a>
        </li>
      </ul>
    </li>
  );
};
