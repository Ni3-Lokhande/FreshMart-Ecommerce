
import React, { useEffect, useState } from 'react'
import AuthUser from './AuthUser';
import { Link } from 'react-router-dom';
import './Checkout.css';


const Checkout = () => {
  const { http, token } = AuthUser();
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [pvTotal, setPVTotal] = useState(0);
  const [taxTotal, setTaxTotal] = useState(0);
  const [discountTotal, setDiscountTotal] = useState(0);
 

  const getcartproduct = () => {
    http.get(`/get-cart-list`).then(
      (res) => {
        setCartItem(res.data.cart);
        setCartCount(res.data.cart.length);
        setCartItem(res.data.cart);
        let subTotal = 0;
        let pvTotal = 0;
        let taxTotal = 0;
        let discountTotal = 0;


        res.data.cart.forEach((item) => {
          subTotal += item.online_price * item.cart_product_qty;
          pvTotal = pvTotal + parseFloat(item.point_value);
          taxTotal = taxTotal + parseFloat(item.tax_per);
          discountTotal = discountTotal
        })
        setSubTotal(subTotal);
        setPVTotal(pvTotal);
        setTaxTotal(taxTotal);
        setDiscountTotal(discountTotal);


      })

  };
  useEffect(() => {
    if (token) {
      getcartproduct()
    }

  }, [token]);

  const handlconfirm = () => {
    alert('Your Order is Confirmed');
  };

  return (
    <div style={{ backgroundColor: '#f4f4f4' }}>
      {/* <div className="card bg-dark text-white mt-5 ">
        <img src="https://www.healthifyme.com/blog/wp-content/uploads/2022/04/shutterstock_1198340449-1-1024x682.jpg" class="card-img" alt="..." style={{ height: "450px" }}></img>
        <div className="card-img-overlay  mt-5" style={{ textAlign: "center" }}>

          <div className='nav-item nav-link active' style={{ fontSize: "35px", color: "white", marginTop: "150px" }}>CHECKOUT</div>
        </div>
      </div>
      <div className='container mt-5' >
        <table className='table table-bordered'>
          <thead style={{ backgroundColor: "green" }}>
            <tr >
              <th>Serial</th>
              <th>Product</th>
              <th> Name</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Qty</th>
              <th>Tax</th>
              <th>PV</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {cartItem.map((item, index) => (
              <tr key={item.cart_id}>
                <td >{index + 1}</td>
                <td className="shoping__cart__item">
                  <img src={`https://vsmart.ajspire.com/uploads/product_image/${item.product_image}`} alt={item.english_name} style={{ width: "100px" }} />
                  <h5>{item.english_name}</h5>
                </td>
                <td className="shoping__cart__price">${item.english_name}</td>
                <td className="shoping__cart__price">${item.cart_price}</td>
                <td>
                  {item.brand_name}


                </td>
                <td>{item.cart_product_qty}</td>
                <td>₹{item.salesman_price}({item.tax_per}%)</td>
                <td>₹{item.point_value}</td>
                <td className="shoping__cart__total">${item.cart_price * item.cart_product_qty}</td>


                <td class="table-action">
                  <a className="trash" href="" title="Remove Wishlist" style={{ marginLeft: "10px" }}><i class="fas fa-trash"></i></a></td>


              </tr>
            ))}




          </tbody>

        </table>
        <div style={{ textAlign: "center" }} >
          <table className='table' style={{ borderLeft: "none", borderRight: "none" }}>
            <tbody >
              <tr>
                <td>Sub Total</td>
                <td>{subTotal}</td>
              </tr>
              <tr>
                <td>PV Total</td>
                <td>{pvTotal}</td>
              </tr>
              <tr>
                <td>Tax Total</td>
                <td>{taxTotal}</td>
              </tr>
              <tr>
                <td>Discount Total</td>
                <td>{ }</td>
              </tr>
              <tr>
                <td>Total(Incl. TAX)</td>
                <td>{subTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}

      <div className="all-title-box ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>CHECKOUT</h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active"> My Cart </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 box">
        <h2 style={{ fontWeight: 'bold', paddingTop: '20px' }}>Your Order</h2> <hr style={{ paddingBottom: '20px' }} />
        <table className="table table-bordered" style={{ backgroundColor: '#f4f4f4' }}>
          <thead style={{ backgroundColor: "#b0b435", fontWeight: 'bold' }}>
            <tr>
              <th>Serial</th>
              <th>Product</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Quantity</th>
              <th>Tax</th>
              <th>Pv</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItem.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="shoping__cart__item">
                  <img
                    src={`https://vsmart.ajspire.com/uploads/product_image/${item.product_image}`}
                    alt={item.english_name}
                    style={{ width: "100px" }}
                  />
                  <h5>{item.english_name}</h5>
                </td>
                <td className="shoping__cart__price">{item.english_name}</td>
                <td className="shoping__cart__price">₹{item.cart_price}</td>
                <td>{item.brand_name}</td>
                <td>{item.cart_product_qty}</td>
                <td>₹{item.tax_per}</td>
                <td>₹{item.point_value}</td>
                <td className="shoping__cart__total">₹{item.cart_price * item.cart_product_qty}</td>
                <td className="table-action">
                  <a
                    className="trash"
                    href="#"
                    title="Remove Item"
                    style={{ marginLeft: "10px" }}

                  >
                    <i className="fas fa-trash"></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="row my-5 box1 ">
          <div />
          <div style={{ width: '400px' }}>
            <div className="order-box">

              <div className="d-flex" style={{ borderTop: '3px solid yellowgreen' }}>
                <h4>Sub Total</h4>
                <div className="ml-auto font-weight-bold">₹{subTotal.toFixed(2)}</div>
              </div>
              <hr className="my-1" />

              <div className="d-flex">
                <h4>pv Total</h4>
                <div className="ml-auto font-weight-bold">₹{pvTotal.toFixed(2)}</div>
              </div>
              <hr className="my-1" />

              <div className="d-flex">
                <h4>tax Total</h4>
                <div className="ml-auto font-weight-bold">₹{taxTotal.toFixed(2)}</div>
              </div>
              <hr className="my-1" />

              <div className="d-flex">
                <h4>Shipping Cost</h4>
                <div className="ml-auto font-weight-bold">Free</div>
              </div>
              <hr />

              <div className="d-flex gr-total">
                <h5>Grand Total</h5>
                <div className="ml-auto h5">₹{subTotal.toFixed(2)}</div>
              </div>

            </div>

          </div>
        </div>
      </div>

      <div className='container  alert fade show mt-5 border p-4' style={{ backgroundColor: 'white' }}>
        <h2 className='mb-3' style={{ fontWeight: 'bold' }}> Delivery Address</h2>

        <hr style={{ width: "100%", color: "green" }}></hr>

        <div className="row mb-4">
          <div className="col-sm-6 ">
            <div className="card" style={{ backgroundColor: '#f4f4f4' }} >
              <div className="card-body">
                <h3 class="card-title" style={{ fontWeight: 'bold' }}>Home</h3>
                <h4 className="card-text">Khandaj</h4>

              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card" style={{ backgroundColor: '#f4f4f4' }}>
              <div className="card-body">
                <h3 class="card-title" style={{ fontWeight: 'bold' }}>Contact Number</h3>
                <h4 className="card-text">9370463030</h4>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='col-lg-12  alert fade show mt-5 p-4' style={{ backgroundColor: 'white' }}>
        <h2 className='mb-3' style={{ fontWeight: 'bold' }}> Payment Option</h2>

        <hr style={{ width: "100%", colorAdjust: "20%" }}></hr>

        <div className="row">
          <div className="col-sm-3 " >
            <div className="card" style={{ backgroundColor: '#f4f4f4' }} >
              <div className="card-body ">
                <input type="radio" id='Cash On Delivery' /> &nbsp; Cash On Delivery 
                <h2>₹{subTotal}</h2>
              </div>
            </div>
          </div>
          <div className="col-sm-3 " >
            <div className="card"  style={{ backgroundColor: '#f4f4f4' }}>
              <div className="card-body">
                <input type="radio" id='Online Transfer' /> &nbsp; Online Transfer
                <h2>₹{subTotal}</h2>
              </div>
            </div>
          </div>
          <div className="col-sm-3 " >
            <div className="card"  style={{ backgroundColor: '#f4f4f4' }} >
              <div className="card-body">
                <input type="checkbox" /> &nbsp; Use Wallet balance Current Month

                <h2>0.00</h2>
              </div>
            </div>
          </div>
          <div className="col-sm-3" >
            <div className="card"  style={{ backgroundColor: '#f4f4f4' }}>
              <div className="card-body">
                <input type="checkbox" /> &nbsp; Repurchase Amount
                ₹

                <h2> ₹</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-12 '>
        <div className="checkout-check" style={{ marginLeft: '35%' }}><input type="checkbox" id="checkout-check" required="" /> &nbsp;<label htmlFor="checkout-check">By making
          this purchase you agree to our <a href="" data-bs-toggle="modal" data-bs-target="#product-view">Terms and
            Conditions</a> </label>
        </div>

        <div className='mb-5 container-fluid'>
          <div className="d-grid shopping-box ">
            <Link to="/" className="ml-auto btn hvr-hover btn-block " onClick={handlconfirm}>
              Confirm Order
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Checkout
