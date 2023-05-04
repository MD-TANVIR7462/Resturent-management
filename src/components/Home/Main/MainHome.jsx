import React, { useEffect, useState } from 'react';
import Benner from '../benner/Benner';
import About from '../About/About';
import Chefs from '../Chef/Chefs';
import FeedBack from '../FeedBack/FeedBack';
import ThirdExtra from '../Extrasection/ThirdExtra';
import ClipLoader from "react-spinners/ClipLoader";

const MainHome = () => {
   const [spiner, setSpiner] = useState(false)
   useEffect(() => {
      setSpiner(true)
      setTimeout(() => {
         setSpiner(false)
      }, 160);



   }, [])

   return (
      <div className='mb-14'>
         {
            spiner ? <div className='flex justify-center '>
               <ClipLoader

                  color={"#36d7b7"}
                  loading={true}
                  size={100}
                  speedMultiplier

               />
            </div>
               :
               <div>
                  <Benner></Benner>
                  <About></About>
                  <Chefs></Chefs>
                  <ThirdExtra></ThirdExtra>
                  <FeedBack></FeedBack>
               </div>
         }


      </div>
   );
};

export default MainHome;