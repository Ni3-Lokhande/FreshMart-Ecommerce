

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const BrandDetail = () => {

  let { brand_id } = useParams();

  const [Cat, setCate] = useState([]);
  const [brand, setbrand] = useState([]);
  const [Count, setCount] = useState([]);
  const [Count1, setCount1] = useState([]);
  console.log(Count1);


  const getCategoryData = () => {
    // console.log();
    try {
      fetch(` https://vsmart.ajspire.com/api/product-shop/${brand_id}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          // setCategory(data.category.data);
          // setCategory_(data.category_);
          // subCategory_(data.subcategory_);
          setCate(data.cat);
          setbrand(data.brands);
          // setSub(data.sub);
          setCount(data.count);
          setCount1(data.count1);
        })

        .catch((error) => {
          console.error("Error fetching data:", error);
        });

    } catch (error) {

    }


  }
  useEffect(() => {
    getCategoryData();
  }, [brand_id]);



  return (
    <>
      <div className="all-title-box ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Brands</h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link href="#">Home</Link></li>
                <li className="breadcrumb-item active"> Brand </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="container ">
        <div class="row">
          <div class="col-lg-3">
            <div className="shop-widget">
              <h6 className="shop-widget-title">Filter by Category</h6>
              <form>
                <ul class="shop-widget-list shop-widget-scroll">
                  {Cat.map((Cat) => (
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                      <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                      <label className="custom-control-label" htmlFor="price-all">{Cat.category_name} </label>

                    </div>
                  ))}
                </ul>
              </form>
            </div>
            <div className="shop-widget">
              <h6 className="shop-widget-title">Filter by Brands</h6>
              <form>
                <ul class="shop-widget-list shop-widget-scroll">
                  {brand.map((Brand) => (
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                      <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                      <label className="custom-control-label" htmlFor="price-all">{Brand.brand_name} </label>

                    </div>
                  ))}
                </ul>
              </form>
            </div>
          </div>
          <div class="col-lg-9">
            <div className="container">
              <div className="row">
                {
                  brand.map((products) =>
                  (
                    <div className='col-lg-3'>

                      <div className="product">
                        <a href="# " className="img-prod"><img className="img-fluid card" src={products.product_image} style={{ height: '200px' }} alt="Colorlib Template" />
                          <span className="status">&#8377;OFF</span>
                          <div className="overlay" />
                        </a>
                        <div className="text py-3 pb-4 px-3 text-center">
                          <h3><a href="# ">{products.brand_name}</a></h3>
                          <div className="d-flex">
                            <div className="pricing">
                              <p className="price"><span className="mr-2 price-dc">{products.mrp_price}</span><span className="price-sale"></span></p>
                            </div>
                          </div>
                          <div className="bottom-area d-flex px-3">
                            <div className="m-auto d-flex">
                              <a href="# " className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                <span><i className="ion-ios-menu" /></span>
                              </a>
                              <a href="# " className="buy-now d-flex justify-content-center align-items-center mx-1">
                                <span><i className="ion-ios-cart" /></span>
                              </a>
                              <a href="# " className="heart d-flex justify-content-center align-items-center ">
                                <span><i className="ion-ios-heart" /></span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}