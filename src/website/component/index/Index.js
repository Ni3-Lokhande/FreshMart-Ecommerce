

import React,{useState,useEffect} from 'react';
import Slider from './Slider';
import OfferBox from './OfferBox';
import Product from './Product';

const Index = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://vsmart.ajspire.com/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <Slider />

      <div className="box-add-products" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <OfferBox imageSrc="assets/images/add-img-01.jpg" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <OfferBox imageSrc="assets/images/add-img-02.jpg" />
            </div>
          </div>
        </div>
      </div>

      <Product />
    </div>
  );
};

export default Index;
