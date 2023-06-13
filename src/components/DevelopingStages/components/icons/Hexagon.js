import React from 'react';
import styles from '../../stages.module.css';


export const Hexagon = () => {
  return (
    <svg width="86" height="85" viewBox="0 0 86 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* eslint-disable-next-line */}
      <path className={styles.figurePath} d="M8.19392 22.4047L43 2.3094L77.8061 22.4047V62.5953L43 82.6906L8.19392 62.5953V22.4047Z" stroke="#131313" stroke-width="4"/>
      {/* eslint-disable-next-line */}
      <path className={styles.number} d="M37.5938 47.1591V45.3835L43.8793 35.4545H45.2784V38.0682H44.3906L39.8949 45.1847V45.2983H48.5099V47.1591H37.5938ZM44.4901 50V46.6193L44.5043 45.8097V35.4545H46.5852V50H44.4901Z" fill="#131313"/>
    </svg>

  );
};
