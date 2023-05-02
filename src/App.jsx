import React from 'react';
import Nav from './components/navBar/Nav';
import MainHome from './components/Home/Main/MainHome';

const App = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <Nav></Nav>
      
     <MainHome></MainHome>
      
    </div>
  );
};

export default App;