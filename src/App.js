import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { MainContainer, CreateContainer, Header } from "./components";

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-auto flex flex-col bg-lime-100'>
        <Header />

        <main className='mt-14 md:mt-20 px-4 ma:px-16  py-4 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/createItem' element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App