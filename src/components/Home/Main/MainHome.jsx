import React from 'react';
import Benner from '../benner/Benner';
import About from '../About/About';
import Chefs from '../Chef/Chefs';
import FeedBack from '../FeedBack/FeedBack';

const MainHome = () => {
   return (
      <div>
         <Benner></Benner>
         <About></About>
         <Chefs></Chefs>
         <FeedBack></FeedBack>
         
      </div>
   );
};

export default MainHome;