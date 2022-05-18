import React from 'react'
import Logo from '../images/logo.png';
import { MdOutlineShoppingCart } from "react-icons/md";


const Header = () => {
  return (
    <header className='fixed z-50 w-screen bg-slate-300 p-4 px-16'>
      {/* Desktop table */}
      <div className='hidden md:flex w-full h-full '>
        <div className='flex items-center gap-2'>
          <img src={Logo} className='w-8 object-cover' alt="Logo" />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </div>

        <ul className='flex items-center gap-8 ml-auto'>
          <li className='text-base text-textColor cursor-pointer hover:text-text-textColor duration-100 transition-all ease-in-out'>Home</li>
          <li className='text-base text-textColor cursor-pointer hover:text-text-textColor duration-100 transition-all ease-in-out'>Menu</li>
          <li className='text-base text-textColor cursor-pointer hover:text-text-textColor duration-100 transition-all ease-in-out'>About us</li>
          <li className='text-base text-textColor cursor-pointer hover:text-text-textColor duration-100 transition-all ease-in-out'>Services</li>
        </ul>
        <div className='relative flex items-center justify-center'>
          <MdOutlineShoppingCart className='text-textColor text-2xl ml-8 cursor-pointer'/>
          <div className='w-8 h-8 rounded-full bg-red-300 ml-8 flex  items-center justify-center cursor-pointer'>
            <p className='text-xs text-white font-semibold '>2</p>
          </div>
        </div>
      </div>


      {/* Mobile table */}
      <div className='flex md:hidden w-full h-full'></div>
    </header>
  )
}

export default Header