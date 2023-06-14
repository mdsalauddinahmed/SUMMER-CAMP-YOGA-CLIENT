import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from 'react-query';

const UseTanStack = () => {
    const {user,loading}=useContext(AuthContext)
    const {  refetch,  data: cart = []  } = useQuery({
        queryKey: ['carts',user?.email],
        enabled:!loading && !!user?.email,
    
        queryFn: async ()=>{
            const response = await fetch(`https://mindful-bliss-server.vercel.app/purchase?email=${user?.email}`)
             const result =await response.json()
             console.log(result)
            return result;
            
        },
       
         
    
      })
    return  [cart,refetch]
};

export default UseTanStack;