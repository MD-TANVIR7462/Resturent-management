import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
   return (
      <div className="hero  min-h-screen  bg-gradient-to-r from-purple-600  to-pink-300">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold text-white mb-5">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 pb-14 md:w-[450px] w-full max-w-sm shadow-2xl bg-base-100">
        <form  >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" required name='email' className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='pass' required placeholder="password"  className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
              <label className="label">
              <Link to={'/resister'}><p className=" label-text-alt link link-hover">New here? Resister first..</p></Link>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Login</button>
            </div>

          
          </div>
        </form >
        <p className='text-center mb-5'>Or Sign Up With</p>
           <div className='flex justify-center gap-5'> 
           <button className='btn w-[120px] bg-gray-400 border-none text-black  shadow-md shadow-gray-500 hover:text-white '>Google</button>
           
            <button className='w-[120px] btn  bg-gray-400 border-none text-black  shadow-md shadow-gray-500 hover:text-white '>Github</button>
           </div>
        </div>
         
      </div>
   
    </div>
   );
};

export default Login;