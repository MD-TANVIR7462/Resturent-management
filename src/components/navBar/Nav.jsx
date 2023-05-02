import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
const Nav = () => {
   const user = false
   return (
      <div>
         
        <div className="navbar  bg-indigo-50 px-2 md:px-28  h-20   ">      
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
              <li><NavLink to={'/'} className={  ({ isActive }) => isActive ? 'text-900 ' : 'text-black pl-4'}>  Home</NavLink ></li>

              <li> <NavLink to={'/Blogs'} className={({ isActive }) => isActive ? " text-sky-600 pl-4" : "'text-black  pl-4 "}> Blog</NavLink></li>
            </ul>
          </div>
          <Link to={'/'} className=" font-bold  text-base md:text-3xl"><span className='text-sky-600'>Hungry</span>Food</Link>
       <link></link>
        </div>
        <div className="navbar-center hidden lg:flex text-lg ">
          <ul className="menu menu-horizontal  font-bold mx-5">
            <NavLink to={'/'} className={({ isActive }) => isActive ? ' text-sky-600 mr-5 ' : 'text-black mr-5'}> Home</NavLink>

            <NavLink to={'/Blogs'} className={({ isActive }) => isActive ? " text-sky-600 pl-4" : "'text-black  pl-5 "}>  Blog</NavLink >
           
          </ul>
        </div>
        <div className="navbar-end">
       
       {
        user? <label  className="btn btn-ghost btn-circle avatar " title='Md Tanvir'>
        <div className="w-15 rounded-full" title='Md Tanvir'>
        <img src="https://i.ibb.co/X5Zdcgp/man.png" alt="" title='Md Tanvir' />
        </div>
      </label>
      :
<button type="button" className="text-xs md:text-base btn border-none px-5 py-3 rounded-lg text-white font-bold  bg-gradient-to-r from-blue-400 to-indigo-600 hover:from-blue-500 hover:to-indigo-700">Login</button>
       }




        </div>
   
</div>
      </div>
   );
};

export default Nav;