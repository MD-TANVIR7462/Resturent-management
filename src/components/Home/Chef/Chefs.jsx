import React, { useEffect, useState } from 'react';
import SingleChef from '../SingleChef/SingleChef';

const Chefs = () => {
const [Chefs,setChefs]=useState([])
useEffect(()=>{
fetch('https://ass-10-server-mdtanvir7462-gmailcom.vercel.app')

.then(res=>res.json())
.then(data=>setChefs(data))

},[])
   return (
      <div>
         <p className='text-center text-3xl mt-16  font-bold '>Our Chefs</p>
      <p className='text-center font-medium text-gray-600  mb-6'>Here A List Of Our Chefs </p>
         <div className=' grid md:grid-cols-3 gap-y-10 md:gap-x-6 bg-zinc-100 p-5 md:p-10 rounded-md'>
         {
            Chefs?.map(chef=><SingleChef key={chef.id} chef={chef}></SingleChef>)
         }
         </div>


      </div>
   );
};

export default Chefs;