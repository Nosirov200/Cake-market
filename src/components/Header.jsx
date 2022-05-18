import React from 'react'
import Logo from '../images/logo.png';
import { motion } from 'framer-motion';
import Avatar from "../images/avatar.png"
import { MdOutlineShoppingCart } from "react-icons/md";


const Header = () => {
  return (
    <header className='fixed z-50 w-screen  p-4 px-16'>
      {/* Desktop table */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img src={Logo} className='w-8 object-cover' alt="Logo" />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </div>

        <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-8 ml-autox'>
            <li className='text-base text-textColor cursor-pointer hover:text-text-textColor duration-100 transition-all ease-in-out'>Home</li>
            <li className='text-base text-textColor cursor-pointer hover:text-text-textColor duration-100 transition-all ease-in-out'>Menu</li>
            <li className='text-base text-textColor cursor-pointer hover:text-text-textColor duration-100 transition-all ease-in-out'>About us</li>
            <li className='text-base text-textColor cursor-pointer hover:text-text-textColor duration-100 transition-all ease-in-out'>Services</li>
          </ul>
          <div className='relative flex items-center justify-center'>
            <MdOutlineShoppingCart className='text-textColor text-2xl cursor-pointer' />
            <div className='absolute w-4 h-4 -top-2 -right-2 rounded-full bg-red-500 ml-8 flex  items-center justify-center cursor-pointer'>
              <p className='text-xs text-white font-semibold '>2</p>
            </div>
          </div>

          <motion.img src={Avatar} className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer " alt="UserAvatar" />
        </div>
      </div>


      {/* Mobile table */}
      <div className='flex md:hidden w-full h-full'></div>
    </header>
  )
}

export default Header