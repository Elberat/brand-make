import Phone from 'assets/icons/Phone';
import { handleOrderCall } from 'common/helpers';
import { Button } from 'components/UI/Button/Button';
import { SocialMedia } from 'components/UI/SocialMedia/SocialMedia';
import { t } from 'i18next';
import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import ChangeLang from '../ChangeLang/ChangeLang';
import { Logo } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';
import styles from './burger.module.css';
import { BurgerButton } from './BurgerButton';


export const BurgerMenu = () => {
  const [ showMenu, setShowMenu ] = useState(false);
  const navigate = useNavigate();

  const transition = useTransition(showMenu, {
    from: { y: -60, opacity: 0 },
    enter: { y: 60, opacity: 1 },
    leave: { y: -20, opacity: 0 },
  });

  const handleToggleMenu = () => {
    if (showMenu) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
    setShowMenu(isShow => !isShow);
  };

  return (
    <nav className={styles.burger}>

      <div className={styles.top}>
        <Logo/>
        <BurgerButton
          showMenu={showMenu}
          handleToggleMenu={handleToggleMenu}
        />
      </div>

      {transition((style, item) => (

        item && <animated.div style={style} className={styles.menu}>
          <div className={styles.navbar}>
            <NavBar
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
            <ChangeLang showMenu={showMenu}/>
          </div>

          <div className={styles.bottom}>

            <Button onClick={() => handleOrderCall(navigate)} fullWidth={true}>
              <Phone/>
              {t('orderCall')}
            </Button>
            <SocialMedia/>
          </div>

        </animated.div>
      ))}
    </nav>
  );
};
