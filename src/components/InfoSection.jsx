import React from 'react'

const InfoSection = () => {
  return (
    <div className='w-full bg-white pt-20 pb-24 px-4'>
        <div className='max-w-[1280px] mx-auto grid md:grid-cols-2'>
            <img src='computer.png' className='object-scale-down h-96 mx-auto pt-16' />
            <div className='mx-auto pl-4 md:pt-32'>
                <p className='text-[#00df9a] font-bold py-1 md:text-xl'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='font-bold md:text-3xl sm:text-3xl py-1'>Manage Data Analytics Centrally</h1>
                <p>Reap the benefits of our deep domain expertise & extensive industry connections for exponential growth in your career.</p>
                <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-[#000300]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default InfoSection
