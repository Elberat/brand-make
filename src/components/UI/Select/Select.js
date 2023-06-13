import React, { useEffect, useState } from 'react';
import arrow from 'assets/icons/arrow.svg';
import styles from './select.module.css';


export const Select = (props) => {
  const { list, defaultOption, handleChangeOption } = props;

  const [ anchorEl, setAnchorEl ] = useState(null);
  const [ currentOption, setCurrentOption ] = useState(defaultOption);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    if (!anchorEl) {
      setTimeout(() => {
        window.addEventListener('click', () => {
          setAnchorEl(false);
        }, { once: true });
      }, 0);
    };
  };


  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setAnchorEl(false);
    });
  });

  return (
    <div className={styles.select}>
      <div
        onClick={handleClick}
        className={styles.option}
      >
        {defaultOption.label}
        <img
          className={`${styles.arrow} ${anchorEl && styles.activeArrow}`}
          src={arrow}
          alt="arrow"
        />
      </div>

      {anchorEl && <div className={styles.list}>
        {
          list.filter(option => option.id !== currentOption.id).map((item, i) =>
            <div
              key={i}
              value={item.label}
              onClick={e => {
                handleChangeOption(item);
                setCurrentOption(item);
              }}
              className={styles.option}
            >
              {item.label}
            </div>
          )
        }
      </div>}

    </div>
  );
};
