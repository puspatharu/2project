import React from 'react'
import BackImage from '../../../assets/banner-bg.jpg'
function Banner() {
  return (
    <div className=' relative h-lvh '>
      <img src={BackImage} className='absolute  object-cover top-0 left-0 w-full h-full' />
      <div className='bg-[#020512] absolute opacity-50 h-full w-full left-0 top-0'></div>
      <div className='text-white relative z-10 h-full pt-12 flex items-center justify-center flex-col '>
        <p className='font-medium lg:text-2xl text-[16px] border-b border-[#e1ad72] lg:w-[900px] w-[350px] text-center py-3'>WHENEVER WE BARK, BAKE WITH OUR HEART</p>
        <h1 className='border-b border-[#e1ad72] lg:font-[700] font-[400] lg:text-7xl text-3xl lg:py-3 py-1.5 lg:w-[900px] w-[350px] text-center'>Love with baking items</h1>
        <p className='text-center py-3 lg:w-[900px] w-[350px]'>Since Americans in the South began roasting pigs publicly, Barbecues have been a staple of Noth American living. For many,grilling becomes a routine mealtime activity.</p>
        <button className='bg-[#d1ab7f] transition duration-300 all ease-in-out hover:bg-transparent hover:border font-[500] px-5 py-2.5 my-6 text-[15px]'>CHECK OUR MENU</button>
      </div>
    </div>
  )
}

export default Banner