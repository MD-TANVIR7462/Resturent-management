import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithubAlt } from 'react-icons/fa';
import { AuthContaxt } from '../Provider/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const { signin,google,Github } = useContext(AuthContaxt)
  const [error, seterror] = useState('')

  const loginAccaount = (e) => {
    e.preventDefault()
    const from = e.target
    const email = from.email.value
    const password = from.pass.value
    signin(email, password)
      .then((result) => {
        toast.success('🦄 Login Successfully!', {
          position: "top-center",
          autoClose: 300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          
        });
        from.reset()
        seterror('')
      })
.catch((error)=>{
  seterror(error.message)
  from.reset()
})

  }

const googleSign =()=>{
  google()
  .then(result=>{
   
  })
  .catch(error=>{
   
  })
}
const GithubSign =()=>{
  Github()
  .then(result=>{
   
  })
  .catch(error=>{
   
  })
}


  return (
    <div className="hero  min-h-screen  bg-gradient-to-r from-purple-600  to-pink-300">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold text-white mb-5">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 pb-14 md:w-[450px] w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={loginAccaount} >
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
                <input type="password" name='pass' required placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <label className="label">
                  <Link to={'/resister'}><p className=" label-text-alt link link-hover text-green-600">New here? Resister first..</p></Link>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary">Login</button>
              </div>

<p className='text-red-700'>
  {
    error?error:''
  }
</p>
            </div>
          </form >
          <p className='text-center mb-5'>Or Sign Up With</p>
          <div className='flex justify-center gap-5'>
            <button onClick={googleSign} className='btn w-[120px] bg-gray-100 border-none text-black  shadow-md shadow-gray-500 hover:text-black hover:bg-white '><span className='text-green-600 text-xl pr-2'><FaGoogle></FaGoogle></span> Google</button>

            <button onClick={GithubSign} className='w-[120px] btn  bg-gray-700 border-none text-white  shadow-md shadow-gray-500 hover:text-white '> <span className='text-blue-600 text-xl pr-2'><FaGithubAlt></FaGithubAlt></span>Github</button>
          </div>
        </div>

      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;