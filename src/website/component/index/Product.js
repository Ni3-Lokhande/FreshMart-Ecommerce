




import React, { useEffect, useState } from 'react'
import AuthUser from '../../pages/AuthUser';
import { Link } from 'react-router-dom';

const Product = () => {
  const [product, setproduct] = useState([]);
  const { http, token } = AuthUser();

  const getProduct = () => {
    fetch(`https://vsmart.ajspire.com/api/products`).then(
      response => {
        return response.json();
      }
    ).then(
      data => {
        setproduct(data.products.data)
      }
    )
  }


  useEffect(() => {
    getProduct();

  }, [])

  const addToWishlist = (product_id) => {
    http.get(`add-to-wishlist/${product_id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {

        console.error('Error wishlist to cart:', error);
      });
  };

  const addToCart = (product_id) => {
    http.get(`/add-to-cart/${product_id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {

        console.error('Error adding product to cart:', error);
      });
  };



  return (
    <div>
      <div className="products-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-all text-center">
                <h1>Products</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="special-menu text-center">
                <div className="button-group filter-button-group">
                  <button className="active" data-filter="*">Top Featured</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row special-list">
            {product.slice(0, 20).map((el) => (
              <div className="col-lg-3 col-md-6 special-grid best-seller">

                <div className="products-single fix border border-success">
                  <div className="box-img-hover">

                    <img src={el.product_image} class="img-fluid" alt="Image" style={{ height: "150px" }} />
                    <div className="mask-icon">
                      <ul>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                        {/* <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li> */}
                        <li> 
                          {token ? (<a onClick={ () => addToWishlist(el.product_id)} data-toggle="tooltip" data-placement="right" title='Add to Wishlist' > <i className="far fa-heart text-white"></i> </a>) : (

                            <Link to={'/login'} data-toggle="tooltip" data-placement="right" title='Add to Wishlist' > <i className="far fa-heart text-white"></i></Link>
                          )} 
                        </li>
                      </ul>
                      {/* <a class="cart" href="#">Add to Cart</a> */}  
                      {token ? (<a onClick={() => addToCart(el.product_id)}  className='cart'>Add to Cart</a>) : (

                        <Link to={'/login'} className='cart'>Add to Card</Link>
                      )}  

                    </div>
                  </div>
                  <div className="text-center">

                    <h3> {el.english_name}</h3>

                  </div>

                  <div className=" d-flex justify-content-center">
                    
                   <h3 className='text-dark'>MRP</h3> <h4 className='text-danger'>  <del> {el.mrp_price} </del></h4>
                   <h3 className='text-success text-decoration-line-through' style={{marginLeft:'10px'}}>{el.sale_price} /</h3> <h4 className='text-success'>only</h4> 
                  
                  </div>
                </div>

              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;


