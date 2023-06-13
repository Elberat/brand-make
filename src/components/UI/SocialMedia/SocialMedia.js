import React from 'react';
import instagram from 'assets/icons/instagram.svg';
import whatsapp from 'assets/icons/whatsapp.svg';
import telegram from 'assets/icons/telegram.svg';
import styles from './social_media.module.css';


const socialMediaList = [
  {
    path: 'https://www.instagram.com/brandmake.kg/',
    icon: instagram,
    name: 'instagram',
  },
  {
    path: 'https://t.me/+7Bf6JuG_T55hZjBi',
    icon: telegram,
    name: 'telegram',
  },
  {
    path: 'https://api.whatsapp.com/send/?phone=996509955115&text&type=phone_number&app_absent=0',
    icon: whatsapp,
    name: 'whatsapp',
  },
];

export const SocialMedia = () => {
  return (
    <ul className={styles.socialMedia}>
      {socialMediaList.map(item => (
        <li key={item.path} className={styles.item}>
          <a className={item.name} href={item.path} target="_blank" rel="noreferrer">
            <img
              src={item.icon}
              alt={item.path}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
