import Spline from '@splinetool/react-spline';
import useMediaQuery from 'hooks/useMediaQuary';
import React from 'react';
import styles from './hoodie.module.css';


const hoodieMobile = 'https://prod.spline.design/sGNmMbe97fUYi-4C/scene.splinecode';
const hoodieDesktop = 'https://prod.spline.design/sGNmMbe97fUYi-4C/scene.splinecode';

const Model = () => {
  const isMobile = useMediaQuery('(max-width: 820px)');

  return (
    <div className={styles.hoodieModel}>
      <Spline scene={isMobile ? hoodieMobile : hoodieDesktop}/>
    </div>
  );
};

export default Model;
