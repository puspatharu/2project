import React from 'react'
import VideoImage from "../../../assets/video-bg.jpg"
function Video() {
  return (
      <div className='h-full grid lg:grid-cols-2 gap-14'>
    <div className='flex flex-col gap-5 '>
      <p className='text-[12px] tracking-[2px] font-[500] text-[#c7965f] lg:px-17 px-7'>BRAND NEW APP TO BLOW YOUR MIND</p>
      <h1 className='text-4xl font-bold lg:px-17 px-7'>We've made a life that will change you</h1>
      <p className='font-medium lg:px-17 px-7'>We are here to listen from you deliver exellence</p>
      <p className='text-[#8d8b8b] font-medium text-[14px] lg:px-17 px-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, laudantium pariatur. Sed velit esse eius modi rem! Distinctio, minus architecto.</p>
      <button className='bg-black text-[16px] font-medium px-5 text-white py-2.5 my-5 transition duration-300 all ease-in-out hover:bg-transparent hover:border hover:text-[#d1ab7f] w-44 lg:mx-17 mx-7'>Get Started Now</button>
    </div>
    {/* <div className='bg-[url(video-bg.jpg)] bg-no-repeat h-68'></div> */}
    <div className=''>
      <img className='' src={VideoImage} alt="" />
    </div>
  </div>
  )
}

export default Video