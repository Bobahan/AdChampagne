import React from 'react';
import logoIMG from '../assets/Logo.svg';
import boxIMG from '../assets/box.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <a href="/" className="header__logo">
          <img src={logoIMG} height={20} />
        </a>
        <div className="header__text">Free delivery</div>
        <img className="header__img" src={boxIMG} />
      </div>
      <div className="call">CALL TO ORDER: 0700 600 0000</div>
    </header>
  );
};

export default Header;
