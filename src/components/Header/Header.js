import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <img src={logo} alt="logo" />
            </nav>
        </div>
    );
};

export default Header;