import React from 'react';
import styles from './description.module.css';


export const HeroDescription = ({ title, description, variant = 'mid', children }) => {
  return (
    <div className={styles[ variant ]}>
      <div className={styles.text}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
};
