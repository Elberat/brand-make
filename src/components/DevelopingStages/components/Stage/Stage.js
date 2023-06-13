import { useIsVisible } from 'hooks/useIsVisible';
import React, { useEffect, useRef } from 'react';
import styles from '../../stages.module.css';


export const Stage = ({ children, title, description }) => {
  const ref = useRef();
  const [ isVisible ] = useIsVisible(ref);

  useEffect(() => {
    if (isVisible) {
      const figure = ref.current.children[ 0 ];
      figure.style.transform = 'scale(1) translateY(0)';
      figure.style.opacity = 1;
      setTimeout(() => {
        figure.style.transition = '.3s';
      }, 1000);
    }
  }, [ isVisible ]);

  return (
    <li ref={ref} className={styles.stage}>
      <div className={styles.figure}>
        {children}
      </div>

      <h4>{title}</h4>
      <p>{description}</p>
    </li>
  );
};
