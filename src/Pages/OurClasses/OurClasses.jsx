import React, { useEffect, useState } from 'react';
import SingleClass from './SingleClass';
import Title from '../../Hooks/Title';

const OurClasses = () => {
    const [allClasses,setAllClasses]=useState([])
    useEffect(() => {
        fetch("http://localhost:5100/allClasses")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
             setAllClasses(data);
          });
      }, []);
      console.log(allClasses)
    return (
        <div className='pt-20 max-w-7xl mx-auto'>
            <Title heading={"Our All Classes"}></Title>
             

            <div className='grid md:grid-cols-3 py-20'>
                {
                    allClasses?.map(item=><SingleClass item={item} key={item?._id}></SingleClass>)
                }
            </div>
            
        </div>
    );
};

export default OurClasses;