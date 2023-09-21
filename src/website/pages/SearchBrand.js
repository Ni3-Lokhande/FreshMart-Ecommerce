

import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import AuthUser from './AuthUser';

const SearchBrand = () => {

    const { http, token } = AuthUser();
    const [product, setproduct] = useState([]);
    const location = useLocation();
    const [SearchParam] = useSearchParams(location.search);
    const q = SearchParam.get('q');
    const filterdata = product.filter(record => record.english_name.toLowerCase().includes(q.toLowerCase()));

    console.log(filterdata);
    const getproduct = () => {
        http.get("/products  ").then((response) => {
            setproduct(response.data.products.data);
        }
        )
    }
    const  addToCart = (product_id) => {
        http.get(`/add-to-cart/${product_id}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error adding product to cart', error);
            });


    }
    useEffect(() => {
        getproduct();

    }, [])

    return (
        <div>

            <div className="all-title-box ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>PRODUCT SEARCH</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active"> Search Products </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-area pt-60 pb-50 mt-5">
                <div className="container">

                    <div className="row special-list">
                        {filterdata.map((featured) => (
                            <div className="col-lg-3 col-md-6 special-grid best-seller">

                                <div className="products-single fix border border-success">
                                    <div className="box-img-hover">

                                        <img src={featured.product_image} class="img-fluid" alt="Image" style={{ height: "150px" }} />
                                        <div className="mask-icon">
                                            <ul>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                            {/* <a class="cart" href="#">Add to Cart</a> */}
                                            {token ? (<button onClick={() => addToCart(featured.product_id)} className='cart'>Add to Cart</button>) : (

                                                <Link to={'/login'} className='cart'>Add to Card</Link>
                                            )}

                                        </div>
                                    </div>
                                    <div className="text-center">

                                        <h3> {featured.english_name}</h3>

                                    </div>

                                    <div className=" d-flex justify-content-center">

                                        <h3 className='text-dark'>MRP</h3> <h4 className='text-danger'>  <del> {featured.mrp_price} </del></h4>
                                        <h3 className='text-success text-decoration-line-through' style={{ marginLeft: '10px' }}>{featured.sale_price} /</h3> <h4 className='text-success'>only</h4>

                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div >

    )
}

export default SearchBrand

