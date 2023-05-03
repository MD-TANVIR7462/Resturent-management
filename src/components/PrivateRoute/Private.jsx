import React, { useContext } from 'react';
import { AuthContaxt } from '../Provider/AuthProviders';
import { NavLink, Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {

   const location = useLocation()
   console.log(location)
const {user,loading} = useContext(AuthContaxt)
if(loading){
   return <div className='flex min-h-screen flex-col justify-center items-center text-red-700'>
      <progress className="progress w-56"></progress>
   </div>
}
if(user){
   return children
}
else{
  return <Navigate state={{from:location}} to={'/login'} replace={true}></Navigate>
}

   return (
      <div>
         
      </div>
   );
};

export default Private;