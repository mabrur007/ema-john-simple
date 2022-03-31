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
                        <a href="/Shop">Shop</a>
                        <a href="/orders">Orders</a>
                        <a href="/inventory">Inventory</a>
                        <a href="/about">About</a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;