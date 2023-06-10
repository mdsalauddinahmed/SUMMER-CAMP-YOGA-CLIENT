import { useQuery } from 'react-query'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const UseTanstack = () => {
    const {user,loading}=useContext(AuthContext)
    
    
    const {  refetch,  data: cart = []  } = useQuery({
      queryKey: ['carts',user?.email],
      
  
      queryFn: async ()=>{
          const response = await fetch(`http://localhost:5100/purchase?email=${user?.email}`)
          return response.json();
      },
     
      
 
  
    })
    return [cart,refetch]
};

export default UseTanstack;