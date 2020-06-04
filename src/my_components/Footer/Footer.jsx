import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    // This is not HTML, this is JSX
    return (
        <footer className={s.footer}>
          <p>That's footer</p>
        </footer>
    );
}

export default Footer;