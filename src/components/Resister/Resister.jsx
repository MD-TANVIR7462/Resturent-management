import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContaxt } from '../Provider/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import { getAuth, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';

const Resister = () => {
  const [error, seterror,] = useState('')
  const auth = getAuth(app);
  const { CreatUser,update,logOut } = useContext(AuthContaxt)
  const navigate = useNavigate()
  const signup = (event) => {
    event.preventDefault()

    const form = event.target
    const name = form.name.value
    const Img = form.img.value
    const email = form.email.value
    const password = form.pass.value


    CreatUser(email, password)
      .then((result) => {

       
        // updateProfile(auth.currentUser,{
        //   displayName : name,
        //   photoURL: Img
        // })
        update(name,Img)
        .then(()=>{
          console.log('updated')
        })
        .catch((error) => {
          console.log(error)
        });
        logOut()
        toast.success('🦄 Accaount Creat Successfully!', {
          position: "top-center",
          autoClose: 300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate('/login')
        form.reset()
      })


      .catch((error)=>{
        seterror(error.message)
        from.reset()
      })


    



  }
  return (
    <div className="hero min-h-screen  bg-zinc-100">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl text-black font-bold">Resister now!</h1>
        </div>
        <form className="card  md:w-[450px] shadow-2xl bg-base-100" onSubmit={signup}>
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
              <input type="url" name='img' required placeholder="Photo URL" className="input input-bordered" />
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
              <input type="password" required placeholder="password" name='pass' className="input input-bordered" />
              <label className="label">
                <Link to={'/login'}><p className="label-text-alt link text-blue-500 link-hover">Already Have an Accaount? Login</p>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
            <p className='text-red-700 mb-5'>
  {
    error?error:''
  }
</p>
              <button className="btn btn-primary">Resister</button>
            </div>
          </div>
        </form >
      </div>
      <ToastContainer />
    </div>

  );
};

export default Resister;