import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from './Recipes';

const ViewRecipies = () => {
   const loderData = useLoaderData()
   console.log(loderData)
   const { chefName, chefPicture, yearsOfExperience, numberOfRecipes, likes, id,recipes
   } = loderData

   return (
      <div>
         <div className="hero md:h-[550px] md:py-8 md:px-14  bg-base-200  ">

            <div className="hero-content flex-col lg:flex-row gap-11">
               <img src={chefPicture} className="  rounded-lg shadow-2xl" />
               <div>
                  <h1 className="text-lg md:text-3xl pb-8 text-center font-bold"><span className='text-pink-700'>I'm</span> {chefName}</h1>

                  <p className='text-center font-bold text-gray-600 text-xl'>About Me</p>
                  <p className="py-1"><span className='text-lg  font-semibold text-black'>Bio :</span> <span className='text-gray-500'>Hi I'm a Chef,I hade a high level Experience and Quality for Making  Delacious food, Here I give all The details about Me, What you should have to KNow </span></p>
                  <p className='font-medium ' ><span className='font-bold text-black'>Experience : </span >  <span className='text-gray-600'> {yearsOfExperience} Years</span></p>
                  <p className='font-medium py-2' ><span className='font-bold text-black'>Recipes : </span ><span className='text-gray-600'>{numberOfRecipes} Recipes</span>  </p>
                  <p className='font-medium' ><span className='font-bold text-black'>Likes : </span ><span className='text-gray-600'> {likes} Likes</span> </p>
               </div>
            </div>
         </div>

         <div className='my-16'>
         <p className='text-center text-2xl font-bold text-gray-700'>My Recipes</p>
            {
recipes?.map(SingleRecipe=> <Recipes key={id} SingleRecipe={SingleRecipe}></Recipes>)
            }
         </div>

      </div>

   );
};

export default ViewRecipies;