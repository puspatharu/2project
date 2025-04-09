import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import backImage from '../assets/banner-bg.jpg'
import Toolbar from '../components/Navigation/Toolbar';
import { MdError, MdOutlinePhone, MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi2";
import Linksection from '../components/Footer/Linksection';
import BannerReuse from '../components/ui/Banner_Reuse';
function Contact() {
  return (
    <div className='flex flex-col gap-28'>
      <Toolbar />
      {/* <div className='relative h-80'>
        <img src={backImage} className='absolute h-80 top-0 w-full object-cover object-left-top left-0' />
        <div className='opacity-40 absolute w-full h-80 bg-[#020512]'></div>
        <div className=' z-10 relative h-80 text-white flex flex-col gap-4 justify-center items-center pt-28 '>
          <div className='text-4xl font-bold'>
            Contact Us
          </div>
          <div className='flex gap-3 items-center'>
            <div>Home</div>
            <div className='text-[15px]'><FaArrowRightLong /></div>
            <div>Contact Us</div>
          </div>
        </div>
      </div> */}

      <BannerReuse image={backImage} title='Contact us' />

      <div className='w-11/12 h-full mx-auto flex flex-col gap-7'>

        <div className='grid lg:grid-cols-3 gap-16'>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-4 items-center'>
              <div className='text-[#9b7e1f] text-3xl'>
                <HiOutlineHome />
              </div>
              <div className='flex flex-col leading-7'>
                <h1 className='text-xl text-[#646262]'>Binghamton,New York</h1>
                <p className='text-[#a19c9c]'>4343 Hinkle Deegan Lake Road</p>
              </div>
            </div>
            <div className='flex items-center gap-4 '>
              <div className='text-[#9b7e1f] text-3xl'>
                <MdOutlinePhone />
              </div>
              <div className='flex flex-col leading-7'>
                <h1 className='text-xl text-[#646262]'>00 (958) 9865 562</h1>
                <p className='text-[#a19c9c]'>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='text-[#9b7e1f] text-3xl'>
                <MdOutlineMailOutline />
              </div>
              <div className='flex flex-col leading-7'>
                <h1 className='text-xl text-[#646262]'>support @colorlib.com</h1>
                <p className='text-[#a19c9c]'>Send us your query anytime!</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-8'>
            <div>
              <input className='text-[14px] border border-[#dcd6d6] w-86 px-8 outline-blue-300 py-2.5' type="text" placeholder='Enter you name' />
            </div>
            <div>
              <input className='text-[14px] border border-[#dcd6d6] w-86 px-8 outline-blue-300 py-2.5' type="text" placeholder='Enter email address' />
            </div>
            <div>
              <input className='text-[14px] border border-[#dcd6d6] w-86 px-8 outline-blue-300 py-2.5' type="text" placeholder='Enter subject' />
            </div>

          </div>
          <div>
            <textarea placeholder='Enter message' className=' px-3 border border-[#b1adad] outline-blue-300 w-86 lg:h-full h-45'></textarea>
          </div>
        </div>
        <div className='w-full px-10  flex justify-end'>
          <button className=' bg-[#b69149] text-[16px] text-white rounded transition duration-400 hover:text-[#b69149] px-5 py-2 hover:border hover:bg-transparent'>SEND MESSAGE</button>
        </div>

      </div>

    </div>

  )
}

export default Contact