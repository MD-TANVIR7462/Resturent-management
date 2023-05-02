import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainHome from './components/Home/Main/MainHome.jsx';
import Resister from './components/Resister/Resister.jsx';
import Login from './components/Login/Login.jsx';
import ViewRecipies from './components/ViewRecipies/ViewRecipies.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<MainHome></MainHome>
      },
      {
        path:'/resister',
        element:<Resister></Resister>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/viewrecipies/:id',
        element:<ViewRecipies></ViewRecipies>,
        loader:({params})=>{return fetch(`https://ass-10-server-mdtanvir7462-gmailcom.vercel.app/${params.id}`)}
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
