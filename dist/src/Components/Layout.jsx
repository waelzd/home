import React from 'react';
import Navbar from './Navbar'; // Adjust the path if necessary
import Footer from './Footer'; // Adjust the path if necessary
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
