import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='bg'>
            <div className='container'>
                <nav className='header'>
                    <img src={logo} alt="logo" />
                    <div>
                        <Link to="/Shop">Shop</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="/inventory">Inventory</Link>
                        <Link to="/about">About</Link>
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/login">LogIn</Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;