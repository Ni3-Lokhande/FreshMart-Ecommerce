

import React from 'react';
import {Link,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import AuthUser from './AuthUser';
import {toast} from 'react-toastify';

const Login = () => {
  

  const notify = (M) => toast.error(M);

  const { http, setToken, token } = AuthUser();
  const [btnDiseble, setDisebale] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (token != null){
      navigate("/");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [navigate, token]);
  
  const [Login, SetLogin] = useState({email: '',password: '' });

  const OninputChange = (e) => {
    SetLogin({ ...Login, [e.target.name]: e.target.value });
  }

console.log(Login);
  const onSubmit=(e) => {
  e.preventDefault();
 

    http.post("/user/login", Login)
      .then((res) => {
        console.log(res.data.token);
        if (res.data.token) {
          setToken(res.data.user_data, res.data.token);
          
          navigate("/");
        } else {
          notify(res.data.message);
        }
        setDisebale(0);
      })
      .catch((error) => {
        setDisebale(0);
      });
};
  return (

    <div className="container-fluid " style={{ backgroundColor: '#f5f6f7' }}>
    <div className="container text-center" >
      <img src="assets/images/logo.png" className="logo mt-4" alt="logo" />
      <div className="card mt-5" style={{ backgroundColor: 'white', borderRadius: '10px', padding: '30px' }}>
        <h1 className="mt-3" style={{ color: 'green', fontSize: '30px' }}>Welcome To FreshShop</h1>
        <h3>Use Your Credentials To Access</h3>

        <form className="user-form" >
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label font-weight-bold"></label>
            <input
              type="text"
              className="form-control"
              placeholder='Enter Your User Id | Email Id'
              name="email"
              style={{ backgroundColor: '#f5f6f7' }}
              onChange={(e) =>  OninputChange(e)}
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="pwd" className="form-label font-weight-bold"></label>
            <input
              type="password"
              className="form-control"
              placeholder='Enter Your Password'
              name="password"
              style={{ backgroundColor: '#f5f6f7' }}
              onChange={(e) =>  OninputChange(e)}
            />
          </div>
          <div className="form-check mb-3">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="remember" /> Remember Me
            </label>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-success btn-block btn-rounded" onClick={(e) => onSubmit(e)}>Login</button>
          </div>
        </form>

        <div className="card-body">
          <h4>Forgot your password? &nbsp; <a href="/forgot-password" className="text-primary text-success font-weight-bold">Reset Here</a></h4>
        </div>
      </div>

      <div className="mt-4 ">
        <h4 className="form-control">Don't have an account?  &nbsp; <Link to={'/register'} className="text-primary text-success font-weight-bold">Register Here</Link></h4>
      </div>
    </div>

    <div className="container mt-5">
      <div className="text-center">
        <p>
          FreshShop | © Copyright 2023 by{' '}
          <a href="#" className="text-success">
            FreshShop
          </a>{' '}
          &nbsp; All Rights Reserved
        </p>
        <div className="d-md-flex justify-content-center align-items-center">
          <p className="mb-0">
            Designed By : &nbsp;
            <a
              href="https://www.linkedin.com/in/nitin-lokhande-aba80620b/"
              className="text-success"
            >
              Nitin Lokhande
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>

   
  )
}

export default Login
