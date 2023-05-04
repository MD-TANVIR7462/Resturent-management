import React from 'react';

const About = () => {
   return (
    <div className='my-32'>
      <p className='text-center text-4xl mt-16  font-bold '>About us</p>
      <p className='text-center font-medium text-gray-600  mb-6'>Here A short Discription about Our Resturant</p>
         <div className="hero md:py-8 md:px-14  bg-base-200  ">
           
  <div className="hero-content flex-col lg:flex-row gap-11">
    <img src="https://i.ibb.co/f0MgFkJ/pexels-photo-1307698.jpg" className=" md:w-1/2 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold text-center ">About Our Resturant</h1>
      <p className="py-6 ">The approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests — basic, down-home style — just from a wide range of regions. We are known for our generous portions of BBQ, Southern, Cajun/Creole meals, plus a touch of Caribbean fun. We will tell you now – save room for dessert! </p>
      <button type="button" className="text-xs md:text-base btn border-none px-5 py-3 rounded-lg text-white font-bold  bg-gradient-to-r from-pink-400 to-purple-900 hover:from-pink-500 hover:to-indigo-950">Food Prices</button>
    </div>
  </div>
</div>
</div>
   );
};

export default About;