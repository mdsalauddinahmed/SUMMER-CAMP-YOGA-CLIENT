import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import contact from "../../assets/support.png";
import { FaAdn } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import google from "../../assets/google.png";
const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate =useNavigate();
   
   const location =useLocation();
   const from = location.state?.from?.pathname ||  "/";


  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "User logged In",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from,{replace:true});
    });
  };

  const handleGoogle = () => {
    googleSignIn()
    .then(result =>{
      const loggedUser = result.user;
      const saveUser = {name:loggedUser.displayName,email:loggedUser.email,image:loggedUser.photoURL}
      fetch(`https://mindful-bliss-server.vercel.app/users`,{
       method:"POST",
       headers:{
         'content-type':'application/json'
       },
       body:JSON.stringify(saveUser)

      })
      .then(res=>res.json())
      .then(()=>{
    
          navigate(from,{replace:true});
  
      })
     
    

 }) 
  };

  return (
    <div className="py-20 bg-cyan-800">
      <h1 className="text-center font-bold text-white mt-12 text-4xl">
        Please,Login
      </h1>
      <div className="flex      items-center justify-center max-w-7xl mx-auto my-20">
        <div>
          <img src={contact} alt="" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-white">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="email"
              name="email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-600"> Name is required</span>
            )}
          </div>
          <div className="form-control">
            <div className="flex items-center  ">
              <div>
                <label className="label">
                  <span className="label-text font-bold text-white">
                    Password
                  </span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>

              {showPassword ? (
                <>
                <div className="flex items-center ">
                <FaAdn onClick={() => setShowPassword(false)}></FaAdn>
                  <span className="text-white">hide</span>
                </div>
                </>
              ) : (
                <>
                  <FaAdn onClick={() => setShowPassword(true)} />
                  <span>show</span>
                </>
              )}
            </div>
            {errors.password?.type === "required" && (
              <span className="text-red-600"> password required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-600">
                {" "}
                password is less than 6 character
              </span>
            )}
            {errors.password?.type === " maxLength" && (
              <span className="text-red-600">
                {" "}
                password hightest 20 character
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-600">
                {" "}
                password is must bs special character and small letter and a
                capital letter
              </span>
            )}
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
            <input
              type="submit"
              value={"Login"}
              className="btn bg-cyan-900 text-white border-0"
            />
          </div>
          <div>
            <input
              type="btn"
              value={"Connect with Google"}
              onClick={handleGoogle}
              className="btn bg-cyan-900 text-white w-full border-0"
              alt=""
            />
          </div>
          <p>
            Newly visit in this website?please{" "}
            <Link className="text-red-600" to="/signUp">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
