import React from 'react';

const Recipes = ({SingleRecipe}) => {
   console.log(SingleRecipe)
   const {recipe_img
,recipeName,ingredients,cookingMethod,rating

}=SingleRecipe
   return (
      <div className='mb-5 mt-2' >
<div className="card bg-pink-50 grid md:grid-cols-2 md:w-5/6 md:mx-auto card-side  shadow-xl p-2 m-2 md:px-8">
 
  <figure className='rounded-lg'><img src={recipe_img} className=' ' alt="Movie"/></figure>

  <div className="card-body">
    <h2 className="card-title mb-2">{recipeName}</h2>
    <div className='md:flex  justify-center '><span className='text-base font-bold'>Ingradients : </span> <p> {
     
       ingredients.map(ingradient=> <li className=' text-sm ps-2'> {ingradient},</li>)
     

    }</p></div>
    <p className=''> <span className='text-base font-bold'>Cooking-Mathod : </span> {cookingMethod}</p>
   
    <div className="card-actions  justify-center pt-3 flex ">
    <p><span className='font-bold '>Rarings :</span> {rating}</p>
      <button className="btn btn-primary">Favourite</button>
    </div>
  </div>
</div>
      </div>
   );
};

export default Recipes;