import React from 'react'
import { FaFacebookF, FaTwitter, FaBehance,FaDribbble,FaRegCopyright,FaRegHeart } from "react-icons/fa6";
function Linksection() {
  return (
    <div className='h-full bg-black text-white mt-20 py-24 px-6 lg:px-17'>
    <div className='flex flex-col gap-14'>
      <div className='flex flex-col lg:flex-row gap-10'>
        <div className='flex flex-col gap-4'>
          <h1 className='font-bold text-xl'>About us</h1>
          <p>If you own an Iphone, you've probbably worked out how much fun it is to use it to watch movies-it has that </p>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='font-bold text-xl'>Newsletter</p>
          <p>Stay update with our latest</p>
          <div className='flex'>
            <input className='text-[#777] w-78 px-3 py-2 bg-white' type="text" placeholder='Email Address' />
            <div className='bg-[#d1ab7f] py-2 px-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14 16l4-4m0 0l-4-4m4 4H6" /></svg>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-[200px] gap-4'>
          <h1 className='font-bold text-xl'>Follow Us</h1>
          <p>Let us be social</p>
          <div>
            <div className='flex items-center lg:gap-6 gap-2 '>
             <FaFacebookF />
              <FaTwitter />
             <FaBehance />
            <FaDribbble />
            </div>
          </div>
        </div>
      </div>
      <div className=' items-center flex lg:flex-row'>

        copyright <span><FaRegCopyright  /></span> 2025 All rights reserved | This templete is made with  <span className='text-[#d1ab7f]'><FaRegHeart /></span> by
        <a className='text-[#d1ab7f]'>Colorlib</a>
      </div>
    </div>
  </div>
  )
}

export default Linksection