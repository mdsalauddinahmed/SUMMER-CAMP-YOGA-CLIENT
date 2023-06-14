import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useIns = () => {
    const {user}=useContext(AuthContext)
    const [isInstructor,setInstructor]=useState()
    useEffect(()=>{
        fetch(`https://mindful-bliss-server.vercel.app/users/instructor/${user?.email}`)
        .then(res=>res.json()
        .then(data=>setInstructor(data)))
    },[user?.email])
    return  [isInstructor]
};

export default useIns;