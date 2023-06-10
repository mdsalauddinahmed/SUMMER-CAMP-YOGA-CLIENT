import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
 
    const { user, logOut } = useContext(AuthContext);
     
  
    const handleLogOut = () => {
      logOut()
        .then(() => {})
        .catch((error) => console.log(error));
    };
    const navItem= <>
       <li><Link to="/">Home</Link></li>
        <li>
          <Link to="/classes">Our Classes</Link>
        </li>
        <li><Link to="/instructors">Our Instructor</Link></li>
      {
        user?<li><Link className='me-4' to="/dashboard">Dashboard</Link></li>:" "
      }
    </>
    const LogItem= <>
   
      {
        user?<>
      
           
 
       <div className='flex'>
       <img className='w-10 h-10   rounded-full' src={user.photoURL } />
     
    
     <Link className='btn' onClick={handleLogOut}>logOut</Link>  
       </div>
     </>:
       <li><Link to="/login">Login</Link></li>
      }
 
    </>
    return (
     
          <div className=" navbar  fixed z-10 opacity-60 bg-black text-white  ">
  
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {navItem}
      </ul>
    </div>
    <label tabIndex={0} className=" avatar">
        <div className="w-10 lg:ms-20 rounded-full">
          <img src={logo} />
        </div>
      </label>
    <a className="btn btn-ghost normal-case text-xl">
         Mindful-bliss
    </a>
  </div>
  <div className=" navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {
        navItem
       }
    </ul>
  </div>
  <div className="navbar-end">
  <ul className='lg:me-20'>
  {LogItem}
  </ul>
  </div>
  </div>
 
 
    );
};

export default Navbar;