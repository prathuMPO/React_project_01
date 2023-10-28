import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
  return (
    <>
    <div>Services</div>
    <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}> 

        <div>
            <img src={img1} alt="item1" />
            <p className='legend'>Data Visualization</p>
        </div>
        <div>
            <img src={img2} alt="item1" />
            <p className='legend'>Custom AI Solutions</p>
        </div>
    </Carousel>

    </>

  )
}

export default Services;