import React from 'react';
import Benner from '../benner/Benner';
import About from '../About/About';
import Chefs from '../Chef/Chefs';
import FeedBack from '../FeedBack/FeedBack';
import ThirdExtra from '../Extrasection/ThirdExtra';

const MainHome = () => {
   return (
      <div className='mb-14'>
         <Benner></Benner>
         <About></About>
         <Chefs></Chefs>
         <ThirdExtra></ThirdExtra>
         <FeedBack></FeedBack>
         
      </div>
   );
};

export default MainHome;