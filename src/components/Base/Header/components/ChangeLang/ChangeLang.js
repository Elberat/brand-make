import { changeLang } from 'common/helpers';
import React from 'react';
import rusFlag from 'assets/icons/ru.svg';
import kyFlag from 'assets/icons/ky.svg';
// import kzFlag from 'assets/icons/kz.svg';

import { Select } from 'components/UI/Select/Select';
import styles from './lang.module.css';


const ChangeLang = () => {

  const currentLang = localStorage.getItem('lang') ?? 'ru';

  const languages = [
    {
      id: 'ru',
      label: <>
        <img className={styles.flag} src={rusFlag} alt="rusFlag"/>RU
      </>,
    }, {
      id: 'ky',
      label: <>
        <img className={styles.flag} src={kyFlag} alt="kyFlag"/>KG
      </>,
    },
    // {
    //   id: 'kz',
    //   label: <>
    //     <img className={styles.flag} src={kzFlag} alt="kzFlag"/>KZ
    //   </>,
    // },
  ];

  const defaultOption = languages.find(item => item.id === currentLang);

  const handleChangeOption = (item) => {
    changeLang(item.id);
  };

  return (
    <Select
      list={languages}
      defaultOption={defaultOption}
      handleChangeOption={handleChangeOption}
    />
  );
};

export default ChangeLang;
