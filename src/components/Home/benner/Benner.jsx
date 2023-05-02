import React from 'react';

const Benner = () => {
   return (
      <div>
         <div className="hero h-[550px]" style={{ backgroundImage: `url("https://i.ibb.co/bHqvnzs/pexels-photo-1267320.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Easy And Healthy Recipies</h1>
      <p className="mb-5 text-gray-0">Life is full of new taste – try new dishes of food here. Add new fun to your dinner with our foods.Quality of food is our first priority.Our restaurant gives you the best flavors in the world.You will get the pleasure of all the delicious things here.</p>
      <button type="button" className="text-xs md:text-base btn border-none px-5 py-3 rounded-lg text-white font-bold  bg-gradient-to-r from-pink-400 to-purple-900 hover:from-pink-500 hover:to-indigo-950">Order Now</button>
    </div>
  </div>
</div>
      </div>
   );
};

export default Benner;