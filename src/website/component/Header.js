

import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import './Header.css';
import AuthUser from '../pages/AuthUser';
import { Modal, Button } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faImagePortrait } from '@fortawesome/free-solid-svg-icons';




const Header = () => {

  const [ourgro, setOurgro] = useState([]);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [subcategory, setSubcategory] = useState([]);
  const [cate, setcate] = useState([]);
  const [brand, setbrand] = useState([false]);
  const [showBrandMenu, setshowBrandMenu] = useState(false);
  const { logout, token, http } = AuthUser();
  const [show, setShow] = useState(false);
  const [search, setsearch] = useState('');
  const [params, setparams] = useSearchParams();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
  const [wishItem, setWishItem] = useState([]);  

  const [qty, setQty] = useState(1);
  const [cartid, setCartId] = useState('');
  const [qtyUpd, setQtyUpd] = useState({cardID:cartid, productQuantity:qty});   
  

  // console.log(cartCount);

  const handleshow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleInputchange = (e) => {
    setsearch(e.target.value)
  }

  const handleMouseEnter = () => {
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMegaMenu(false);
  };
  const handleMouseenter = () => {
    setshowBrandMenu(true);
  };
  const handleMouseleave = () => {
    setshowBrandMenu(false);
  };


  const inputData =(value) => {
    setQty (value);   
  }

  const changeQty = (cartId) => {
    setQtyUpd ({ cartID: cartId, productQuantity: qty });

    http.post(`/change_product_quantity`,qtyUpd)
      .then((res) => {
      console.log(res.data);
      })
      .catch((error) => {
      console.error('Error updating product quantity', error);
      });
  };
  

  const getcategory = () => {
    fetch('https://vsmart.ajspire.com/api/categories')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOurgro(data.categories);

        data.categories.forEach((category) => {
          getsubcategory(category.category_id);

        });
      })
  };

  const getsubcategory = (category_id) => {
    fetch(` https://vsmart.ajspire.com/api/subcategories/${category_id}`)
      .then((response) => response.json())
      .then((data) => {
        const newsubcategory = data.subcategories;
        setSubcategory((previoussubcategory) => {
          const filtersubcategory = newsubcategory.filter(
            (newsubcategory) =>
              !previoussubcategory.some(
                (previoussubcategory) => previoussubcategory.subcategory_id === newsubcategory.subcategory_id
              )
          );
          return [...previoussubcategory, ...filtersubcategory];
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const Getbrand = () => {
    fetch('https://vsmart.ajspire.com/api/brands').then(
      response => {
        return response.json();
      }
    ).then(
      data => {
        data.brands.forEach((brands) => { getsubcategory(brands.brand_id) })
        setbrand(data.brands);
        console.log(data.brands);
      }
    )
  }

  const getcartproduct = () => {
    http.get(`/get-cart-list`).then(
      (ras) => {
        setCartItems(ras.data.cart);
        setCartCount(ras.data.cart.length);
      }
    )
  }

  const getwishproduct = () => {
    http.get(`/get-wishlist`).then(
      (ras) => {
        setWishItem(ras.data.wishlist);
        setWishCount(ras.data.wishlist.length);
      }
    )
  }

  const removeFromCart = (cart_id) => {
    http
      .get(`/remove-to-cart/${cart_id}`)
      .then(() => {
        setCartItems((prevCartItems) =>
          prevCartItems.filter((el) => el.cart_id !== cart_id)
        );
        alert('Product removed from Cart successfully');
      })
      .catch((error) => {
        console.error('Error removing product from cart', error);
      });
  };


  useEffect(() => {
    getcategory();
    Getbrand();
  }, []);

  useEffect(() => {
    if (token) {
      getcartproduct();
      getwishproduct();
    }
  }, [token]);




  return (
    <div >

      {/* Start Main Top */}
      <div className="main-top bg-dark ">
        <div className="container-fluid bg-dark">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="right-phone-box">
                <p>Call US :- <a href="#"> +11 900 800 100</a></p>
              </div>
              <div className="">
                <div className='row'>

                  <div className='nav-item'><a href="#" className='nav-link text-light'><i className="fas fa-location-arrow" /> Our location</a></div>


                  {token ? (<div className='nav-item'><Link className='nav-link text-light' onClick={logout} > <i className='fa fa-user s_color' /> Logout</Link></div>) :

                    (<div className='nav-item'><Link className='nav-link text-light' to='/login'> <i className='fa fa-user s_color' /> Login</Link></div>)}


                  <div className='nav-item'><Link to='/myorder' className='nav-link text-light'> <i className="fa fa-shopping-bag" /> My Order</Link></div>


                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
      {/* End Main Top */}
      {/* Start Main Top */}
      <header className="main-header">
        {/* Start Navigation */}
        <nav className="navbar navbar-expand-md navbar-light bg-light navbar-default bootsnav">
          <div className="container">
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars" />
              </button>
              <a className="navbar-brand" href="index.html"><img src="assets/images/logo.png" className="logo" alt="true" /></a>
            </div>
            {/* End Header Navigation */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                <li className="nav-item active"> <Link className="nav-link" to='/'>Home</Link> </li>
                <li className="nav-item"><Link className="nav-link" to='/about'>About Us</Link></li>


                <li className="nav-item">
                  <Link className="nav-link" onMouseEnter={handleMouseenter} onMouseLeave={handleMouseleave}>Brand</Link>
                  <Dropdown
                    show={showBrandMenu}
                    onMouseEnter={handleMouseenter}
                    onMouseLeave={handleMouseleave}
                  >
                    <Dropdown.Menu
                      className="mega-menu"
                      style={{
                        height: "400px", // Set the desired height
                        width: "600px",
                        marginLeft: "-200px",
                        overflowY: "auto", // Add overflow property for scrolling
                        padding: '50px',
                        backgroundColor: '#f4f4f4'
                      }}
                    >
                      <div className="row">

                        {brand.map((brand) => (
                          <div key={brand.brand_id} className="col-sm-3">
                            <Link to='/shopbrand'>
                              <ul className='megamenu-list sub'>
                                <Link to={`/product-shop/${brand.brand_id}`}><h6 className='font-weight-bold'>{brand.brand_name}</h6>

                                </Link>

                              </ul>
                            </Link>
                          </div>
                        ))}

                      </div>
                      <div className="col-lg-12 mt-3">
                        <div className="section-btn-25">
                          <a href="/shopbrand" className="btn btn-dark brand" >
                            <i className="fas fa-eye"></i> <span>View all Brands</span>
                          </a>
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>



                <li className="nav-item boxes"><Link className="nav-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Category</Link>
                  <Dropdown show={showMegaMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Dropdown.Menu className="mega-menu" style={{
                      height: "400px", // Set the desired height
                      width: "600px",
                      marginLeft: "-200px",
                      overflowY: "auto", // Add overflow property for scrolling
                      padding: '50px',
                      backgroundColor: '#f4f4f4',
                    }}>
                      <div className="row">
                        {ourgro.map((el) => (
                          <div className="col-sm-3" key={el.category_id}>
                            <h6 className='font-weight-bold'>{el.category_name}</h6>


                            <ul className='megamenu-list sub'>
                              {subcategory.filter((sub) => sub.subcategory_category_id === el.category_id).slice(0, 5).map((sub) => (
                                <li key={sub.subcategory_id}>
                                  <Link to={`/product-shop/${el.category_id}/${sub.subcategory_id}`}>
                                    {sub.subcategory_name}
                                  </Link>
                                </li>
                              ))}

                            </ul>

                          </div>
                        ))}
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="section-btn-25">
                            <a href="/shopdetail" className="btn btn-dark categ">
                              <i className="fas fa-eye"></i> <span>View all Categories</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                <li className="nav-item"><Link className="nav-link" to='/shop' >Shop</Link></li>


                <li className="nav-item"><Link className="nav-link" to='/contact-us'>Contact Us</Link></li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
            {/* Start Atribute Navigation */}
            <div className="attr-nav">
              <ul>
                <li className="search">  <Link ><i className="fa fa-search"></i></Link></li>

                <li className='wish '> <Link className='nav-link' to='/wishlist' title='Wishlist'> <span className='badge'>{wishCount}</span><FontAwesomeIcon icon={faHeart} /></Link> </li>

                <li className="side-menu">
                  <a onClick={handleshow}>
                    <i className="fa fa-shopping-bag" />
                    <span className="badge">{cartCount}</span> &nbsp;
                    <span className="title">My Cart</span>       
                  </a>

                </li>
              </ul>

              <Modal show={show} onHide={handleClose} style={{ height: "auto", marginLeft: '1000px' }}>
                <Modal.Header closeButton>
                  <div className="cart-header">
                    <div className="cart-total"><i class="fas fa-shopping-basket " style={{ textAlign: "center", color: "green", marginLeft: "90px" }}></i><span id="cart_item_count_" style={{ textAlign: "center", color: "green", marginLeft: "20px" }}>Total Item  &nbsp;
                      {cartCount}
                    </span></div>
                  </div>
                </Modal.Header>
                <Modal.Body>
                  {
                    cartItems.map((el) => (
                      <div className='container d-flex' style={{ padding: "20px" }}>
                        <div>
                          <img src={`https://vsmart.ajspire.com/uploads/product_image/${el.product_image}`} alt="" style={{ height: "80px" }} />
                        </div>
                        <div style={{ marginLeft: "10px", fontSize: "15px" }}>
                          <h3 ><b>{el.english_name}</b></h3>
                          <h4>Unit Price{el.online_price}</h4>
                          <h5 style={{ color: "blueviolet" }}>pv price{el.point_value}</h5>
                        </div>
                        <div>
                          <table>
                            <tr> 
                            <td> 
                              <input type='number' value={qty} onChange={(e) => inputData(e.target.value)}/>    </td>
                              <td>   <button  onClick={() => changeQty(el.cart_id)}  title='Update Qty'> <FontAwesomeIcon icon={ faPlus} /> </button>  </td>
                          
                            </tr>
                          </table>
                         
                         
                        </div>

                        <div style={{ marginLeft: '10%' }}>           
                          <a
                            href="#"
                            onClick={() => removeFromCart(el.cart_id)}
                            style={{ color: 'red' }}
                          >  <i className="fas fa-trash" title='Remove'></i></a>
                        </div>
                      </div>



                    ))
                  }
                </Modal.Body>

                <Modal.Footer>
                  <button style={{ width: "100%", marginLeft: "10px", backgroundColor: "yellowgreen" }}> <a className="cart-checkout-btn" href="/viewcart"><span class="checkout-label" style={{ padding: "50px" }}>View to Cart</span>

                  </a></button>

                </Modal.Footer>
              </Modal>

            </div>
            {/* End Atribute Navigation */}
          </div>
        </nav>
        {/* End Navigation */}


        <form action="#" className="hm-searchbox fixed-top" style={{ marginLeft: '100px', textAlign: 'center' }}>
          <input
            type="text"
            placeholder="Enter your search key ..."
            value={search}
            onChange={handleInputchange}
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              width: '300px',
              marginRight: '10px',
            }}
          />
          <Link
            to={`/search?q=${encodeURIComponent(search)}`}
            onChange={() => setparams({ q: search })}
            style={{ textDecoration: 'none' }}
          >
            <button className="li-btn" style={{ backgroundColor: '#b0b435', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
              <i className="fa fa-search" />
            </button>
          </Link>
        </form>


      </header >
    </div>





  )
}

export default Header