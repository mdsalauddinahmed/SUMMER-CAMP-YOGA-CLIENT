import React from 'react';

const SingleClass = ({item}) => {

    const{Price,seats,email}=item
    
    const handlePurchase=item=>{
        console.log(item)
    }
    
    return (
        <div>
            
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-80 h-44 rounded-3xl' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold"><span>Instructor Name:</span> {item.name}</h2>
    <h3><span className='font-bold'>Instructor Email:</span> {email}</h3>
    <p><span className='font-bold '>Class Name: </span> {item?.category} yoga</p>
    <div className='flex'>
    <p><span className='font-bold'>Price:</span> ${Price}</p>
    <p> <span className='font-bold'>Available Seats:</span> {seats}</p>
    </div>
      
    <div className="card-actions justify-center">
      <button onClick={()=>handlePurchase(item)} className="btn bg-cyan-800 text-white">Purchase Now</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default SingleClass;