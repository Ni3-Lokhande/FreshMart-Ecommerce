

import React, { useEffect, useState } from 'react';
import AuthUser from './AuthUser';
import { Link } from 'react-router-dom';
import './ViewCart.css';

const ViewCart = () => {
  const { http, token } = AuthUser();
  const [cartItem, setCartItem] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [pvTotal, setPVTotal] = useState(0);
  const [taxTotal, setTaxTotal] = useState(0);

  const getcartproduct = () => {
    http.get(`/get-cart-list`).then(
      (ras) => {
        setCartItem(ras.data.cart);

        let calculatedSubTotal = 0;
        let calculatedPVTotal = 0;
        let calculatedTaxTotal = 0;

        ras.data.cart.forEach((item) => {
          calculatedSubTotal += item.cart_price * item.cart_product_qty;
          calculatedPVTotal += parseFloat(item.products_basic_pv);
          calculatedTaxTotal += item.tax_per;
        });

        setSubTotal(calculatedSubTotal);
        setPVTotal(calculatedPVTotal);
        setTaxTotal(calculatedTaxTotal);
      }
    );
  };

  useEffect(() => {
    if (token) {
      getcartproduct();
    }
  }, [token]);

  const removeFromCart = (cart_id) => {
    http
      .get(`/remove-to-cart/${cart_id}`)
      .then(() => {
        setCartItem((prevCartItems) =>
          prevCartItems.filter((item) => item.cart_id !== cart_id)
        );
        alert('Product removed from Cart successfully');
      })
      .catch((error) => {
        console.error('Error removing product from cart', error);
      });
  };

  return (
    <div style={{ backgroundColor: '#f4f4f4' }}>

      <div className="all-title-box ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>CART</h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active"> My Cart </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 box">
        <h2 style={{ fontWeight: 'bold', paddingTop: '20px' }}>Your Cart</h2> <hr style={{ paddingBottom: '20px' }} />
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
                    onClick={() => removeFromCart(item.cart_id)}
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
          <div style={{width:'400px'}}>
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

      <div className='mb-5 container-fluid'>
        <div className="d-grid shopping-box ">
          <Link to="/checkout" className="ml-auto btn hvr-hover btn-block ">
            Proceed To Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;

