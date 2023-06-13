import { About } from 'components/About/About';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';


export const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <div id='about'>
        <About/>
      </div>
      <Footer/>
    </>
  );
};
