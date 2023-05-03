import React from 'react';

const Blog = () => {
   return (
      <div className='my-16'>

         <p className='text-center text-4xl mt-16  font-bold text-pink-800 '>BLOGS</p>
         <p className='text-center font-medium text-gray-600  mb-6'>Here Some BLogs About Our Resturant And Some Questions Answer !! </p>
         <div className="hero my-10 rounded-lg md:py-8 md:px-8  bg-base-200  ">

            <div className="hero-content flex-col lg:flex-row gap-11">
               <img src="https://i.ibb.co/BKRSVGs/Control-Uncontrolled-Components-Web.webp" className=" md:w-1/2 rounded-lg shadow-2xl" />
               <div>
                  <h1 className="text-xl font-bold">Tell us the differents between uncontrolled and controlled components??</h1>

                  <p className='mt-5' ><span className='font-semibold '>Controlled Components : </span> <span className='text-sm'>Controlled components are those components that are fully controlled by React. This means that React manages all aspects of the component's state and behavior, events, and rendering. In other words, the component's state is stored in React's state and updated using the setState() method. The data flows from the parent component to the child component via props.</span>.</p>
                  <p className='mt-5' ><span className='font-semibold '>UnControlled Components : </span> <span className='text-sm'>Uncontrolled components, on the other hand, are those components that are not fully controlled by React. This means that React does not manage all aspects of the component's state and behavior, and some of its behavior is left up to the browser.</span>.</p>

               </div>
            </div>
         </div>


         <div className="hero mb-10 rounded-lg md:py-8 md:px-8  bg-base-200  ">

            <div className="hero-content flex-col lg:flex-row gap-11">
               <img src="https://i.ibb.co/XjXnvhd/miniature-comprendre-le-state-notext-1-1000x598.png" className=" md:w-1/2 rounded-lg shadow-2xl" />
               <div>
                  <h1 className="text-xl font-bold">How to validate React props Using proptypes ??</h1>

                  <p className='mt-5' ><span className='font-semibold '>React Props Validation : </span> <span className='text-sm'>In React, you can use the PropTypes library to validate the props that are passed to a component. PropTypes is a library that allows you to specify the type and shape of the props that a component should receive. It's a good practice to validate your props because it helps catch errors early and makes your code more maintainable.Here's an example of how to use PropTypes to validate a comp</span>.</p>


               </div>
            </div>
         </div>


         <div className="hero mb-10 rounded-lg md:py-8 md:px-8  bg-base-200  ">

            <div className="hero-content flex-col lg:flex-row gap-11">
               <img src="https://i.ibb.co/GCbJzQ6/Express-JS-vs-Node-JS-Why-its-Time-to-Migrate-1.png" className=" md:w-1/2 rounded-lg shadow-2xl" />
               <div>
                  <h1 className="text-xl font-bold">Tell Us the difference between  Node.js and Express.js ??</h1>

                  <p className='mt-5' ><span className='font-semibold '>Node Js : </span> <span className='text-sm'>Node.js is a runtime environment for executing JavaScript code outside of a web browser. It is built on the V8 JavaScript engine and provides a way to run JavaScript on the server-side. Node.js provides many built-in modules, such as http, fs, and path, which allow developers to build server-side applications that can perform tasks like serving web pages, handling file uploads, and interacting with databases.</span>.</p> 

                  <p className='mt-5' ><span className='font-semibold '>Express Js : </span> <span className='text-sm'>Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of abstractions for building web applications, such as middleware for handling HTTP requests and responses, routing for mapping URLs to functions, and templating engines for rendering HTML pages. Express.js makes it easier to build web applications in Node.js by providing a set of useful features and abstractions.</span>.</p>


               </div>
            </div>
         </div>


         <div className="hero mb-10 rounded-lg md:py-8 md:px-8  bg-base-200  ">

            <div className="hero-content flex-col lg:flex-row gap-11">
               <img src= "https://i.ibb.co/4pWVSBV/React-Hooks-Custom.png" className=" md:w-1/2 rounded-lg shadow-2xl" />
               <div>
                  <h1 className="text-xl font-bold">What is custom hook  ?? And Why will You create a custom hook ?</h1>

                  <p className='mt-5' ><span className='font-semibold '>Node Js : </span> <span className='text-sm'>In React, a custom hook is a JavaScript function that allows you to reuse logic across multiple components. Custom hooks enable you to extract stateful logic from components so that it can be reused in other components. Custom hooks follow the naming convention of starting with the word "use".</span>.</p> 

                

               </div>
            </div>
         </div>





      </div>
   );
};

export default Blog;