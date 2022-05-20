import React from 'react'
import Delivery from "../images/delivery.png";
import heroBg from "../images/heroBg.png"


const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full ' id='home'>
      <div className='py-2  flex-1 flex flex-col items-start 
       justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 
      px-4 py-1 rounded-full'>
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className='w-8 h-8 rounded-full bg-white overflow-hidden drop-shadow-xl'>
            <img src={Delivery} className="w-full h-full object-contain" alt="delivery" />
          </div>
        </div>

        <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>
          The Fasted Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span>
        </p>

        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Minima, accusantium exercitationem nostrum ut aperiam iusto neque fugiat non natus? Cum, eaque odit.
          Vel ea nemo architecto, minima natus cumque odit!</p>

        <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full p-4 px-4 py-2 
        rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto'>Order Now</button>
      </div>
      <div className='p-2 flex-1 flex items-center relative'>
          <img src={heroBg} className='ml-auto h-420 w-full lg:w-auto lg:h-650' alt="hero-bsg" />
          
       <div className="w-full h-full absolute  left-0 top-0 flex items-center justify-center px-32 py-4 bg-blue-200">
         <div className="w-190 p-2 bg-cardOverlay backdrop-blur-md"></div>
       </div>
      </div>
    </section>
  )
}

export default HomeContainer;