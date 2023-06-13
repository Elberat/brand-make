import { TopArrow } from 'assets/icons/TopArrow';
import React, { useEffect, useState } from 'react';
import styles from './top_button.module.css';


export const TopButton = () => {
  const [ isScrollAvailable, setIsScrollAvailable ] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckIsScrollTopAvailable = () => {
    if (window.pageYOffset > 0) setIsScrollAvailable(true);
    else setIsScrollAvailable(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleCheckIsScrollTopAvailable);

    return () => {
      window.removeEventListener('scroll', handleCheckIsScrollTopAvailable);
    };
  }, []);

  if (!isScrollAvailable) return '';

  return (
    <button onClick={handleScrollToTop} className={styles.topButton}>
      <TopArrow/>
    </button>
  );
};
