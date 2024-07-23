import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default Layout;
