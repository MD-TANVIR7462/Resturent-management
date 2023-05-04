import React, { useState } from 'react';
import { FaHeart ,FaStar,FaStarHalfAlt} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({ SingleRecipe }) => {
   console.log(SingleRecipe)
   const { recipe_img, recipeName, ingredients, cookingMethod, rating } = SingleRecipe

   const [disable, setdisable] = useState(false)

   const success = () => {
      toast.success('Added To Favourites !!', {
         position: "top-center",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
      });
      setdisable(true)
   }

   const renderStars = (rating) => {
      const stars = [];
      for (let i = 1; i <= Math.floor(rating); i++) {
         stars.push(<FaStar key={i} className="text-yellow-400" />);
      }
      if (rating % 1 !== 0) {
         stars.push(
            <FaStarHalfAlt key={Math.ceil(rating)} className="text-yellow-400" />
         );
      }
      for (let i = Math.ceil(rating) + 1; i <= 5; i++) {
         stars.push(<FaStar key={i} className="text-gray-300" />);
      }
      return stars;
   };


   return (
      <div className='mb-5 mt-2' >
         <div className="card bg-pink-50 grid md:grid-cols-2 md:w-5/6 md:mx-auto card-side  shadow-xl p-2 m-2 md:px-8">

            <figure className='rounded'><img src={recipe_img} className=' p-2' alt="Movie" /></figure>

            <div className="card-body">
               <h2 className="text-center font-bold text-2xl mb-3">{recipeName}</h2>
               <div className='md:flex  justify-center '><span className='text-base font-bold'>Ingradients : </span> <p> {

                  ingredients.map(ingradient => <li className=' text-sm ps-2'> {ingradient},</li>)


               }</p></div>
               <p className=''> <span className='text-base font-bold'>Cooking-Mathod : </span> {cookingMethod}</p>

               <div className="card-actions  justify-center pt-3 flex ">
                  <p className="font-bold text-lg flex items-center"> <span className='mr-1'>{rating}</span>  {renderStars(rating)}
                     
                  </p>
             

                  <button type="button" onClick={success} disabled={disable} className="  text-2xl btn border-none px-4 py-3 rounded-lg text-white font-bold  bg-gradient-to-r from-pink-400 to-purple-900 hover:from-pink-500 hover:to-indigo-950" ><FaHeart></FaHeart> </button>
               </div>
            </div>
         </div>
         <ToastContainer />
      </div>
   );
};

export default Recipes;