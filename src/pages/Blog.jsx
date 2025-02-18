import React from 'react'
import blogImage from '../assets/blog-home-banner.jpg.webp'
import Toolbar from '../components/Navigation/Toolbar'


import FeaturesBlog from '../components/Pagecomponent/BLOG/FeaturesBlog';
import Postblog from '../components/Pagecomponent/BLOG/postblog';

function Blog() {

  return (
    <div className='flex flex-col gap-24'>
      <Toolbar />
      <div className='h-[720px] relative'>
        <img src={blogImage} className='absolute w-full top-0 left-0 h-[720px] object-cover' />
        <div className='bg-[#020512] opacity-40 absolute h-[720px] top-0 left-0 w-full'></div>
        <div className='relative text-white pt-37 z-10 h-[720px] flex flex-col justify-center items-center gap-6 w-6/12 mx-auto text-center'>
          <div className='text-5xl font-bold'>Dude You're Getting a Telescope</div>
          <p className='font-medium text-[14px]'>There is a moment in the life of any aspiring astronomer that it is time to buy that first</p>
          <button className='bg-white text-[15px] font-medium text-black transition duration-400 hover:text-white px-6.5 py-2.5 hover:border hover:bg-transparent'>View More</button>
        </div>
      </div>
      <FeaturesBlog />
     <Postblog />
    </div>
  )
}

export default Blog