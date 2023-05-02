import React from 'react';
import Nav from './components/navBar/Nav';
import MainHome from './components/Home/Main/MainHome';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <Nav></Nav>
     <MainHome></MainHome>
     <Footer></Footer>
      
    </div>
  );
};

export default App;