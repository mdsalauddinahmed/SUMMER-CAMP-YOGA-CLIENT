import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Tes = ({item}) => {
    const {name,testimonial}=item
    return (
       <div>
        <Fade damping={0.8}>
         <div className='max-w-7xl mx-auto my-10 bg-cyan-950 py-4 rounded '>
      <div className='text-center'>
      <h2 className='text-3xl font-bold text-white'>{name}</h2>
      <p className='text-white '>{testimonial}</p>
      </div>
        </div>
        </Fade>
       </div>
    );
};

export default Tes;