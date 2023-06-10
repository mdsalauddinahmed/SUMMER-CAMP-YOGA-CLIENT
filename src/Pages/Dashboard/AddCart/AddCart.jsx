import React from 'react';
import UseTanstack from '../../../Hooks/UseTanstack/UseTanstack';

const AddCart = () => {
    const [cart]=UseTanstack()
    const total =cart.reduce((sum,item)=>item.Price+sum,0)
    return (
        <div className='flex gap-10'>
            <h2>Total Class Item: {cart?.length} </h2>
            <p>Total Price: ${total}</p>
            <button className='btn btn-sm'>pay</button>
        </div>
    );
};

export default AddCart;