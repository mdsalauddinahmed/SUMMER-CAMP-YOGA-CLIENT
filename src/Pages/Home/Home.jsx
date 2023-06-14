import React from 'react';
import Banner from './Banner';
import PopularClass from './PopularClass';
import PopularInstructor from './PopularInstructor';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <PopularClass></PopularClass>
             <PopularInstructor></PopularInstructor>
             <Testimonial></Testimonial>
        </div>
    );
};

export default Home;