import React from 'react';
import s from './Header.module.css';

const Header = () => {
    // This is not HTML, this is JSX
  return (
    <header className={s.header}>
      <img alt="Header" src="https://png.pngtree.com/png-vector/20190216/ourmid/pngtree-instagram-logo-inverse-png-image_556198.jpg"/>
    </header>
  );
}

export default Header;