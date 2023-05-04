import React from 'react';
import { FaWifi,FaMugHot,FaGrin ,FaGripfire} from 'react-icons/fa';

const ThirdExtra = () => {
   return (
      <div className='my-32'>
         <p className='text-center text-4xl mt-16  font-bold '>some Details</p>
         <div className="hero mt-4   md:h-[550px] md:py-8 md:px-14  bg-base-200  ">

            <div className="hero-content flex-col lg:flex-row gap-11">

               <div>
                  <h1 className="text-lg md:text-2xl  text-center font-bold"><span className='text-pink-700'>MONDAY - FRIDAY</span> </h1>
                  <h1 className="text-lg   text-center font-bold"><span className='text-gray-500' > 6:30 AM to 3:00 PM</span> </h1>
                  <h1 className="text-lg md:text-2xl  text-center font-bold"><span className='text-pink-700'>SATURDAY</span> </h1>
                  <h1 className="text-lg   text-center font-bold"><span className='text-gray-500'> 8:00 AM to 1:00 PM</span> </h1>
                  <div className='grid grid-cols-2 mt-6 gap-5'>
                     <div>
                        <p className='md:text-lg text-base font-bold mb-1 flex  items-center'><span className='text-blue-600 text-2xl mr-3 '><FaWifi></FaWifi></span> Fast, Free Wi-Fi</p>
                        <p className='text-sm text-gray-500 font-light'>Browser the internet while you enjoy your meal or favorite beverage.</p>
                     </div>
                     <div>
                        <p className='md:text-lg text-base font-bold mb-1 flex'><span className='text-blue-600 text-2xl mr-3 '><FaMugHot></FaMugHot></span> Specialty Beverages</p>
                        <p className='text-sm text-gray-500 font-light'>We serve gourmet coffee, espresso drinks, and fresh fruit smoothies.</p>
                     </div>
                     <div>
                        <p className='md:text-lg text-base font-bold mb-1 flex'> <span className='text-blue-600 text-2xl mr-3 '><FaGrin></FaGrin></span>Friendly Staff</p>
                        <p className='text-sm text-gray-500 font-light'>Whether it's your first visit or your hundreth, we'll do our best to make sure you feel at home.</p>
                     </div>
                     <div>
                        <p className='md:text-lg text-base font-bold mb-1 flex'> <span className='text-blue-600 text-2xl mr-3 '><FaGripfire></FaGripfire></span>Always Fresh</p>
                        <p className='text-sm text-gray-500 font-light'>At David and Dad's, we make everything on site. Always fresh, always made to order.</p>
                     </div>
                  </div>

               </div>
               <img src='https://i.ibb.co/n8Ynx46/thread-21974330-9953037675556721841.jpg' className="  rounded-lg shadow-2xl md:w-1/2 border-2 border-blue-400 border-solid" />
            </div>
         </div>
      </div>
   );
};

export default ThirdExtra;