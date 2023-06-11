import React from 'react';
import UseTanstack from '../../../Hooks/UseTanstack/UseTanstack';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AddCart = () => {
    const [cart,refetch]=UseTanstack()
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
              fetch(`http://localhost:5100/purchase/${item._id}`,{
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
    const total =cart.reduce((sum,item)=>item.Price+sum,0)
    return (
        <div>
        <div className='flex gap-28 font-bold'>
            <h2>Total Class Item: {cart?.length} </h2>
            <p>Total Price: ${total}</p>
            <button className='btn text-white bg-cyan-700 btn-sm'>pay</button>
        </div>
        
          
        <div className='overflow-x-auto'>
  <table className="table w-full border-2">
    {/* head */}
    <thead className='bg-cyan-800 text-white' >
      <tr >
        <th>
         
        </th>
        <th>Class Name</th>
        <th>Instructor Name</th>
        <th>Available Seats</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className='sticky'>
      { 
      cart.map((item,index)=><tr key={item._id}>
      <td>
         {index+1}
      </td>
       
      <td>
        {item.category}
      </td>
      <td>{item.name}</td>
      <td>{item.seats}</td>
      <td className='text-start'>${item.Price}</td>
      <td>
        <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-lg text-white  bg-cyan-700 "><FaTrashAlt></FaTrashAlt></button>
      </td>
    </tr> )
      }
      
      
    </tbody>
    
    
  </table>
</div>



        </div>
    );
};

export default AddCart;