
import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Master from './website/Master';
import Index from './website/component/index/Index';
import About from './website/pages/about/About';
import ContactUs from './website/pages/ContactUs';
import Login from './website/pages/Login';
import Form from './website/pages/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShopDetail from './website/pages/ShopDetail';
import Shop from './website/pages/Shop';
import { ShopBrand } from './website/pages/ShopBrand';
import { BrandDetail } from './website/pages/BrandDetail';
import { Subcategories } from './website/pages/Subcategories';
import  SearchBrand  from './website/pages/SearchBrand';
import ViewCart from './website/pages/ViewCart';
import WishList from './website/pages/WishList';
import Checkout from './website/pages/Checkout';



const App = () => {
  return (
    <div>
      <ToastContainer position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        closeButton={false}
        limit={3} 
        className="toast-container" theme='colored' />
       <BrowserRouter>

        <Routes>

          <Route path='/' element={<Master Comp={Index} />} />
          <Route path='/about' element={<Master Comp={About} />} />
          <Route path='/contact-us' element={<Master Comp={ContactUs} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Form />} />
          <Route path='/shopdetail' element={<Master Comp={ShopDetail} />} />
          <Route path='/product-shop/:cat_id/:sub_id' element={<Master Comp={Subcategories} />} />
          <Route path='/shop' element={<Master Comp={Shop} />} />
          <Route path='/shopbrand' element={<Master Comp={ShopBrand} />} />
          <Route path='/product-shop/:brand_id' element={<Master Comp={BrandDetail}/>} />
          <Route path='/search' element={<Master Comp={SearchBrand}/>}/>
          <Route path='/viewcart' element={<Master Comp={ViewCart}/>}/>
          <Route path='/wishlist' element={<Master Comp={WishList}/>}/>
          <Route path='/checkout' element={<Master Comp={Checkout}/>}/>

          
          
          



        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App