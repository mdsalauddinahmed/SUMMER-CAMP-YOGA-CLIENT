import React, { useEffect, useState } from 'react';
import Title from '../../Hooks/Title';
import SingleInstructor from '../Instructors/SingleInstructor';
 

const PopularInstructor = () => {
    const [teacher,setTeacher]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5100/allInstructors')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setTeacher(data)
        })
    },[])
    return (
        <div className='max-w-7xl mx-auto'>
            <Title heading={"Our Popular Instructors"}></Title>
           
            <div className='grid lg:grid-cols-2 gap-4 py-8 m-4'>
                {
          teacher.slice(0,6).map(item=><SingleInstructor item={item} key={item.name}></SingleInstructor>)
                }
             </div>
            
        </div>
    );
};

export default PopularInstructor;