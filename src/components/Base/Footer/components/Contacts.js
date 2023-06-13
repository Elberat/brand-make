import React from 'react';
import { t } from 'i18next';
import styles from '../footer.module.css';


const phone = '+996(509)-955-115';
const email = 'tmedia_kg@mail.ru';

export const Contacts = () => {
  return (
    <li>
      <ul className={styles.navList}>
        <li className={styles.navTitle}>{t('contacts')}</li>
        <li>
          <a href="tel:+996509955115">{phone}</a>
        </li>
        <li>
          <a href='mailto: tmedia_kg@mail.ru<'>{email}</a>
        </li>
      </ul>
    </li>
  );
};
