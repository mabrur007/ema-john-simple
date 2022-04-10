import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const handleErrorBlur = event => {
        setError(event.target.value);
    }
    return (
      <div className="form-container">
        <div>
          <h2 className="form-title">LogIn</h2>
          
          <form>
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
              New To Ema-John? <Link className='form-link' to="/signup">Create New Account</Link>
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