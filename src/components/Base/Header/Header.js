import React, { useEffect, useRef } from 'react';
import { Button } from 'components/UI/Button/Button';
import Phone from 'assets/icons/Phone.js';
import { t } from 'i18next';
import { handleOrderCall } from 'common/helpers';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import ChangeLang from './components/ChangeLang/ChangeLang';
import { NavBar } from './components/NavBar/NavBar';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { Logo } from './components/Logo/Logo';


const headerHeight = 150;

export const Header = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    let prevYOffset = 0;

    window.onscroll = (e) => {
      const currentYOffset = window.pageYOffset;

      if (prevYOffset > currentYOffset || currentYOffset === 0) {
        if (ref?.current?.style?.transform) {
          ref.current.style.transform = 'translateY(0)';
        }
      } else {
        if (ref?.current?.style?.transform) {
          ref.current.style.transform = `translateY(-${headerHeight}px)`;
          prevYOffset = currentYOffset;
        }
      }
    };
  });
  return (
    <header ref={ref}>
      <nav className={`${styles.nav} container`}>
        <Logo/>
        <NavBar/>
        <div className={styles.end}>
          <ChangeLang/>
          <Button onClick={() => handleOrderCall(navigate)} variant='outlined' padding='8px 20px'>
            <Phone fill='#F5F5DC' />
            {t('orderCall')}
          </Button>
        </div>
      </nav>
      <BurgerMenu/>
    </header>
  );
};
