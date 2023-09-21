


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthUser from './AuthUser';

const WishList = () => {
  const { http, token } = AuthUser();
  const [product, setProduct] = useState([]);
  const [wishItem, setWishItem] = useState([]);
  const [wishId, setWishId] = useState([]);

  useEffect(() => {
    // Fetch products when the component mounts
    fetch(`https://vsmart.ajspire.com/api/products`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.products.data);
      });
  }, []); // Empty dependency array means this effect runs once on component mount

  const addToCart = (product_id) => {
    http.get(`/add-to-cart/${product_id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
      });
  };

  const getWishProduct = () => {
    http.get(`/get-wishlist`)
      .then((ras) => {
        console.log(ras.data);
        setWishItem(ras.data.wishlist);
        alert('Product added to wishlist');
      })
      .catch((error) => {
        console.error('Error fetching wishlist:', error);
      });
  };

  const removeWishlist = (wishlistNumber) => {
    http.get(`/remove-from-wishlist/${wishlistNumber}`)
      .then((response) => {
        console.log(response.data);
        setWishId(wishlistNumber);
        alert('Product removed from wishlist successfully');
      })
      .catch((error) => {
        console.error('Error removing product from wishlist', error);
      });
  };

  useEffect(() => {
    if (token) {
      getWishProduct();
    }
  }, [token]); // Only trigger this effect when the 'token' changes

  return (
    <div>
      <div className="all-title-box ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>WISHLIST</h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active"> Wishlist </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <table className="table table-bordered">
          <thead style={{ backgroundColor: "yellowgreen" }}>
            <tr>
              <th>Serial</th>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Shopping</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {wishItem.map((el, index) => (
              <tr key={el.wishe_id}>
                <td>{index + 1}</td>
                <td className="thumbnail-img">
                  <a href="#">
                    <img className="img-fluid" src={`https://vsmart.ajspire.com/uploads/product_image/${el.product_image}`} alt="" />
                  </a>
                </td>
                <td className="name-pr">
                  <a href="#">
                    {el.english_name}
                  </a>
                </td>
                <td className="price-pr">
                  <p>{el.mrp_price}</p>
                </td>
                <td className="quantity-box">In Stock</td>
                <td className="add-pr">
                  {token ? (
                    <button className="btn btn-danger py-2 px-4" onClick={() => addToCart(el.product_id)}>Add to Cart</button>
                  ) : (
                    <Link to={'/login'}>Add to Cart</Link>
                  )}
                </td>
                <td className="remove-pr">
                  <a href="#">
                    <button className="btn btn-danger py-2 px-4" onClick={() => removeWishlist(el.wishe_id)}>Remove</button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishList;
