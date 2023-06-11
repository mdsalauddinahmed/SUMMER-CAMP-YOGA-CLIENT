import React from 'react';
import Title from '../../../Hooks/Title';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data.name)
         const{email,name,image,price,seats,category}=data
         const addClass={email,name,image,Price:parseFloat(price),seats,category}
        fetch('http://localhost:5100/allClasses',{
           method:"POST",
           headers:{
            "content-type":"application/json"
           },
           body:JSON.stringify(addClass)
        })
        .then(res=>res.json())
        .then(data=>{
            reset()
            if(data.insertedId){
                Swal.fire({
                    position:'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
     
    
    
    }
    return (
        <div className="w-1/2 mx-auto px-10 bg-cyan-500 py-10 my-10">
           <Title heading={"Add new class"} className="text-white"></Title>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white font-bold">Class Name:</span>
                        </label>
                        <select defaultValue="Choose one" {...register("category", { required: true })} className="select input input-bordered ">
                            <option disabled className='text-dark-200'>Choose one</option>
                            <option value="hatha">Hatha Yoga</option>
                            <option value="vinyasa">Vinyasa Yoga</option>
                            <option value="ashtanga">Ashtanga Yoga</option>
                            <option value="bikram">Bikram Yoga</option>
                             <option value="yin">Yin Yoga</option>
                        </select>
                    </div>
                
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text text-white font-bold">Instructor Name:</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text text-white font-bold">Instructor Email:</span>
                    </label>
                    <input type="email" placeholder="Email"
                        {...register("email", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                 
                <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white font-bold">Available seat</span>
                        </label>
                        <input type="number" {...register("seats", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white font-bold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                
               
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text text-white font-bold">Class Image*</span>
                    </label>
                    <input placeholder='photoUrl' type="text" {...register("image", { required: true })} className="file-input ps-4 file-input-bordered w-full " />
                </div>
                <div className='text-center'>
                <input className="btn btn-sm mt-4" type="submit" value="Add class" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;