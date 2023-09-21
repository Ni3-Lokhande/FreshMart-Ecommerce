
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AuthUser from './AuthUser';

const ShopDetail = () => {

  const { http, token } = AuthUser();
  const [shop, setshop] = useState([]);
  const [filtercat, setfiltercat] = useState([]);

  const Filtercategory = () => {
    fetch("https://vsmart.ajspire.com/api/categories").then(
      (response) => response.json()

    ).then((data) => {
      setfiltercat(data.categories);

    })
      .catch((error) => {
        console.error("Error feching data:", error)
      });

  };


  const Shopprod = () => {
    fetch(`https://vsmart.ajspire.com/api/products`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setshop(data.products.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

  };

  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };

  useEffect(() => {
    Shopprod();
    Filtercategory();
  }, []);

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
      <div className="all-title-box ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>All Categories</h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active"> View Categories </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5 " style={{ marginTop: "30px" }}>
        <div className="row px-xl-5">

          <div className="col-lg-3 col-md-12 ">


            <div className="border-bottom mb-4 pb-4 bg-white" style={{ width: "320px" }}>
              <h2 className="font-weight-bold p-4">Filter by Category</h2>
              <form style={{ marginLeft: "30px" }}>
                <ul class="shop-widget-list shop-widget-scroll" style={{overflow:'scroll',maxHeight:'350px',paddingRight:'10px'}}>
                  {filtercat.map((el) => (
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                      <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                      <label className="custom-control-label" htmlFor="price-all" onClick={() => toggleCategory(el.category_id)}>{el.category_name}</label>

                    </div>
                  ))}
                </ul>




              </form>
            </div>
          </div>
          {/* {/ Shop Sidebar End /}
    {/ Shop Product Start /} */}
          <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <form action>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search by name" />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary">
                          <i className="fa fa-search" />
                        </span>
                      </div>
                    </div>
                  </form>
                  <div className="dropdown ml-4">
                    <button className="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sort by
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                      <a className="dropdown-item" href="# ">Latest</a>
                      <a className="dropdown-item" href="# ">Popularity</a>
                      <a className="dropdown-item" href="# ">Best Rating</a>
                    </div>
                  </div>
                </div>
              </div>

              {shop.map((el) => (
                <div className="col-lg-3 col-md-6 special-grid best-seller">

                  <div className="products-single fix border border-success">
                    <div className="box-img-hover">

                      <img src={el.product_image} class="img-fluid" alt="Image" style={{ height: "150px" }} />
                      <div className="mask-icon">
                        <ul>
                          <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                          <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                          <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                        </ul>
                        {/* <a class="cart" href="#">Add to Cart</a> */}
                        {token ? (<button onClick={() => addToCart(el.product_id)} className='cart'>Add to Cart</button>) : (

                          <Link to={'/login'} className='cart'>Add to Card</Link>
                        )}

                      </div>
                    </div>
                    <div className="text-center">

                      <h3> {el.english_name}</h3>

                    </div>

                    <div className=" d-flex justify-content-center">

                      <h3 className='text-dark'>MRP</h3> <h4 className='text-danger'>  <del> {el.mrp_price} </del></h4>
                      <h3 className='text-success text-decoration-line-through' style={{ marginLeft: '10px' }}>{el.sale_price} /</h3> <h4 className='text-success'>only</h4>

                    </div>
                  </div>

                </div>

              ))}


              <div className="col-12 pb-1">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center mb-3">
                    <li className="page-item disabled">
                      <a className="page-link" href="# " aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="# ">1</a></li>
                    <li className="page-item"><a className="page-link" href="# ">2</a></li>
                    <li className="page-item"><a className="page-link" href="# ">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="# " aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default ShopDetail