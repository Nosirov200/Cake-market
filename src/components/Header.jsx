import React, { useState } from 'react'
import Logo from '../images/logo.png';
import { motion } from 'framer-motion';
import Avatar from "../images/avatar.png"

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';

import { MdOutlineShoppingCart, MdAdd, MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';


const Header = () => {

  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider();

  const [{ user }, dsipatch] = useStateValue();

  const [isMenu, setisMenu] = useState(false)

  const login = async () => {
    if (!user) {
      const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
      dsipatch({
        type: actionType.SET_USER,
        user: providerData[0],
      })
      localStorage.setItem("user", JSON.stringify(providerData[0]))
    } else {
      setisMenu(!isMenu);
    }
  }

  const logOut = () => {
    setisMenu(false)
    localStorage.clear();
    dsipatch({
      type: actionType.SET_USER,
      user: null,
    })
  }
  return (
    <header className='fixed z-50 w-screen  p-3 px-4 md:p-6 md:px-16'>
      {/* Desktop table */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={"/"} className='flex items-center gap-2'>
          <img src={Logo} className='w-8 object-cover' alt="Logo" />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>

        <div className='flex items-center gap-8'>
          <motion.ul initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}

            className='flex items-center gap-8 ml-auto'>
            <li className='text-base text-textColor cursor-pointer hover:text-text-textColor duration-100 transition-all ease-in-out'>Home</li>
            <li className='text-base text-textColor cursor-pointer hover:text-text-textColor duration-100 transition-all ease-in-out'>Menu</li>
            <li className='text-base text-textColor cursor-pointer hover:text-text-textColor duration-100 transition-all ease-in-out'>About us</li>
            <li className='text-base text-textColor cursor-pointer hover:text-text-textColor duration-100 transition-all ease-in-out'>Services</li>
          </motion.ul>
          <div className='relative flex items-center justify-center'>
            <MdOutlineShoppingCart className='text-textColor text-2xl cursor-pointer' />
            <div className='absolute w-4 h-4 -top-2 -right-2 rounded-full bg-red-500 ml-8 flex  items-center justify-center cursor-pointer'>
              <p className='text-xs text-white font-semibold '>2</p>
            </div>
          </div>

          <div className='relative'>
            <motion.img whileTap={{ scale: 0.7 }} src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="UserAvatar"
              onClick={login} />
            {
              isMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className='w-40 bg-white shadow-xl rounded-lg flex flex-col absolute right-0 top-10 '>
                  {
                    user && user.email === "iqbol2000nosirov@gmail.com" && (
                      <Link to={"/createitem"}>
                        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-text-textColor text-base'>
                          New item<MdAdd />
                        </p>
                      </Link>
                    )
                  }
                  <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-text-textColor text-base'
                    onClick={logOut}>
                    LogOut<MdLogout /></p>
                </motion.div>
              )
            }
          </div>
        </div>
      </div>


      {/* Mobile table */}
      <div className='flex items-center justify-between md:hidden w-full h-full'>
        <div className='relative flex items-center justify-center'>
          <MdOutlineShoppingCart className='text-textColor text-2xl cursor-pointer' />
          <div className='absolute w-4 h-4 -top-2 -right-2 rounded-full bg-red-500 ml-8 flex  items-center justify-center cursor-pointer'>
            <p className='text-xs text-white font-semibold '>2</p>
          </div>
        </div>

        <Link to={"/"} className='flex items-center gap-2'>
          <img src={Logo} className='w-8 object-cover' alt="Logo" />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        
        <div className='relative'>
          <motion.img whileTap={{ scale: 0.7 }} src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="UserAvatar"
            onClick={login} />
          {
            isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className='w-40 bg-white shadow-xl rounded-lg flex flex-col absolute right-0 top-10 '>
                {
                  user && user.email === "iqbol2000nosirov@gmail.com" && (
                    <Link to={"/createitem"}>
                      <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-text-textColor text-base'>
                        New item<MdAdd />
                      </p>
                    </Link>
                  )}

                <ul className='flex flex-col'>
                  <li className='text-base text-textColor cursor-pointer hover:bg-slate-100 px-4 py-2 hover:text-text-textColor duration-100 transition-all ease-in-out'>Home</li>
                  <li className='text-base text-textColor cursor-pointer hover:bg-slate-100 px-4 py-2 hover:text-text-textColor duration-100 transition-all ease-in-out'>Menu</li>
                  <li className='text-base text-textColor cursor-pointer hover:bg-slate-100 px-4 py-2 hover:text-text-textColor duration-100 transition-all ease-in-out'>About us</li>
                  <li className='text-base text-textColor cursor-pointer hover:bg-slate-100 px-4 py-2 hover:text-text-textColor duration-100 transition-all ease-in-out'>Services</li>
                </ul>
                <p className='m-2 p-2 rounded-md shadow-md flex items-center gap-3 justify-center bg-gray-100 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-text-textColor text-base'
                  onClick={logOut}>
                  LogOut<MdLogout /></p>
              </motion.div>
            )
          }
        </div>
      </div>
    </header>
  )
}

export default Header