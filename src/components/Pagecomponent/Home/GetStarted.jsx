import React from 'react'
import getStartedImage from '../../../assets/about-img.png.webp'
function GetStarted() {
  return (
    <div className='flex items-center ml-auto gap-3 w-11/12  h-full '>
      <div className=' w-full flex flex-col gap-7'>
        <div className='text-[#dcb487] text-[15px] font-[500]'>BRAND NEW APP TO BLOW YOUR MIND</div>
        <h1 className='font-bold text-4xl'>We've baked every item from the core of our heart to serve you</h1>
        <p className='text-[#504e4e]'>We are here to listen from you deliver exellence by any means</p>
        <p className='text-[#777]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quis incidunt porro consequatur animi expedita ea ete accusamus inventore, voluptas qui? Est, unde numquam laudantium, voluptate necessitatibus itaque praesentium non iusto dicta, culpaa sint.Lorem ipsum dor sit, amet consectetur adi
          necessitatibus itaque praesentium non iusto dictaas, culpaaaas sint.Lorem ipsum dor sit, amet consectetur adi
        </p>
        <button className='bg-[#dcb487] text-[16px] font-medium px-5 text-white py-2.5 my-5 transition duration-300 all ease-in-out hover:bg-transparent hover:border hover:text-[#d1ab7f] w-44 '>Get Started Now</button>
      </div>
      <div>
        <img className='w-82 hidden lg:flex' src={getStartedImage} alt="" />
      </div>
    </div>
  )
}

export default GetStarted