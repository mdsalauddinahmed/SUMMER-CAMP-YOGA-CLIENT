import React from 'react';
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from '../SharedComponents/Navbar';
import Footer from '../SharedComponents/Footer/Footer';
import UseTanstack from '../Hooks/UseTanstack/UseTanstack';

const Dashboard = () => {
    const [cart]=UseTanstack()
    return (
        <div>
 <Navbar></Navbar>
<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
   
          <Outlet></Outlet>
          
  </div> 
  <div className="drawer-side bg-cyan-900">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full mt-24 text-white">
      {/* Sidebar content here */}
      <li><NavLink to="/dashboard/addClass">Add Class</NavLink></li>

      <div className='divider '>--------------------------------------------------------------------------------</div>
      <li><Link>
      <button className="btn">
     <FaShoppingCart></FaShoppingCart>
     <div className="badge ">+{cart?.length || 0}</div>
    </button>
      </Link></li>
    </ul>
  
  </div>
</div>


    
         

       
          
        
<Footer></Footer>   
  </div>
    );
};

export default Dashboard;