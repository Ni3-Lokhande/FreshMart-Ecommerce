
import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* Start Instagram Feed  */}
      {/* <div className="instagram-box">
        <div className="main-instagram owl-carousel owl-theme">
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-01.jpg" alt="true" />
              <div className="hov-in">
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-02.jpg" alt="true" />
              <div className="hov-in">
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-03.jpg" alt="true" />
              <div className="hov-in">
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-04.jpg" alt="true" />
              <div className="hov-in">
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-05.jpg" alt="true" />
              <div className="hov-in">
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-06.jpg" alt="true" />
              <div className="hov-in">
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-07.jpg" alt="true" />
              <div className="hov-in">
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-08.jpg" alt="true" />
              <div className="hov-in">
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-09.jpg" alt="true" />
              <div className="hov-in">
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-05.jpg" alt="true" />
              <div className="hov-in">
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* End Instagram Feed  */}
      {/* Start Footer  */}
      <footer>
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-top-box">
                  <h3>Business Time</h3>
                  <ul className="list-time">
                    <li>Monday - Friday: 08.00am to 05.00pm</li>
                    <li>Saturday: 10.00am to 08.00pm</li>
                    <li>Sunday: <span>Closed</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-top-box">
                  <h3>Newsletter</h3>
                  <form className="newsletter-box">
                    <div className="form-group">
                      <input className type="email" name="Email" placeholder="Email Address*" />
                      <i className="fa fa-envelope" />
                    </div>
                    <button className="btn hvr-hover" type="submit">Submit</button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-top-box">
                  <h3>Social Media</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-google-plus" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-rss" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-pinterest-p" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fab fa-whatsapp" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-widget">
                  <h4>About Freshshop</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link">
                  <h4>Information</h4>
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Customer Service</a></li>
                    <li><a href="#">Our Sitemap</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Delivery Information</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link-contact">
                  <h4>Contact Us</h4>
                  <ul>
                    <li>
                      <p><i className="fas fa-map-marker-alt" />Address: Michael I. Days 3756 <br />Preston
                        Street Wichita,<br /> KS 67213 </p>
                    </li>
                    <li>
                      <p><i className="fas fa-phone-square" />Phone: <a href="tel:+1-888705770">+1-888 705
                        770</a></p>
                    </li>
                    <li>
                      <p><i className="fas fa-envelope" />Email: <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer  */}
      {/* Start copyright  */}
      <div className="footer-copyright">
        <p className="footer-company"> FreshShop   | © Copyright 2023 by  <a href="#"style={{color:'yellowgreen'}}>FreshShop</a> &nbsp; All Rights Reserved <br/> Design By : &nbsp;
          <a href="https://www.linkedin.com/in/nitin-lokhande-aba80620b/" style={{color:'yellowgreen'}}>Nitin Lokhande</a>
        </p>
      </div>
      {/* End copyright  */}
    </div>

  )
}

export default Footer