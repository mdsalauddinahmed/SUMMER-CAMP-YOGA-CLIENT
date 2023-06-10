import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import contact from '../../assets/support.png'
import { FaAdn } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const {createUser,updateUserProfile}=useContext(AuthContext)
    const [confirmPassword,setConfirmPassword]=useState(" ")

    const [showPassword, setShowPassword] = useState(false);
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
               
      // if(data.password !== confirmPassword){
      //   alert("password didn't match")
      // }
     
        createUser(data.email,data.password)
        .then(result=>{
            const createdUser=result.user;
            console.log(createdUser)
            updateUserProfile(data.name,data.photo)
             
                .then(data=> 
                    console.log(data.user)
                 )
                
             .catch((error)=>{
                console.log(error)
               })
        })
    };

  return (
    <div className='py-20 bg-cyan-800'>
         <h1 className='text-center font-medium mt-12 text-4xl text-white'>Please Register now</h1>
     <div className='flex lg:flex-col-1 items-center sm:flex-row-reverse justify-center max-w-7xl mx-auto my-20'>
         <div>
          
            <img className='' src={contact} alt="" />
         </div>
           <form  onSubmit={handleSubmit(onSubmit)}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-white">Name</span>
          </label>
          <input type="name" {...register("name",{ required: true })} placeholder="name" name='name'
           className="input input-bordered" />
          {errors.name && <span className='text-red-600'> Name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-white">PhotoUrl</span>
          </label>
          <input type="photo" {...register("photo",{ required: true })} placeholder="photo" name='photo' className="input input-bordered" />
          {errors.photo && <span className='text-red-600'> photo is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-white">Email</span>
          </label>
          <input type="email" {...register("email",{ required: true })} placeholder="email" name='email' className="input input-bordered" />
          {errors.email && <span className='text-red-600'> Name is required</span>}
        </div>
        <div className="form-control">
        <div className='flex items-center  '>
         <div>
         <label className="label">
            <span className="label-text font-bold text-white">Password</span>
          </label>
          <input type={showPassword ? 'text' : 'password'}
   
   onChange={(e) => setPassword(e.target.value)}   {...register("password",
      { required: true,
          minLength:6,
          maxLength:20,
          pattern:/(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
      }
      )} name='password' placeholder="password" className="input input-bordered" />
         </div>

<span>
       {showPassword ? (<div className="flex items-center ">
                <FaAdn onClick={() => setShowPassword(false)}></FaAdn>
                  <span className="text-white">hide</span>
                </div>
                
  
) : ( <>
<FaAdn onClick={() => setShowPassword(true)} />
<span>show</span></>
)}
       </span>
         </div>
          {errors.password?.type ==='required' && <span className='text-red-600'>  password required</span>}
          {errors.password?.type ==='minLength' && <span className='text-red-600'> password is less than 6 character</span>}
          {errors.password?.type ===' maxLength' && <span className='text-red-600'>  password   hightest 20 character</span>}
          {errors.password?.type ==='pattern' && <span className='text-red-600'> password is must bs special character and small letter and a capital letter</span>}
         
           
        </div>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm password</span>
          </label>
          <input type="password"   {...register("confirmPassword",
          { required: true,
              minLength:6,
              maxLength:20,
              pattern:/(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
           
          }
          )} onChange={(e)=>setConfirmPassword(e.target.value)}
           name='confirmPassword'
           value={confirmPassword} placeholder="Confirm password" className="input input-bordered" />
           
           
       
        </div> */}
         
        <div className="form-control mt-6">
           
          <input type="submit"  value={"register"} className="btn bg-cyan-900 text-white border-0"  />
          <p>Already have an Account?please <Link className='text-red-600' to="/login">Login</Link></p>
        </div>
      </form>
     </div></div>
  );
};

export default SignUp;
