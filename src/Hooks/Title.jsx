import React from 'react';

const Title = ({heading}) => {
    return (
        <div className='mx-auto my-10 text-center md:w-4/12'>
        <h3 className='text-3xl text-cyan-900 font-bold uppercase border-y-4 py-4'>{heading}</h3>
         
     </div>
    );
};

export default Title;