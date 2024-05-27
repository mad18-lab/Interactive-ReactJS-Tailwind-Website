import React, { useState } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isClicked, setClicked] = useState(false);

    const handleOnClick = () => {
        setClicked(!isClicked);
    }
  return (
    <div className='text-white flex justify-between items-center h-22 max-w-[1280px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>FINANCE</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      
      <div onClick={handleOnClick} className='block md:hidden'>
        {isClicked ? <IoMdClose size={20}/> : <IoMdMenu size={20}/>}
      </div>

      <div className={isClicked ? 'fixed left-0 top-0 border-r h-full w-[60%] border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-1000%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] px-16'>FINANCE</h1>
        <ul className='uppercase p-4'>
            <li className='p-4 border-b border-b-gray-900'>Home</li>
            <li className='p-4 border-b border-b-gray-900'>Company</li>
            <li className='p-4 border-b border-b-gray-900'>Resources</li>
            <li className='p-4 border-b border-b-gray-900'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
