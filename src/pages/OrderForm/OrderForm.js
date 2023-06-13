import { t } from 'i18next';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Button } from 'components/UI/Button/Button';
import Input from 'components/UI/Input/Input';
import 'react-phone-number-input/style.css';

import { caps } from 'common/DataBase/Caps';
import { hoodies } from 'common/DataBase/Hoodies';
import { tShirts } from 'common/DataBase/TShirts';

import CustomizedPhoneInput from 'components/UI/PhoneInput/PhoneInput';
import CustomInputSelect from 'components/UI/CustomInputSelect/CustomInputSelect';

import styles from './orderForm.module.css';


const colorOptions = [
  { value: 'Черный', label: 'Черный' },
  { value: 'Белый', label: 'Белый' },
  { value: 'Красный', label: 'Красный' },
  { value: 'Синий', label: 'Синий' },
  { value: 'Серый', label: 'Серый' },
  { value: 'Другой', label: 'Другой' },
];

const OrderForm = () => {
  const [ searchParams ] = useSearchParams();
  const navigate = useNavigate();
  const [ product, setProduct ] = useState(getProductDefaultValue());
  const [ color, setColor ] = useState(getColorDefaultValue());
  const [ phone, setPhone ] = useState('');
  const [ showPhoneRequiredError, setShowPhoneRequiredError ] = useState(false);
  function getProductDefaultValue () {
    const label = searchParams.get('category');
    const productIndex = searchParams.get('product');
    if (searchParams.get('category') === null) {
      return null;
    }
    if (label === 'caps') {
      const value = caps[ productIndex ];
      return { value: value.name, label: value.name };
    } else if (label === 'hoodie') {
      const value = hoodies[ productIndex ];
      return { value: value.name, label: value.name };
    } else if (label === 'tshirt') {
      const value = tShirts[ productIndex ];
      return { value: value.name, label: value.name };
    } else {
      const value = hoodies[ productIndex ];
      return { value: value.name, label: value.name };
    }
  }

  function getColorDefaultValue () {
    if (searchParams.get('category') === null) {
      return null;
    }
    const colorIndex = +searchParams.get('color');
    return colorOptions[ colorIndex ];

  }

  function getProductOptions () {
    const category = searchParams.get('category');
    if (category === 'caps') {
      const options = caps.map((item) => ({ label: item.name, value: item.name }));
      return options;
    } else {
      const options = hoodies.map((item) => ({ label: item.name, value: item.name }));
      return options;
    }
  }

  function getProductLabel () {
    const category = searchParams.get('category');
    if (category) {
      return category;
    }
    return 'hoodie';
  }
  function handleSave (e) {
    e.preventDefault();
    if (!phone || phone?.length < 9) {
      setShowPhoneRequiredError(true);
      return;
    }
    const data = {
      product,
      color,
      phone,
    };
    navigate('/thanks');
  }
  return (
    <main>
      <div className={styles.container}>
        <h2>
          {t('fillInFields')}
        </h2>
        <form onSubmit={handleSave}>
          <Input
            fullWidth={true} placeholder={t('name')} label={t('name')}/>
          <CustomInputSelect
            label={t(getProductLabel())}
            options={getProductOptions()}
            value={product}
            setValue={setProduct}
          />
          <CustomInputSelect
            label={t('color')}
            options={colorOptions}
            value={color}
            setValue={setColor}
          />
          <CustomizedPhoneInput
            showError={showPhoneRequiredError}
            label={t('phone')}
            value={phone}
            onChange={(value) => { setPhone(value);
              setShowPhoneRequiredError(false);
            }}
            international
            countryCallingCodeEditable={false}
            defaultCountry="KG"
            countries={[ 'KG',
              'RU',
              'KZ',
              'UZ' ]}
            labels={{
              'KG': 'Кыргызстан',
              'RU': 'Россия',
              'KZ': 'Казахстан',
              'UZ': 'Узбекистан',
            }}
          />
          <Button type='submit' fullWidth={true}>{t('send')}</Button>
        </form>
      </div>
    </main>
  );
};

export default OrderForm;
