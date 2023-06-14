import React from 'react';
import Title from '../../../Hooks/Title';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import UseTanStack from '../../../Hooks/UseTanStack';
 
 
// const stripePromise = loadStripe('import.meta.env.VITE_PAYMENT_GATEWAY')
const PayForm = () => {
      const [cart]=UseTanStack()
     const total = cart.reduce((sum,item)=>sum+item.Price,0);
     const Price = parseFloat(total.toFixed(2))
    return (
        <div className='w-full'>
             <Title heading={"Payment Gateway"}></Title>
          
          <Elements stripe={stripePromise}>
            <CheckOutForm Price={Price}></CheckOutForm>
          </Elements>
      
        </div>
    );
};

export default PayForm;