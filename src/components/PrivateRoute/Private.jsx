import React, { useContext } from 'react';
import { AuthContaxt } from '../Provider/AuthProviders';
import { NavLink, Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
   const location = useLocation()
   console.log(location)
const {user} = useContext(AuthContaxt)
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