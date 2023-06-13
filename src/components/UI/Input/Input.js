import React from 'react';
import styles from './input.module.css';


const Input = (props) => {
  const { className, label, variant = 'outlined', padding = '12px 20px', fullWidth, ...other } = props;
  return (
    <>
      {label ? <p className={styles.label}>{label}</p> : null}
      <input
        className={styles[ variant ] + ' ' + className}
        style={{
          padding,
          width: fullWidth && '100%',
        }}
        {...other}/>
    </>
  );
};

export default Input;
