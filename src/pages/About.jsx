import React from 'react'
import bannerImage from '../assets/banner-bg.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import GetStarted from '../components/Pagecomponent/Home/GetStarted';

import Slidepart from '../components/Pagecomponent/Home/Slidepart';
import Video from '../components/Pagecomponent/Home/Video';
import Linksection from '../components/Footer/Linksection';
import Toolbar from '../components/Navigation/Toolbar';
import BannerReuse from '../components/ui/bannerReuse';

function About() {
  return (
    <div className='flex flex-col gap-24'>
      <Toolbar />
{/* 
    <div className='relative'>
     <img src={bannerImage} className='absolute left-0 top-0 h-80 w-full object-cover object-left-top' />
     <div className='bg-[#020512] absolute opacity-40 h-80 w-full left-0 top-0'></div>
     <div className='text-white z-10 relative flex flex-col gap-3 justify-center pt-24 items-center h-80'>
      <div className='text-4xl font-bold'>About Us</div>
      <div className='flex gap-4 items-center text-xl'>
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

    <BannerReuse image={bannerImage} title='About' />
    <GetStarted />
    <Slidepart />
    <Video />
   
    </div>
  )
}

export default About