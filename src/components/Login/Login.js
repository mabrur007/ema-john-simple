import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
      <div className="form-container">
        <div>
          <h2 className="form-title">LogIn</h2>
          
          <form onSubmit={handleUserSignIn}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input onBlur={handleEmailBlur} type="email" name='email' required />
            </div>
            
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input onBlur={handlePasswordBlur} type="password" name='password' required />
            </div>
            
            <input className="form-submit" type="submit" value="login" />
          </form>
          
          <p>
              New To Ema-John? <Link to="/signup" className='form-link'>Create New Account</Link>
          </p>
          
          <div className='form-or'>
              <div></div>
              <p>or</p>
              <div></div>
          </div>
          
        </div>
      </div>
    );
};

export default Login;