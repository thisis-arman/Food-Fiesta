import React, { useContext } from 'react';
import  { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

const PrivateRoute = ({children}) => {
    const location =useLocation()
    const {user,loading} =useContext(AuthContext)
    if(loading){
        return <FaSpinner className='w-16 h-16 text-lime-500 text-center'/>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace >
    </Navigate>;
};

export default PrivateRoute;