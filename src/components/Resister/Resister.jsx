import React from 'react';
import { Link } from 'react-router-dom';

const Resister = () => {
   return (
      <div className="hero min-h-screen  bg-gradient-to-r from-purple-600  to-pink-300">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl text-white font-bold">Resister now!</h1>
        </div>
        <form  className="card  md:w-[450px] shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' required placeholder="Your Name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="url"  name='img'  placeholder="Photo URL" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' required placeholder="Your email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" required placeholder="password"  name='pass' className="input input-bordered" />
              <label className="label">
                <Link to={'/login'}><p  className="label-text-alt link link-hover">Already Have an Accaount?Login</p>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Resister</button>
            </div>
          </div>
        </form >
      </div>
    
    </div>
     
   );
};

export default Resister;