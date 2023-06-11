import React from 'react';
import Title from '../../Hooks/Title';
import img1 from '../../assets/support.png'

const PopularClass = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Title heading={"Our Popular classes"} ></Title>

    <div className="card w-60 bg-cyan-800 shadow-xl">
  <figure><img className='w-60 h-60 rounded-2xl' src= {img1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      
    </h2  >
    <p className=" text-white">If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className=" text-white">Fashion</div> 
      <div className="text-white border-1">Products</div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default PopularClass;