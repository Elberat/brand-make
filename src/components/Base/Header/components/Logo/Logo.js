import React from 'react';
import logo from 'assets/icons/logo.svg';
import logoText from 'assets/icons/logo_secondary.svg';
import styles from './logo.module.css';


export const Logo = ({ withName = true }) => {
  return (
    <a href='/' className={styles.logo}>
      <img
        src={ logo }
        alt='logo'
      />
      {withName && <img
        src={ logoText }
        alt='logo'
      />}
    </a>
  );
};
