import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Title from '../../../Hooks/Title';
import Swal from 'sweetalert2';
 

const AllUser = () => {
    const {data: users = [],refetch}=useQuery(['users'],async()=>{
        const res = await fetch('https://mindful-bliss-server.vercel.app/users')
        return res.json()
    })
 
    const handleMakeAdmin=item=>{
        fetch(`https://mindful-bliss-server.vercel.app/users/admin/${item._id}`,{
            method:"PATCH",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position:'top-end',
                    icon: 'success',
                    title:  `${item.name} as a Admin`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    
    const handleMakeInstructor=item=>{
        fetch(`https://mindful-bliss-server.vercel.app/users/instructor/${item._id}`,{
            method:"PATCH"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position:'top-end',
                    icon: 'success',
                    title:  `${item.name} as Instructor`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }



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
        <th> Admin Role</th>
        <th> Instructor Role</th>
        <th>Delete</th>
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
      <td>{
        item.role === 'admin'?'admin': 
        <button onClick={()=>handleMakeAdmin(item)} className="btn btn-ghost btn-lg text-white  bg-cyan-700 "><FaUserShield></FaUserShield></button>
        }</td>
       
       
     
      <td>{
        item.role == 'instructor'?'Instructor': 
        <button onClick={()=>handleMakeInstructor(item)} className="btn btn-ghost btn-lg text-white  bg-cyan-700 "><FaUserShield></FaUserShield></button>
        }</td>
       
       
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