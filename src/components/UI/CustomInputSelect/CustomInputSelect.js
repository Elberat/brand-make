import React, { useState } from 'react';
import arrow from 'assets/icons/arrow.svg';
import clearIcon from 'assets/icons/clear.svg';
import { useClickOutside } from 'hooks/useClickOutside';
import styles from './customInputSelect.module.css';


const CustomInputSelect = (props) => {
  const { options, label, value, setValue } = props;
  const clickRef = React.useRef();
  const [ showOptions, setShowOptions ] = useState(false);
  useClickOutside(clickRef, () => {
    setShowOptions(false);
  });

  return (
    <>
      {label ? <p className={styles[ 'label' ]}>{label}</p> : null}
      <div ref={clickRef} className={styles[ 'custom-select' ]}
      >
        <div className={styles[ 'custom-select-outlined' ]} onClick={() => setShowOptions(!showOptions)}>
          {value?.label ? value?.label : 'Выберите'}
          <div className={styles[ 'custom-select-outlined-icons' ]}>
            <div>
              <img
                onClick={(e) => {
                  e.stopPropagation();
                  setValue(null); }}
                src={clearIcon}
                alt="clear"
                className={styles[ 'clear' ]}
              />
            </div>
            <div>
              <img
                className={showOptions ? styles.activeArrow : styles.arrow }
                src={arrow}
                alt="arrow"
              />
            </div>
          </div>
        </div>
        {
          showOptions ? <div
            className={styles[ 'custom-select-options' ]}
          >
            {options ? options.map((item) => (<div
              key={item.value}
              onClick={() => { setValue(item);
                setShowOptions(false); }}
              className={styles[ 'custom-select-options-item' ]}
            >
              {item.label}
            </div>)) : <div
              onClick={() => {
                setShowOptions(false); }}
              className={styles[ 'custom-select-options-item' ]}
            >
              Нет данных
            </div>}
          </div> : null
        }
      </div>
    </>
  );
};

export default CustomInputSelect;
