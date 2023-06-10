import React from 'react';
import Title from '../../Hooks/Title';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import img3 from '../../assets/cover3.jpg'

const PopularInstructor = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Title heading={"Our Popular Instructors"}></Title>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide className='bg-green-600'>
            <img  src={img3} alt="" />
            <h3 className="text-4xl text-center uppercase   text-white ">Amir</h3>
            <div className='flex gap-4 text-white font-bold '>
                <h2>Name:Amir</h2>
                <p>Email:amir@gmail.com</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='bg-green-600'>
            <img  src={img3} alt="" />
            <h3 className="text-4xl text-center uppercase   text-white ">Amir</h3>
            <div className='flex gap-4 text-white font-bold '>
                <h2>Name:Amir</h2>
                <p>Email:amir@gmail.com</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='bg-green-600'>
            <img  src={img3} alt="" />
            <h3 className="text-4xl text-center uppercase   text-white ">Amir</h3>
            <div className='flex gap-4 text-white font-bold '>
                <h2>Name:Amir</h2>
                <p>Email:amir@gmail.com</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='bg-green-600'>
            <img  src={img3} alt="" />
            <h3 className="text-4xl text-center uppercase   text-white ">Amir</h3>
            <div className='flex gap-4 text-white font-bold '>
                <h2>Name:Amir</h2>
                <p>Email:amir@gmail.com</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='bg-green-600'>
            <img  src={img3} alt="" />
            <h3 className="text-4xl text-center uppercase   text-white ">Amir</h3>
            <div className='flex gap-4 text-white font-bold '>
                <h2>Name:Amir</h2>
                <p>Email:amir@gmail.com</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='bg-green-600'>
            <img  src={img3} alt="" />
            <h3 className="text-4xl text-center uppercase   text-white ">Amir</h3>
            <div className='flex gap-4 text-white font-bold '>
                <h2>Name:Amir</h2>
                <p>Email:amir@gmail.com</p>
            </div>
        </SwiperSlide>
        
        
        
      </Swiper>

            
        </div>
    );
};

export default PopularInstructor;