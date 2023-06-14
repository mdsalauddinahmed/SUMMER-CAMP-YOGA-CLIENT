import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useAdmin2 = () => {

    const {user}= useContext(AuthContext)
    const [isAdmin, setIsAdmin]=useState();
    useEffect(()=>{
        fetch(`https://mindful-bliss-server.vercel.app/users/admin/${user?.email}`)
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    },[user?.email])
    return [isAdmin]
 
};

export default useAdmin2;