import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const closeMenu = () => setToggle(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo" onClick={closeMenu}>Nacer</a>

        <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item"><a href="#home" className="nav__link" onClick={closeMenu}><i className="uil uil-estate nav__icon"></i> Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link" onClick={closeMenu}><i className="uil uil-user nav__icon"></i> About</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link" onClick={closeMenu}><i className="uil uil-file-alt nav__icon"></i> Skills</a></li>
            <li className="nav__item"><a href="#experience" className="nav__link" onClick={closeMenu}><i className="uil uil-briefcase nav__icon"></i> Experience</a></li>
            <li className="nav__item"><a href="#projects" className="nav__link" onClick={closeMenu}><i className="uil uil-scenery nav__icon"></i> Projects</a></li>
            <li className="nav__item"><a href="#services" className="nav__link" onClick={closeMenu}><i className="uil uil-apps nav__icon"></i> Services</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link" onClick={closeMenu}><i className="uil uil-message nav__icon"></i> Contact</a></li>
          </ul>

          <button className="nav__close" type="button" aria-label="Close navigation" onClick={() => setToggle(false)}>
            <i className="uil uil-times"></i>
          </button>
        </div>

        <button className="nav__toggle" type="button" aria-label="Open navigation" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
