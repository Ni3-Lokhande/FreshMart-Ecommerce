

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {

    return (
        <div id="slides-shop" className="cover-slides" >
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                autoPlay={true}
                interval={3000}
                transitionTime={500}
                showStatus={false}
                >
                 
                <div style={{height:'500px'}}> 
                    <img src="assets/images/banner-01.jpg" alt="Slide 1" />
                   
                </div>
                <div  style={{height:'500px'}}>
                    <img src="assets/images/banner-02.jpg" alt="Slide 2" />
                    
                </div>
                <div  style={{height:'500px'}}>
                    <img src="assets/images/banner-03.jpg" alt="Slide 3" />
                   
                </div>
        

            </Carousel>
         
        </div>

      
  

    );
};

export default Slider;
