import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
      <div className="form-container">
        <div>
          <h2 className="form-title">This is Login page</h2>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Password" />
            </div>
            <input className="form-submit" type="submit" value="login" />
          </form>
          <p>
              New To Ema-John? <Link className='form-link' to="/signup">Create New Account</Link>
          </p>
        </div>
      </div>
    );
};

export default Login;