import React from 'react';

const FeedBack = () => {
   return (
      <div>
         <p className='text-center text-3xl mt-16  font-bold '>Give Your Important Feedback</p>
         <p className='text-center font-medium text-gray-600  mb-6'>Tell US What can we Improve</p>
         <div className="hero md:p-10 bg-base-200 rounded-lg ">
  <div className="hero-content flex-col lg:flex-row-reverse md:gap-14">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Got Any Feedback?</h1>
      <p className="py-6">Tell Us about Our food.We always Try to provide good Quality Food ..But If you Think Our food Was Not Good Or You Have a Bad Experience,Tell US How Can We Improve That Problem...</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" required placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Feedback</span>
          </label>
          <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
      
        </div>
        <div className="form-control mt-6">
        <button type="button" className="text-xs md:text-base btn border-none px-5 py-3 rounded-lg text-white font-bold  bg-gradient-to-r from-pink-400 to-purple-900 hover:from-pink-500 hover:to-indigo-950">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
   );
};

export default FeedBack;