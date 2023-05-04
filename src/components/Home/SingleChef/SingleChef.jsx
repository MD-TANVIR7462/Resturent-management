import React from 'react';
import LazyLoad from 'react-lazy-load';
import { useNavigate } from 'react-router-dom';

const SingleChef = ({ chef }) => {
  const { chefName, chefPicture, yearsOfExperience, numberOfRecipes, likes, id } = chef
  //  console.log(chef)
  const navigate = useNavigate()
  const View = () => {
    navigate(`/viewrecipies/${id}`)

  }
  return (
    <>
      <div className="card md:w-80 bg-base-100 shadow-xl">


        <figure>
          <LazyLoad>
            <img src={chefPicture} alt="" />
          </LazyLoad>

        </figure>


        <div className="card-body">
          <h2 className="md:card-title text-lg"><span className='font-bold text-gray-600'>Name :</span> {chefName}</h2>
          <p className='font-medium' ><span className='font-bold text-gray-600'>Experience</span > : {yearsOfExperience} Years</p>
          <p className='font-medium' ><span className='font-bold text-gray-600'>Recipes</span > : {numberOfRecipes} Recipes </p>
          <p className='font-medium' ><span className='font-bold text-gray-600'>Likes</span > : {likes} Likes </p>
          <div className="card-actions justify-start">
            <button type="button" className="mt-4 text-xs md:text-sm btn border-none px-5 py-3 rounded-lg text-white font-bold  bg-gradient-to-r from-pink-400 to-purple-900 hover:from-pink-500 hover:to-indigo-950" onClick={View}>View Recipes</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleChef;