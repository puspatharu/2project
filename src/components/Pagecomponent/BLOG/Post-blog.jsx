import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { FaEye, FaRegComment } from "react-icons/fa";
function Postblog() {
  return (
    <div>
    <div>
      <div>
        <h1 className='text-xl'>Food,Technology,Politice,Lifestyle</h1>
        <p className='flex gap-2 items-center'><span className='text-[#777]'>Mark wiens</span><span>< IoPersonOutline /></span></p>
        <p className='flex gap-2 items-center'><span className='text-[#777]'>12 Dec,2017</span><span><MdDateRange /></span></p>
        <p className='flex gap-2 items-center'><span className='text-[#777]'>1.2M View</span><span><FaEye /></span></p>
        <p className='flex gap-2 items-center'><span className='text-[#777]'>06 Comment</span><span><FaRegComment /></span></p>
      </div>
      
    </div>
  </div>
  )
}

export default Postblog