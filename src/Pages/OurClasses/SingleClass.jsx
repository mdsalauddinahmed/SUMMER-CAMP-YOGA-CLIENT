import React from 'react';

const SingleClass = ({item}) => {
    
    return (
        <div>
            
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-80 h-44 rounded-3xl' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Instructor Name:{item.name}</h2>
    <p>Instructor Email{item.email}</p>
    <p>Class Name: {item?.category}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default SingleClass;