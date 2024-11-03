import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This is where child routes will be rendered */}
    </div>
  );
};

export default Layout;
