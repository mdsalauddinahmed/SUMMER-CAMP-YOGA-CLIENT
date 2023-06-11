import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Title from '../../../Hooks/Title';

const AllUser = () => {
    const {data: users = [],refetch}=useQuery(['users'],async()=>{
        const res = await fetch('http://localhost:5100/users')
        return res.json()
    })
    return (
        <div className='w-full'>
            
        <Title heading={"All Students Here"}></Title>

            <table className="table w-full border-2">
    {/* head */}
    <thead className='bg-cyan-800 text-white' >
      <tr >
        <th>
         #
        </th>
        <th>Image</th>
        <th> Name</th>
        <th>Email</th>
         
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className='sticky'>
      { 
      users.map((item,index)=><tr key={item._id}>
      <td>
         {index+1}
      </td>
      <td>
          
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item?.image} alt="image" />
              </div>
            </div>
            
          
        </td>
       
      <td>
        {item.name}
      </td>
      <td>{item.email}</td>
      <td>student</td>
       
       
      <td>
        <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-lg text-white  bg-cyan-700 "><FaTrashAlt></FaTrashAlt></button>
      </td>
    </tr> )
      }
      
      
    </tbody>
    
    
  </table>
        </div>
    );
};

export default AllUser;