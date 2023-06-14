import React, { useEffect, useState } from 'react';
import Title from '../../Hooks/Title';
import SingleInstructor from './SingleInstructor';

const Instructor = () => {
    const [teacher,setTeacher]=useState([]);

    useEffect(()=>{
        fetch('https://mindful-bliss-server.vercel.app/allInstructors')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setTeacher(data)
        })
    },[])

    return (
        <div className='pt-20 max-w-7xl mx-auto'>
             <Title heading={"Our respect Instructor"}></Title>

             <div className='grid lg:grid-cols-2 gap-4 py-8 m-4'>
                {
          teacher.map(item=><SingleInstructor item={item} key={item.name}></SingleInstructor>)
                }
             </div>
        </div>
    );
};

export default Instructor;