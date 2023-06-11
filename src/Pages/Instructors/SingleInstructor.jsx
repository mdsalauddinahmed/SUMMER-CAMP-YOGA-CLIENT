import React from 'react';

const SingleInstructor = ({item}) => {
    const{name,email,image,numberOfStudents,expertise}=item
    return (
        <div className='p-4 bg-cyan-800 rounded-lg'>
            <div className='grid lg:grid-cols-2'>
                <img className='w-60 rounded-2xl' src={image} alt="" />
               <div className='sm:text-center text-white font-bold  mt-10'>
               <div >
                <p className='uppercase'>Expertise: {expertise}</p>
                    <p>Name: {name}</p>
                    <p>Student: {numberOfStudents}</p>
                </div>
                <h2>Email: {email}</h2>
               </div>
            </div>
            
        </div>
    );
};

export default SingleInstructor;