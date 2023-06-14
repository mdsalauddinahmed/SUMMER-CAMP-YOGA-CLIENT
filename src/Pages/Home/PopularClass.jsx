import React, { useEffect, useState } from 'react';
import Title from '../../Hooks/Title';
 
import SinglePopularClass from './SinglePopularClass';

const PopularClass = () => {

    const [allClasses,setAllClasses]=useState([])
    useEffect(() => {
        fetch("https://mindful-bliss-server.vercel.app/allClasses")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
             setAllClasses(data);
          });
      }, []);

    return (
        <div className='max-w-7xl mx-auto'>
            <Title heading={"Our Popular classes"} ></Title>

         <div className='grid lg:grid-cols-3 gap-5'>
            {
                allClasses.slice(0,6).map(item=><SinglePopularClass item={item} key={item._id}></SinglePopularClass>)
            }
         </div>
            
        </div>
    );
};

export default PopularClass;