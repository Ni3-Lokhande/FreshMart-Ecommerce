
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css';
import { toast } from 'react-toastify';

const Form = () => {
  const [formData, setformData] = useState(
    {
      name: '',
      email: '',
      mob_no: '',
      address: '',
      password: '',
      cpassword: ''

    }
  );

  const navigate = useNavigate();
  
  console.log(formData)

  const onInputchange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });

  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch('https://vsmart.ajspire.com/api/userregister', {
      method: 'POST',
      body: JSON.stringify(formData), 
      headers: {
        'Content-Type': 'application/json',  
      },
    })
      .then((res) => res.json())
      .then((data) => {
        
        console.log(data);
        toast.success('Registered successfully');
        navigate('/login');
       
      })
      .catch((error) => {
        console.log("Error", error);
        toast.error('An error occurred. Please try again later.');
       
      });
  };

  return (

    <div className="container-fluid">
      <section className="user-form-part">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-12 col-xl-10">
              <div className="user-form-logo mt-4 text-center">
                <img src="assets/images/logo.png" alt="logo" className="mb-3" />
              </div>
              <div className="user-form-card bg-white p-4 rounded">
                <div className="user-form-title text-center">
                  <h2 className="text-success font-weight-bold">Join Now!</h2>
                  <p>Setup A New Account In A Minute</p>
                </div>
                <div className="user-form-group d-flex mt-3">
                  <img
                    src="https://vsmart.ajspire.com/images/images.jpg"
                    alt=""
                    className="responsiv img-fluid"

                  />

                  <form
                    className="user-form ml-md-3 mt-3 mt-md-0"

                  >

                    <input type="hidden" name="_token" defaultValue="8TSPdd2vLpecjYQdkjtXSLHUdffYw1MMeQti2yGT" />
                    {/* <div className="form-group">                              
                      <span>User Name</span>
                      <input type="text" className="form-control"  onChange={e => idChange(e.target.value)} placeholder="Enter your UserName" fdprocessedid="kuxpxl" style={{ backgroundColor: '#f5f6f7' }} />
                    </div> */}
                    <div className="form-group">
                      <span>Full Name</span>
                      <input type="text" className="form-control" name='name' onChange={e => onInputchange(e)} placeholder="Enter your name" fdprocessedid="kuxpxl" style={{ backgroundColor: '#f5f6f7' }} />
                    </div>
                    <div className="form-group">
                      <span>Email</span>
                      <input type="email" className="form-control" name='email' onChange={e => onInputchange(e)} placeholder="Enter your email" required fdprocessedid="wje3k" style={{ backgroundColor: '#f5f6f7' }} />
                    </div>
                    <div className="form-group">
                      <span>Mobile No</span>
                      <input type="number" className="form-control" name='mob_no' onChange={e => onInputchange(e)} placeholder="Enter your Number" required fdprocessedid="3ajprt" style={{ backgroundColor: '#f5f6f7' }} />
                    </div>
                    <div className="form-group">
                      <span>Address</span>
                      <input type="text" className="form-control" name='address' onChange={e => onInputchange(e)} placeholder="Enter your address" fdprocessedid="sw9ykw" style={{ backgroundColor: '#f5f6f7' }} />
                    </div>
                    <div className="form-group">
                      <span>Password</span>
                      <input type="password" className="form-control" name='password' onChange={e => onInputchange(e)} placeholder="Enter your password" fdprocessedid="g5tcx7" style={{ backgroundColor: '#f5f6f7' }} />
                    </div>
                    <div className="form-group">
                      <span>Password</span>
                      <input type="password" className="form-control" name='cpassword' onChange={e => onInputchange(e)} placeholder="Enter your co-password" fdprocessedid="g5tcx7" style={{ backgroundColor: '#f5f6f7' }} />
                    </div>
                    {/* <div className="form-group">
                      <span>Select Franchise</span>
                      <select value={franchise} onChange={e => franchiseChange(e.target.value)} className="form-control select2" data-live-search="true" fdprocessedid="g6ebxl" style={{backgroundColor:'#f5f6f7'}}>
                        <option value selected>Choose Franchise</option>
                        <option value={2059}>
                          Pimple Gurav Branch ,
                          Maharashtra colony, Galli No-2,Amarnath Family Restaurant, Near Kalpataru Society,Pimple-Gurav-411061
                        </option>
                        <option value={2058}>
                          Indapur Branch ,
                          Ingale Peth, near Bhargavrao Garden,Old Kacheri road,Indapur -413106
                        </option>
                        <option value={2054}>
                          Wai Branch ,
                          Songirwadi,Bavdhan naka,Wai-412803
                        </option>
                        <option value={2}>
                          Satara Branch ,
                          Satara
                        </option>
                      </select>
                    </div> */}
                    <div className="form-check mb-3"><input className="form-check-input" type="checkbox" defaultValue id="check" /><label className="form-check-label" htmlFor="check">Accept all the <a href="#" style={{ color: 'blue' }}>Terms &amp; Conditions</a></label></div>
                    <div className="form-button"><button type="submit" fdprocessedid="7kjsta" className='btn-success form-control' onClick={(e) => onSubmit(e)}>Register</button></div>

                  </form>
                </div>
              </div>

              <div className="user-form-remind bg-white mt-4 pt-3 rounded text-center">
                <h4>
                  Already Have An Account? &nbsp;
                  <a href="/login" className="text-success font-weight-bold">
                    Login Here
                  </a>
                </h4>
              </div>

              <div className="user-form-footer mt-4 text-center">
                <p>
                  FreshShop | © Copyright 2023 by{' '}
                  <a href="#" className="text-success">
                    FreshShop
                  </a>{' '}
                  &nbsp; All Rights Reserved <br />
                  <div>
                    Designed By : &nbsp;
                    <a
                      href="https://www.linkedin.com/in/nitin-lokhande-aba80620b/"
                      className="text-success"
                    >
                      Nitin Lokhande
                    </a>{' '}
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Form

