import React from 'react';
import smallHoodie from 'assets/images/hoodie_small.png';
import styles from './hoodie.module.css';


export const SmallModel = ({ style, image }) => {
  return (
    <div
      className={styles.smallHoodieWrapper}
      style={{ ...style }}
    >
      <img
        className={styles.hoodie}
        src={image ? image : smallHoodie}
        alt='smallHoodie'
      />
    </div>
  );
};
