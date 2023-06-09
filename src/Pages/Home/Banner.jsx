import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

 

// import required modules
import { Navigation, Pagination } from "swiper";
 import banner4 from '../../assets/cover4.jpg'
 import banner2 from '../../assets/cover2.jpg'
 import banner1 from '../../assets/cover3.jpg'
 import banner5 from '../../assets/banner.jpg'
 
const Banner = () => {
     
  const slideStyle = {
    backgroundImage: `url(${banner4})`,  
    backgroundSize: 'cover',  
  };
    return (
      <>
      <Swiper
        autoHeight={true}
        spaceBetween={20}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        
        modules={[Navigation, Pagination]}
        className="mySwiper    "
      >
        <SwiperSlide style={slideStyle}  >
             <div className="h-[600px] ">
              <div>
              <h1>hello world</h1>
              </div>
             </div>
          
           </SwiperSlide>
        <SwiperSlide style={{"background-image":`url(${banner2})`,"background-size":'cover'}} >
             <div className="h-[600px] ">
              <div className="text-white   max-w-7xl mx-24 mt-28">
              <h1>hello world</h1>
              <p className="my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione <br /> in rerum nulla temporibus aliquid, unde nihil, voluptatibus quidem qui maiores aut. <br /> Blanditiis iste voluptatum ipsa reprehenderit. Eligendi nesciunt maiores sint tenetur <br /> adipisci doloribus dolores ipsam soluta reiciendis iste amet quaerat pariatur impedit <br /> nam vero dignissimos, consectetur recusandae aliquam voluptatum. Est.</p>
              <button className="btn ">Join Us</button>
              </div>
            
             </div>
          
           </SwiperSlide>
        <SwiperSlide  style={{"background-image":`url(${banner5})`,"background-size":'cover'}} >
             <div className="h-[600px] ">
              <div>
              <h1>hello world</h1>
              </div>
             </div>
          
           </SwiperSlide>
        <SwiperSlide style={{"background-image":`url(${banner4})`,"background-size":'cover'}}  >
             <div className="h-[600px] ">
              <div>
              <h1>hello world</h1>
              </div>
             </div>
          
           </SwiperSlide>
         
        
      </Swiper>
    </>
             
    );};
 

export default Banner;