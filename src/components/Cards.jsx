import React from 'react'
import { FaUser } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";

const Cards = () => {
  return (
    <div className='bg-white w-full py-[10rem] px-4'>
      <div className='max-w-[1280px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full flex flex-col items-center justify-center p-4 my-4 shadow-xl hover:scale-105 duration-300'>
            <FaUser size={60} className='mx-auto mt-[-3rem]'/>
            <h1 className='font-bold text-2xl my-2 text-center'>Single User</h1>
            <h1 className='font-bold text-4xl text-center my-2'>$149</h1>
            <ul className='text-center'>
                <li className='p-4 border-t border-t-gray-200 border-b border-b-gray-200'>500 GB Storage</li>
                <li className='p-4 border-b border-b-gray-200'>1 User Allowed</li>
                <li className='p-4 border-b border-b-gray-200'>Send up to 2GB</li>
            </ul>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#000300]'>Get Started</button>
        </div>
        <div className='w-full bg-gray-300 flex flex-col items-center justify-center p-4 md:my-0 my-8 shadow-xl hover:scale-105 duration-300'>
            <HiUsers size={60} className='mx-auto mt-[-3rem]'/>
            <h1 className='font-bold text-2xl my-2 text-center'>Partnership</h1>
            <h1 className='font-bold text-4xl text-center my-2'>$199</h1>
            <ul className='text-center'>
                <li className='p-4 border-t border-t-gray-200 border-b border-b-gray-200'>1 TB Storage</li>
                <li className='p-4 border-b border-b-gray-200'>3 Users Allowed</li>
                <li className='p-4 border-b border-b-gray-200'>Send up to 10GB</li>
            </ul>
            <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-[#000300]'>Get Started</button>
        </div>
        <div className='w-full flex flex-col items-center justify-center p-4 my-4 shadow-xl hover:scale-105 duration-300'>
            <FaUsers size={60} className='mx-auto mt-[-3rem]'/>
            <h1 className='font-bold text-2xl my-2 text-center'>Group Account</h1>
            <h1 className='font-bold text-4xl text-center my-2'>$299</h1>
            <ul className='text-center'>
                <li className='p-4 border-t border-t-gray-200 border-b border-b-gray-200'>5 TB Storage</li>
                <li className='p-4 border-b border-b-gray-200'>10 Users Allowed</li>
                <li className='p-4 border-b border-b-gray-200'>Send up to 20GB</li>
            </ul>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#000300]'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
