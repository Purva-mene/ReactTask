
import React, { useState } from 'react';
import './css/Login.css';
import { useNavigate } from 'react-router-dom';

const fakeUser = {
  email: 'menepurva0405@gmail.com',
  password: 'Purva@04',
  name: 'Purva Mene',
  dob: '2002-10-04',
};

const fakeLoginAPI = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === fakeUser.email && password === fakeUser.password) {
        resolve({
          token: 'fake-jwt-token',
          user: {
            name: fakeUser.name,
            email: fakeUser.email,
            dob: fakeUser.dob,
            password: fakeUser.password, // only for demo purposes
          },
        });
      } else {
        reject('Invalid credentials');
      }
    }, 1000);
  });
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fakeLoginAPI(formData.email, formData.password);
      localStorage.setItem('user', JSON.stringify(response));
      navigate('/dashboard');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="login-container bg-secondary">
      <div className="login-box">
        <div className="sign-in-tab text-light">SIGN IN</div>
        <div className="avatar"><i className="bi bi-person-fill"></i></div>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text"><i className="bi bi-person"></i></span>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="username"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><i className="bi bi-lock"></i></span>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-flex justify-content-between mb-3 text-light small">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ms-1">Remember me</label>
            </div>
            <a href="#" className="forgot-link text-light">Forgot your password?</a>
          </div>
          <button type="submit" className="btn btn-dark w-100 login-btn">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
