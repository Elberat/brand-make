import React from 'react';
import instagram from 'assets/icons/instagram.svg';
import whatsapp from 'assets/icons/whatsapp.svg';
import telegram from 'assets/icons/telegram.svg';
import logo from 'assets/icons/logo.svg';
import { t } from 'i18next';
import { Button } from 'components/UI/Button/Button';
import Phone from 'assets/icons/Phone';
import { handleOrderCall } from 'common/helpers';
import { useNavigate } from 'react-router-dom';
import styles from './footer.module.css';
import { Address } from './components/Address';
import { Contacts } from './components/Contacts';
import { Navigation } from './components/Navigation';


const socialMediaList = [
  {
    path: 'https://www.instagram.com/brandmake.kg/',
    icon: instagram,
  },
  {
    path: 'https://t.me/+7Bf6JuG_T55hZjBi',
    icon: telegram,
  },
  {
    path: 'https://api.whatsapp.com/send/?phone=996509955115&text&type=phone_number&app_absent=0',
    icon: whatsapp,
  },
];

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      <div className='container'>

        <div className={styles.top}>
          <ul className={styles.navbar}>
            <li>
              <a href='/'><img className={styles.logo} src={logo} alt='logo'/></a>
            </li>

            <Navigation/>
            <Contacts/>
            <Address/>
          </ul>

          <Button onClick={() => handleOrderCall(navigate)} variant='primary'>
            <Phone/>
            {t('orderCall')}
          </Button>
        </div>

        <div className={styles.bottom}>
          <h5>{t('policy')}</h5>
          <ul className={styles.socialMedia}>
            {socialMediaList.map(item => (
              <li key={item.path} className={styles.mediaItem}>
                <a href={item.path} target="_blank" rel="noreferrer">
                  <img
                    src={item.icon}
                    alt={item.path}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
