import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

 

// import required modules
import { Navigation, Pagination } from "swiper";
 import banner4 from '../../assets/image1.avif'
 import banner2 from '../../assets/tvm4.webp'
 import banner1 from '../../assets/cover3.jpg'
 import banner5 from '../../assets/img2.jpeg'
 
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
             <div className="text-white opacity-50 p-8   bg-cyan-900  max-w-7xl   mt-28">
              <h1 className="text-4xl font-bold">"Discover the Art of Mindful Movement: Yoga for Body and Soul"</h1>
              <p className="my-10">We believe that yoga is not just a physical practice but a path to self-discovery and personal growth. It offers a sanctuary where you can quiet the noise of the outside world, tune into your inner wisdom, and embrace a sense of tranquility and mindfulness. Through regular practice, you will witness the transformative power of yoga unfold in your life, promoting a greater sense of well-being, clarity of mind, and harmony in all aspects of your existence.</p>
              <button className="btn bg-cyan-950 text-white ">Join Us</button>
              </div>
             </div>
          
           </SwiperSlide>
        <SwiperSlide style={{"background-image":`url(${banner2})`,"background-size":'cover'}} >
             <div className="h-[600px] ">
              <div className="text-white p-8  opacity-50  bg-cyan-900   max-w-7xl mx-24 mt-28">
              <h1 className="text-4xl font-bold">"Transform Your Life Through Yoga: Embrace the Journey"</h1>
              <p className="my-10">Through the art of mindful movement, you will learn to synchronize your breath with gentle and invigorating yoga poses, cultivating balance, strength, and flexibility. Our classes are designed to nourish both your body and soul, allowing you to release tension, reduce stress, and awaken your inner radiance.</p>
              <button className="btn bg-cyan-950 text-white ">Join Us</button>
              </div>
            
             </div>
          
           </SwiperSlide>
        <SwiperSlide  style={{"background-image":`url(${banner5})`,"background-size":'cover'}} >
             <div className="h-[600px] ">
             <div className="text-white p-8  opacity-50  bg-cyan-900   max-w-7xl mx-24 mt-28">
              <h1 className="text-4xl font-bold">"Cultivate Peace and Tranquility: Begin Your Yoga Practice Today"</h1>
              <p className="my-10">We believe that yoga is not just a physical practice but a path to self-discovery and personal growth. It offers a sanctuary where you can quiet the noise of the outside world, tune into your inner wisdom, and embrace a sense of tranquility and mindfulness. Through regular practice, you will witness the transformative power of yoga unfold in your life, promoting a greater sense of well-being, clarity of mind, and harmony in all aspects of your existence.</p>
              <button className="btn bg-cyan-950 text-white ">Join Us</button>
              </div>
             </div>
          
           </SwiperSlide>
        <SwiperSlide style={{"background-image":`url(${banner4})`,"background-size":'cover'}}  >
             <div className="h-[600px] ">
             <div className="text-white p-8  opacity-50  bg-cyan-900   max-w-7xl mx-24 mt-28">
              <h1 className="text-4xl font-bold">"Experience Blissful Harmony: Unlock the Benefits of Yoga"</h1>
              <p className="my-10">Through the art of mindful movement, you will learn to synchronize your breath with gentle and invigorating yoga poses, cultivating balance, strength, and flexibility. Our classes are designed to nourish both your body and soul, allowing you to release tension, reduce stress, and awaken your inner radiance.</p>
              <button className="btn bg-cyan-950 text-white ">Join Us</button>
              </div>
             </div>
          
           </SwiperSlide>
         
        
      </Swiper>
    </>
             
    );};
 

export default Banner;