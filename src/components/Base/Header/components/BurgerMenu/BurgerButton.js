import React from 'react';
import './burger_btn.css';


export const BurgerButton = ({ showMenu = false, handleToggleMenu = () => {} }) => {

  return (
    <button
      onClick={handleToggleMenu}
      className={`burgerButton ${showMenu ? 'is-active' : ''}`}
    >
      <span className='line'></span>
      <span className='line'></span>
      <span className='line'></span>
    </button>
  );
};
