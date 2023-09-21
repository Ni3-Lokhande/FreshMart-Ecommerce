
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const ShopBrand = () => {

    const [brand, setshop] = useState([]);
    const [filterbrand, setfilterbrand] = useState([]);
    const Filtercategory = () => {
        fetch("https://vsmart.ajspire.com/api/brands").then(
            (response) => response.json()

        ).then((data) => {
            setfilterbrand(data.brands);

        })
            .catch((error) => {
                console.error("Error feching data:", error)
            });

    };
    useEffect(() => {
        Filtercategory();
    }, []);
    return (
        <>
            <div className="all-title-box ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>All Brands</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active"> View Brands </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-5" style={{ marginTop: "30px" }}>
                <div className="row px-xl-5">

                    <div className="col-lg-3 col-md-12">


                        <div className="border-bottom mb-4 pb-4 bg-white" style={{ width: "320px" }}>
                            <h2 className="font-weight-bold p-4">Filter by Brand</h2>
                            <form style={{ marginLeft: "30px" }}>
                                <ul class="shop-widget-list shop-widget-scroll" style={{overflow:'scroll',maxHeight:'350px',paddingRight:'10px'}}>
                                    {filterbrand.map((el) => (
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                            <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                                            <label className="custom-control-label" htmlFor={`brand-${el.id}`}>{el.brand_name}</label>

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
                            {brand.map((el) => (
                                <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
                                    <div className="card product-item border-0 mb-4" style={{ height: "400px" }}>
                                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0" style={{ height: "250px" }}>
                                            <img className="img-fluid w-100" src={el.brand_banner} alt />
                                        </div>
                                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3" style={{ height: "100px" }}>
                                            <h6 className="text-truncate mb-3">{el.brand_name}</h6>
                                            {/* <div className="d-flex justify-content-center">
                                                <h6>{el.sale_price}</h6><h6 className="text-muted ml-2"><del>{el.mrp_price}</del></h6>
                                            </div> */}
                                        </div>
                                        {/* <div className="card-footer d-flex justify-content-between bg-light border">
                                            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
                                            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
                                        </div> */}
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




        </>
    )
}