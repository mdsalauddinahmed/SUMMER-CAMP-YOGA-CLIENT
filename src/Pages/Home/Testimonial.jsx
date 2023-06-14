import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Tes from './Tes';
import Title from '../../Hooks/Title';

const Testimonial = () => {
    const [tes ,setTes]=useState([])
    useEffect(()=>{
        fetch('testimonial.json')
        .then(res=>res.json())
        .then(data=>setTes(data))
    },[])
    return (
        <div>
            <div>
                <Title heading={"Some Students Review about our Mindful-bliss"}></Title>
            </div>

            {
                tes.map(item=><Tes key={item.name} item={item}></Tes>)
            }
            
            
        </div>
    );
};

export default Testimonial;