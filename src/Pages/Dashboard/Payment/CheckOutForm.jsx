import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
const CheckOutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError]=useState('')
    const handleSubmit=async(event)=>{
        event.preventDefault()
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement);
        if(card == null){
            return
        }
        console.log(card)
        const {error,paymentMethod}=await stripe.createPaymentMethod({
          type:'card',
          card
        })
        if(error){
          console.log('error',error)
          setCardError(error.message)
        }else{
          setCardError('')
          console.log('payment method',paymentMethod)
        }
    }
    return (
        <div className='mx-10'>
                     <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-info mt-6' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
          {cardError && <p className='text-red-400'>{cardError}</p>}  
        </div>
    );
};

export default CheckOutForm;