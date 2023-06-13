import React from 'react';
import styles from '../../stages.module.css';


export const Square = () => {
  return (
    <svg width="86" height="85" viewBox="0 0 86 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={styles.figurePath}
        d="M3.32843 42.5L43 2.82843L82.6716 42.5L43 82.1716L3.32843 42.5Z" stroke="black" stroke-width="4"/>
      {/* eslint-disable-next-line */}
      <path className={styles.number} d="M37.8991 50V48.4091L42.821 43.3097C43.3466 42.7557 43.7798 42.2704 44.1207 41.8537C44.4664 41.4323 44.7244 41.0322 44.8949 40.6534C45.0653 40.2746 45.1506 39.8722 45.1506 39.446C45.1506 38.9631 45.0369 38.5464 44.8097 38.196C44.5824 37.8409 44.2723 37.5687 43.8793 37.3793C43.4863 37.1851 43.0436 37.0881 42.5511 37.0881C42.0303 37.0881 41.5758 37.1946 41.1875 37.4077C40.7992 37.6207 40.5009 37.9214 40.2926 38.3097C40.0843 38.6979 39.9801 39.1525 39.9801 39.6733H37.8849C37.8849 38.7879 38.0885 38.0137 38.4957 37.3509C38.9029 36.688 39.4616 36.1742 40.1719 35.8097C40.8821 35.4403 41.6894 35.2557 42.5938 35.2557C43.5076 35.2557 44.3125 35.438 45.0085 35.8026C45.7093 36.1624 46.2562 36.6548 46.6491 37.2798C47.0421 37.9001 47.2386 38.6009 47.2386 39.3821C47.2386 39.9219 47.1368 40.4498 46.9332 40.9659C46.7344 41.482 46.3864 42.0573 45.8892 42.6918C45.392 43.3215 44.7008 44.0862 43.8153 44.9858L40.9247 48.0114V48.1179H47.473V50H37.8991Z" fill="#131313"/>
    </svg>
  );
};
