import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SingleClass = ({item}) => {
     const[buy,setBuy]=useState(false)
    const{Price,seats,email,_id,name,category}=item
    const {user} =useContext(AuthContext)
    const navigate =useNavigate()
    
    const handlePurchase=item=>{
        
         if(user){
            const orderClass ={ClassId:_id,Price,seats,email:user?.email,name,category}
            fetch(`https://mindful-bliss-server.vercel.app/purchase`,{
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
            
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-80 h-44 rounded-3xl pt-4' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold"><span>Instructor Name:</span> {item.name}</h2>
    <h3><span className='font-bold'>Instructor Email:</span> {email}</h3>
    <p><span className='font-bold '>Class Name: </span> {item?.category} yoga</p>
    <div className='flex'>
    <p><span className='font-bold'>Price:</span> ${Price}</p>
    <p> <span className='font-bold'>Available Seats:</span> {seats}</p>
    </div>
      
    <div className="card-actions justify-center">
      <button disabled={buy} onClick={()=>handlePurchase(item)} className="btn bg-cyan-800 text-white">Purchase Now</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default SingleClass;