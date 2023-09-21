
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import AuthUser from './AuthUser';

export const Subcategories = () => {

  const { http, token } = AuthUser();

  let { cat_id, sub_id } = useParams();
  // for product
  const [Category, setCategory] = useState([]);
  //for banner
  const [category_, setCategory_] = useState([]);
  //for subbanner
  const [sub, subCategory_] = useState([]);
  // scroll menu
  const [Cat, setCate] = useState([]);
  const [brand, setbrand] = useState([]);
  //Slider after banner
  const [Sub, setSub] = useState([]);
  //count for brand and categoryies
  const [Count, setCount] = useState([]);
  const [Count1, setCount1] = useState([]);

  console.log(Count1);

  const getCategoryData = () => {
    // console.log();
    try {
      fetch(`https://vsmart.ajspire.com/api/product-shop/${cat_id}/${sub_id}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setCategory(data.category.data);
          setCategory_(data.category_);
          subCategory_(data.subcategory_);
          setCate(data.cat);
          setbrand(data.brand);
          setSub(data.sub);
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
  }, [cat_id, sub_id]);

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
    <>
    
    <div className="all-title-box ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>SubCategories</h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active"> View Categories </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     
      <section className="ftco-section ftco-category ftco-no-pt">
        <div className="container mt-5">
          <Carousel>

            {Sub.map((Cate, index) => {
              if (index % 3 === 0) {
                const categorySlice = Sub.slice(index, index + 3);
                return (
                  <Carousel.Item key={index}>
                    <div className="row">
                      {categorySlice.map((category, subIndex) => (
                        <div className="col-md-4" key={subIndex}>
                          <div className="category-wrap  img mb-4 d-flex align-items-end" >
                            <img className='img' src={category.subcategory_image} alt={category.subcategory_name} style={{ height: '150px' }} srcset="" />
                            <div className="text px-3 py-1">
                              <h4 className="mb-0"><a href="# ">{category.subcategory_name}</a></h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Carousel.Item>
                );
              } else {
                return null; // If not the start of a new row, return null (no carousel item)
              }
            })}
          </Carousel>

        </div>
      </section>
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-3">
            <div className="shop-widget">
              <h2 className="shop-widget-title">Filter by Category</h2>
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
              <h2 className="shop-widget-title">Filter by Brands</h2>
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
              {Category.map((products) => (
                <div className="col-lg-3 col-md-6 special-grid best-seller">

                  <div className="products-single fix border border-success">
                    <div className="box-img-hover">

                      <img src={products.product_image} class="img-fluid" alt="Image" style={{ height: "150px" }} />
                      <div className="mask-icon">
                        <ul>
                          <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                          <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                          <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                        </ul>
                        {/* <a class="cart" href="#">Add to Cart</a> */}
                        {token ? (<button onClick={() => addToCart(products.product_id)} className='cart'>Add to Cart</button>) : (

                          <Link to={'/login'} className='cart'>Add to Card</Link>
                        )}

                      </div>
                    </div>
                    <div className="text-center">

                      <h3> {products.english_name}</h3>

                    </div>

                    <div className=" d-flex justify-content-center">

                      <h3 className='text-dark'>MRP</h3> <h4 className='text-danger'>  <del> {products.mrp_price} </del></h4>
                      <h3 className='text-success text-decoration-line-through' style={{ marginLeft: '10px' }}>{products.sale_price} /</h3> <h4 className='text-success'>only</h4>

                    </div>
                  </div>

                </div>

              ))}
              </div>
            </div>
          </div>
        </div>
      </div>


    </>

  )
}