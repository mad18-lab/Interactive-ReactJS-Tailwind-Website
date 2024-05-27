import React from 'react';

const HeroSection = () => {
  return (
    <div className='text-white w-full'>
      <div className='max-w-[1280px] mt-[186px] h-[500px] mx-auto text-center flex flex-col'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
        <div className='md:text-4xl sm:text-3xl text-xl font-bold mb-4 p-2'>
            <p>Fast, flexible financing</p>
        </div>
        <p className='md:text-2xl sm:px-5 font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC & SaaS platforms.</p>
        <div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mt-6 mx-auto py-3 text-[#000300]'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
