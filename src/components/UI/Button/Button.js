import React from 'react';
import styles from './button.module.css';


export const Button = (props) => {
  const { variant = 'primary', children, padding = '12px 20px', fullWidth = false, ...other } = props;
  //variant primary | outlined

  return (
    <button
      className={styles[ variant ]}
      style={{
        padding,
        width: fullWidth && '100%',
      }}
      {...other}
    >{children}
    </button>
  );
};
