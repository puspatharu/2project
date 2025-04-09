import React from 'react'
import { FaEye, FaRegComment } from 'react-icons/fa'
import { IoPersonOutline } from 'react-icons/io5'
import { MdDateRange } from 'react-icons/md'

function Blog_Reuse({
  image,title
}) {
  return (
    <div className='lg:flex gap-9 justify-between'>
           <div className='py-9 flex flex-col gap-4 lg:w-fit '>
             <p className='flex flex-col'>Food,Technology,
               <span>
                 Politice,Lifestyle
               </span>
   
             </p>
             <p className='flex gap-3 items-center'><span className='text-[#777] w-28'>Mark wiens</span><span className='text-[#777]'><IoPersonOutline /></span></p>
             <p className='flex gap-3 items-center'><span className='text-[#777] w-28'>12 Dec,2017</span><span className='text-[#777]'><MdDateRange /></span></p>
             <p className='flex gap-3 items-center'><span className='text-[#777] w-28'>1.2M View</span><span className='text-[#777]'><FaEye /></span></p>
             <p className='flex gap-3 items-cente'><span className='text-[#777] w-28'>06 Comment</span><span className='text-[#777]'><FaRegComment /></span></p>
           </div>
           <div className='flex flex-col gap-7'>
             <div>
               <img src={image} alt="" />
             </div>
             <div>
               <h1 className='text-3xl font-medium'>{title}</h1>
               <p className='text-[#777] text-[16px]'>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction. </p>
             </div>
             <button className='bg-white text-[15px] font-medium px-5 py-3  transition hover:bg-[#bea278]  all ease-in-out duration-500  cursor-pointer hover:text-white w-32 '>View More</button>
           </div>
         </div>

         
  )
}

export default Blog_Reuse