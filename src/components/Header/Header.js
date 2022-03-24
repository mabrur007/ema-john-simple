import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='bg'>
            <div className='container'>
                <nav className='header'>
                    <img src={logo} alt="logo" />
                    <div>
                        <a href="/order">Order</a>
                        <a href="/manage">Manage</a>
                        <a href="/inventory">Inventory</a>
                        <a href="/contact">Contact</a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;