import React from 'react';
import "./header.css"

const Header = () => {
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Nacer</a>
            <div className="nav__menu">
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <i className="uil uil-estate nav__icon"> Home</i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="" className="nav__link">
                            <i className="uil uil-user nav__icon"> About</i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"> Skills</i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="" className="nav__link">
                            <i className="uil uil- nav__icon"> </i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="" className="nav__link">
                            <i className="uil uil- nav__icon"> </i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="" className="nav__link">
                            <i className="uil uil- nav__icon"> </i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header;