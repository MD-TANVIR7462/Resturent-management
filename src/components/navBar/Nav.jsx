import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
const Nav = () => {
   const user = true
   return (
      <div className='bg-slate-50'>
         
        <div className="navbar  px-2 md:px-28  h-20    ">      
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
              <li><NavLink to={'/'} className={  ({ isActive }) => isActive ? 'text-pink-800 ' : 'text-black pl-4'}>  Home</NavLink ></li>

              <li> <NavLink to={'/Blogs'} className={({ isActive }) => isActive ? " text-pink-800 pl-4" : "'text-black  pl-4 "}> Blog</NavLink></li>
              <li> <NavLink to={'/resister'} className={({ isActive }) => isActive ? " text-pink-800 pl-4" : "'text-black  pl-4 "}> Resister</NavLink></li>
            </ul>
          </div>
          <Link to={'/'} className=" font-bold  text-base md:text-3xl"><span className='text-pink-800' >Indian  </span> Cafe</Link>
          {/* The best of traditional Indian food */}
       <link></link>
        </div>
        <div className="navbar-center hidden lg:flex text-lg ">
          <ul className="menu menu-horizontal  font-bold mx-5">
            <NavLink to={'/'} className={({ isActive }) => isActive ? ' text-pink-800 mr-5 ' : 'text-black mr-5'}> Home</NavLink>

            <NavLink to={'/Blogs'} className={({ isActive }) => isActive ? " text-pink-800 pl-4" : "'text-black  pl-5 "}>  Blog</NavLink >
            <NavLink to={'/resister'} className={({ isActive }) => isActive ? " text-pink-800 pl-4" : "'text-black  pl-5 "}>  Resister</NavLink >
           
          </ul>
        </div>
        <div className="navbar-end">
       
       {
      //   user? <label  className="btn btn-ghost btn-circle avatar " title='Md Tanvir'>
      //   <div className="w-15 rounded-full" title='Md Tanvir'>
      //   <img src="https://i.ibb.co/X5Zdcgp/man.png" alt="" title='Md Tanvir' />
      //   </div>
      // </label>

      user?<div className="dropdown dropdown-end" title='MD-Tanvir'>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.ibb.co/X5Zdcgp/man.png" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
      :
<button type="button" className="text-xs md:text-base btn border-none px-5 py-3 rounded-lg text-white font-bold  bg-gradient-to-r from-pink-400 to-purple-900 hover:from-pink-500 hover:to-indigo-950">Login</button>
       }




        </div>
   
</div>
      </div>
   );
};

export default Nav;