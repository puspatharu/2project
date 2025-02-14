import React from 'react'
import ReviewImage from '../../../assets/review-bg.jpg';
import { FaStar } from "react-icons/fa6";
import logoImage from '../../../assets/r1.png.webp'
function Slidepart() {
  return (
    <div className='relative h-lvh'>
    <img src={ReviewImage} className='h-full w-full absolute top-0 object-cover ' />
        <div className='bg-[#060a19] absolute opacity-50 h-full w-full left-0 top-0'></div>
        <div className='py-24 relative z-10 text-white flex flex-col gap-16'>
          <div className=' flex flex-col justify-center text-center '>
            <h1 className='text-4xl font-bold lg:leading-18 leading-11'>Enjoy our Client's Review</h1>
            <p className='lg:leading:11 leading-14'>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className='grid lg:grid-cols-2 gap-6 lg:px-16 px-6'>

            <div className=' flex flex-col gap-5'>
              <div>
                <img src={logoImage} alt="" />
              </div>
              <div className='flex gap-9 items-center'>
                <h1 className='text-xl font-bold'>Fannie Rowe</h1>
                <div className='flex'>
                <div className='text-[#f3bb44] flex'>
                <FaStar />
                <FaStar />
                <FaStar />
                  </div>
                  <div className='flex'>
                <FaStar />
                <FaStar />
                  </div>
                </div>
              </div>
              <p className='font-[500px] text-[17px]'>Accessories Here you can find the best computer accessory for you laptop,monitor,printer,scanner,speaker.Here you can find the best computer accory for your laptop,monitor,printer,scanner,speaker.</p>
            </div>
            <div className=' lg:flex hidden flex-col gap-5'>
              <div>
                <img src={logoImage}alt="" />
              </div>
              <div className='flex gap-9 items-center'>
                <h1 className='text-xl font-bold'>Fannie Rowe</h1>
                <div className='flex'>
                  <div className='text-[#f3bb44] flex'>
                <FaStar />
                <FaStar />
                <FaStar />
                  </div>
                  <div className='flex'>
                <FaStar />
                <FaStar />
                  </div>
                </div>
              </div>
              <p className='font-[600px] text-[18px]'>Accessories Here you can find the best computer accessory for you laptop,monitor,printer,scanner,speaker.Here you can find the best computer accory for your laptop, monitor, printer ,scanner ,speaker.</p>
            </div>
          </div>
          <div className='flex justify-center gap-2'>
            <div className='bg-[#c8ca8d] opacity-76 h-3 w-3'>
              <span></span>
            </div>
            <div className='bg-[#c8ca8d] opacity-76 h-3 w-3'>
              <span></span>
            </div>
            <div className='bg-[#c8ca8d] opacity-76 h-3 w-3'>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Slidepart