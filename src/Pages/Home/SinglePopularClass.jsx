import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SinglePopularClass = ({item}) => {
  const[buy,setBuy]=useState(false)
    const{user}=useContext(AuthContext)
    const navigate = useNavigate()
    const {image,Price,seats,category,name,_id}=item
    const handlePurchase=item=>{
        console.log("clicked")
        if(user){
           const orderClass ={ClassId:_id,Price,seats,email:user?.email,name,category}
           fetch(`http://localhost:5100/purchase`,{
               method:"post",
               headers:{
                   "content-type":"application/json"
               },
               body:JSON.stringify(orderClass)
           })
           .then(res=>res.json())
           .then(data =>{
                
               if(data.insertedId){
                   Swal.fire({
                       position:'top-end',
                       icon: 'success',
                       title: 'Your work has been saved',
                       showConfirmButton: false,
                       timer: 1500
                     })
                     setBuy(true)
               }
           })
        }
        else{
           Swal.fire({
               title: 'Please login to purchase the class',
                
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'please login'
             }).then((result) => {
               if (result.isConfirmed) {
                 navigate('/login')
               }
             })
        }
   }
    return (
        <div>
              <div className="card  hover:bg-cyan-600  hover:translate-x-4  w-[80%] bg-cyan-800 shadow-xl p-8">
  <figure><img className='  rounded-2xl' src= {image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title uppercase text-white">
      class: {category} Yoga
    </h2  >
   <div className="flex gap-4">
      <div className=" text-white">Students:{seats}</div> 
      <div className="text-white border-1">Price: ${Price}</div>
    </div>
    <div className="card-actions justify-center">
      <button disabled={buy} onClick={()=>handlePurchase(item)} className="btn hover:bg-cyan-500 bg-cyan-800 text-white">Purchase Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default SinglePopularClass;