import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;