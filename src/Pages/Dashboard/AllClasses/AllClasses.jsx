import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
 
import Title from '../../../Hooks/Title';
import UseTanStack from '../../../Hooks/UseTanStack';

const AllClasses = () => {
    const [cart,refetch]=UseTanStack()
    const [allClasses,setAllClasses]=useState([])

     



    useEffect(() => {
        fetch("https://mindful-bliss-server.vercel.app/allClasses")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
             setAllClasses(data);
          });
      }, []);

      const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://mindful-bliss-server.vercel.app/${item._id}`,{
                method:"DELETE",
                headers:{

                'content-type':'application/json'
                },
                body:JSON.stringify()
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount>0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          }) 
    }
    return (
        <div className='w-full'>
            <Title heading={"All classes here"}></Title>
            <table className="table w-full border-2">
    {/* head */}
    <thead className='bg-cyan-800 text-white' >
      <tr >
        <th>
         #
        </th>
        <th>Image</th>
        <th>Class Name</th>
        <th>Instructor Name</th>
        <th>Available Seats</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className='sticky'>
      { 
      allClasses.map((item,index)=><tr key={item._id}>
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
        {item.category}
      </td>
      <td>{item.name}</td>
      <td>{item.Price}</td>
      <td className='text-start'>${item.Price}</td>
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

export default AllClasses;