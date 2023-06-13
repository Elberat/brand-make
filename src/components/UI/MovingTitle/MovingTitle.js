import logo from 'assets/icons/logo.svg';
import { useIsVisible } from 'hooks/useIsVisible';
import React, { useEffect, useRef } from 'react';
import styles from './title.module.css';


export const MovingTitle = ({ children }) => {

  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  useEffect(() => {

    if (isVisible) {

      const interval = setInterval(() => {

        const element = [ ...ref.current.children ][ 0 ];
        ref.current.appendChild(element);
      }, 500);

      return () => {
        clearInterval(interval);
      };
    }

  }, [ isVisible ]);

  return (
    <div className={styles.wrapper}>
      <div ref={ref} className={styles.titles}>
        {isVisible && [ ...Array(Math.floor(10)) ].map((item, idx) => (
          <div
            key={idx}
            className={styles.titleBlock}
          >
            <img
              className={styles.logo}
              src={ logo }
              alt='logo'
            />
            <h2 className={styles.title}>
              {children}
            </h2>
          </div>
        ))}
      </div>
    </div>

  );
};
