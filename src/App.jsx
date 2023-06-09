import React from 'react';
import Nav from './components/navBar/Nav';
import MainHome from './components/Home/Main/MainHome';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
   <div className=''>
     <div className='md:w-11/12 w-full mx-auto md:mx-auto'>
      <Nav></Nav>
     <Outlet></Outlet>
     <Footer></Footer>
      
    </div>
   </div>
  );
};

export default App;