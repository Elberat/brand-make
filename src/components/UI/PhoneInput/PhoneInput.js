import React from 'react';
import PhoneInput from 'react-phone-number-input';
import styles from './phoneInput.module.css';


const CustomizedPhoneInput = (props) => {
  const { label, showError, ...other } = props;
  return (
    <>
      <p className={styles.label}>{label}</p>
      <div className={showError ? styles.containerError : styles.container}>
        <PhoneInput
          {...other}
        />
        {showError ? <div className={styles.required}>Это обязательное поле, заполните его</div> : null}
      </div>
    </>
  );
};

export default CustomizedPhoneInput;
