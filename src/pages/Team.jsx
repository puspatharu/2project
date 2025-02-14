import React from 'react'
import bannerImage from '../assets/banner-bg.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import Toolbar from '../components/Navigation/Toolbar';
import t1Image from '../assets/t1.jpg.webp'
import t2Image from '../assets/t2.jpg.webp'
import t3Image from '../assets/t3.jpg.webp'
import t4Image from '../assets/t4.jpg.webp'
import Items from '../components/Pagecomponent/Home/Items'
import Linksection from '../components/Footer/Linksection';
import GetStarted from '../components/Pagecomponent/Home/GetStarted';
import BannerReuse from '../components/ui/bannerReuse';
function Team() {
  return (
  <div className='flex flex-col gap-24'>
    <Toolbar />
      {/* <div className='relative'>
         <img src={bannerImage} className='absolute left-0 top-0 h-80 w-full object-cover object-left-top' />
         <div className='bg-[#020512] absolute opacity-40 h-80 w-full left-0 top-0'></div>
         <div className='text-white z-10 relative flex flex-col gap-3 justify-center pt-24 items-center h-80'>
          <div className='text-4xl font-bold'>Chef Team</div>
          <div className='flex gap-4 items-center'>
          <div>Home</div>
          <div className='text-[15px]'>
            <FaArrowRightLong />
          </div>
          <div>
            about us
          </div>
          </div>
         </div>
        </div> */}
<BannerReuse image={bannerImage} title='Chef team' />
        <div className='flex flex-col h-full w-full items-center gap-22'>
<div className='leading-13'>
  <h1 className=' lg:text-4xl text-2xl font-bold'>Meet Our Qualified Chefs</h1>
  <p className='text-[#777]'>Who arein extremely love with eco friendly system.</p>
</div>
<div className='grid lg:grid-cols-4 gap-5'>
<div className='flex flex-col gap-8'>
  <div>
    <img src={t1Image} alt="" />
  </div>
  <div>
    <h1 className='text-xl font-medium'>Ethel Davis</h1>
    <p className='text-[#777]'>Head chef (Cutting)</p>
  </div>
</div>
<div className='flex flex-col gap-8'>
  <div>
    <img src={t2Image} alt="" />
  </div>
  <div>
    <h1 className='text-xl font-medium'>Ethel Davis</h1>
    <p className='text-[#777]'>Head chef (Cutting)</p>
  </div>
</div>
<div className='flex flex-col gap-8'>
  <div>
    <img src={t3Image} alt="" />
  </div>
  <div>
    <h1 className='text-xl font-medium'>Ethel Davis</h1>
    <p className='text-[#777]'>Head chef (Cutting)</p>
  </div>
</div>
<div className='flex flex-col gap-8'>
  <div>
    <img src={t4Image} alt="" />
  </div>
  <div>
    <h1 className='text-xl font-medium'>Ethel Davis</h1>
    <p className='text-[#777]'>Head chef (Cutting)</p>
  </div>
</div>
</div>
        </div>
        <Items />
        <GetStarted />
       
  </div>
  )
}

export default Team