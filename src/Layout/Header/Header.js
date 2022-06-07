import React from 'react';
import logo from './logo.png'
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={'header'}>
            <div className="container">
                <div className="header__wrapper">
                    <img className={'header__logo'} src={logo} alt="logo"/>

                    <div className={'header__triggers'}>
                        <select className={'header__trigger'} name="lang" id="lang">
                            <option value="en">En</option>
                            <option value="ru">Ru</option>
                        </select>
                        <input type="checkbox"/>
                    </div>
                    <nav className={'header__nav'}>
                        <ul className={'header__menu'}>
                            <Link to={'/'}>Home</Link>
                            <Link to={'/about'}>About</Link>
                            <Link to={'/works'}>Works</Link>
                            <Link to={'/prices'}>Prices</Link>
                            <Link to={'/clients'}>For clients</Link>
                            <Link to={'/contact'}>Contacts</Link>
                        </ul>
                    </nav>
                    <p className={'header__start'}>Start a project
                        <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.7679C23.3333 12.5378 23.3333 14.4622 22 15.232L3.25 26.0574C1.91666 26.8272 0.249999 25.8649 0.249999 24.3253L0.25 2.67468C0.25 1.13508 1.91667 0.17283 3.25 0.942631L22 11.7679Z" fill="#FB1B3D"/>
</svg>
                    </p>



                </div>
            </div>
        </header>
    );
};

export default Header;