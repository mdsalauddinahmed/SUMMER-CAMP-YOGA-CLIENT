import React, { useEffect, useState } from 'react';
import SingleClass from './SingleClass';
import Title from '../../Hooks/Title';

const OurClasses = () => {
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
        <div className='py-10 max-w-7xl mx-auto'>
            <Title heading={"Our All Classes"}></Title>
             

            <div className='grid md:grid-cols-3 py-10 gap-4'>
                {
                    allClasses?.map(item=><SingleClass item={item} key={item?._id}></SingleClass>)
                }
            </div>
            
        </div>
    );
};

export default OurClasses;