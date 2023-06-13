import React from 'react';
import styles from '../../stages.module.css';


export const Triangle = () => {
  return (
    <svg
      width="86" height="65" viewBox="0 0 86 65" fill="none" xmlns="http://www.w3.org/2000/svg">

      <path
        className={styles.figurePath}
        d="M9.65802 61.75L43 4L76.342 61.75H9.65802Z" stroke="#131313" stroke-width="4">
      </path>

      {/* eslint-disable-next-line */}
      <path className={styles.number} d="M44.4176 32.4545V47H42.2159V34.6562H42.1307L38.6506 36.929V34.8267L42.2798 32.4545H44.4176Z" fill="#131313"/>
    </svg>
  );
};
