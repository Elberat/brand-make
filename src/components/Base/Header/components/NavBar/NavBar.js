import { Select } from 'components/UI/Select/Select';
import { t } from 'i18next';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import { useTranslation } from 'react-i18next';
import styles from './navbar.module.css';


const navListItems = [
  'catalog',
  'reviews',
  'ourWorks',
  'about',
];

export const NavBar = ({ showMenu = true, setShowMenu = () => {} }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const transition = useTransition(showMenu, {
    from: { y: -20, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 0, opacity: 0 },
  });

  const pages = [
    {
      label: t('hoodies'),
      id: '/',
    },
    // {
    //   label: t('hoodies'),
    //   id: '/hoodie',
    // },
    {
      label: t('t_shirts'),
      id: '/t-shirts',
    },
    // {
    //   label: t('shoppers'),
    //   id: '/shoppers',
    // },
    {
      label: t('caps'),
      id: '/caps',
    },
    // {
    //   label: t('poloShirts'),
    //   id: '/polo-shirts',
    // },
  ];

  const handleChangePage = (path) => {
    navigate(pages.find(page => page.id === path.id).id);
    document.body.style.overflow = 'auto';
    setShowMenu(false);
  };

  const { pathname } = useLocation();

  const handleNavigate = () => {
    document.body.style.overflow = 'auto';
    setShowMenu(false);
  };

  return (
    <ul className={`${styles.navList} ${currentLanguage !== 'ru' && styles.smallGap}`}>
      {navListItems.map((item, idx) => (

        transition((style, isVisible) => (
          isVisible && <animated.li
            style={{ ...style, transition: `${((idx + 1)) / 20}s` }}
            key={item}
          >
            <a
              onClick={handleNavigate}
              href={`#${item}`}
            >{t(item)}</a>
          </animated.li>
        ))
      ))}
      <li className={styles.select}>
        <Select
          list={pages}
          defaultOption={
            pages.find(page => {
              return page.id === pathname;
            })
          }
          handleChangeOption={handleChangePage}
        />
      </li>
    </ul>
  );
};
