import React from 'react';
import Title from '../../Hooks/Title';
import img1 from '../../assets/support.png'

const PopularClass = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Title heading={"Our Popular classes"} ></Title>

    <div className="card w-60 bg-green-600 shadow-xl">
  <figure><img className='w-60 h-60 rounded-3xl' src= {img1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default PopularClass;