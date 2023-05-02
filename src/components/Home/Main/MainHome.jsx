import React from 'react';
import Benner from '../benner/Benner';
import About from '../About/About';
import Chefs from '../Chef/Chefs';

const MainHome = () => {
   return (
      <div>
         <Benner></Benner>
         <About></About>
         <Chefs></Chefs>
         
      </div>
   );
};

export default MainHome;