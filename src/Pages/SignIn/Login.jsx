import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import contact from '../../assets/support.png'
import { FaAdn } from "react-icons/fa";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);

     

    return (
        <>
         <h1 className='text-center font-medium mt-12 text-4xl'>Please Register now</h1>
     <div className='flex lg:flex-col-1 items-center justify-center max-w-7xl mx-auto my-20'>
         <div>
          
            <img src={contact} alt="" />
         </div>
           <form  onSubmit={handleSubmit(onSubmit)}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" {...register("name",{ required: true })} placeholder="name" name='name'
           className="input input-bordered" />
          {errors.name && <span className='text-red-600'> Name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input type="photo" {...register("photo",{ required: true })} placeholder="photo" name='photo' className="input input-bordered" />
          {errors.photo && <span className='text-red-600'> photo is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email",{ required: true })} placeholder="email" name='email' className="input input-bordered" />
          {errors.email && <span className='text-red-600'> Name is required</span>}
        </div>
        <div className="form-control">
        <div className='flex items-center  '>
         <div>
         <label className="label">
            <span className="label-text">Password</span>
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
       {showPassword ? (<>
 <FaAdn onClick={() => setShowPassword(false)}></FaAdn>
 <span>hide</span></>
  
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
          <input type="password"   {...register("password",
          { required: true,
              minLength:6,
              maxLength:20,
              pattern:/(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
              validate: (value) =>
           value === watch('password') || 'Passwords do not match',
          }
          )} name='confirmPassword' placeholder="password" className="input input-bordered" />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
           
       
        </div> */}
         
        <div className="form-control mt-6">
           
          <input type="submit"  value={"register"} className="btn bg-orange-900"  />
        </div>
      </form>
     </div></>
    );
};

export default Login;