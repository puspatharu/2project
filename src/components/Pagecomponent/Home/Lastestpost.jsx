import React from 'react'
import b1Image from '../../../assets/b1.jpg.webp';
import b2Image from '../../../assets/b2.jpg.webp';
import b3Image from '../../../assets/b3.jpg.webp';
import UserImage from '../../../assets/user.png.webp';
import { FaRegHeart,FaRegComment } from "react-icons/fa6";
function Lastestpost() {
  const lasted=[
    {
      img:b1Image,
      name:'Mark Wiens',
      userimg:UserImage
    },
    {
      img:b2Image,
      name:'Mark Wiens',
      userimg:UserImage
    },
    {
      img:b3Image,
      name:'Mark Wiens',
      userimg:UserImage

    }
  ]
  
  
  return (
    <div className='h-full flex flex-col gap-12'>
    <div className='flex flex-col gap-6 items-center text-center px-5'>
      <h1 className='text-4xl font-[700]'>Latest Posts From Our Blog</h1>
      <p className='leading-6 text-[#777] lg:w-7/12 w-full'>Do you want to share your love cheese fondue with your children?Or did you just find out that one of your fondue party guest doesn't drink alcohol.</p>
    </div>
    <div className='grid lg:grid-cols-3 lg:gap-7 gap-18 lg:px-17 px-6'>
      {
         lasted.map((val,i)=>{
return(

      <div className='flex gap-4 flex-col'>
        <div className='flex flex-col'>
          <div>
            <img src={val.img} alt="" />
          </div>
          <div className='flex gap-10 h-13 items-center shadow-[0_0.5px_0.5px_rgba(0,0,0,0.10)]'>
            <div className='flex gap-3'>
              <div>
                <img src={val.userimg} alt="" />
              </div>
              <p className='lg:text-[16px] text-[15px] text-center'>{val.name}</p>
            </div>
            <div className='flex gap-4 text-[#777]'>
              <p className='lg:text-[16px] text-[15px] text-center'>13th Dec</p>
              <div className='flex gap-1 items-center'>
                <FaRegHeart />
                <p className='lg:text-[16px] text-[15px] text-center'>15</p>
              </div>
              <div className='flex gap-1 items-center'>
                <FaRegComment />
                <p>04</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className='text-[16px] font-[600]'>STOCKING YOUR RESTAURANT KITCHEN FINDING RELIABLE SELLERS</h1>
        <p className='text-[#777] text-[14px]'>Saving money-is something we would all like to do.Whether you are struggling to manage day to day or earning a six figure salary,saving is something we all think about.</p>
      </div>
)
         })
      }
      {/* <div className='flex gap-4 flex-col'>
        <div className='flex flex-col'>
          <div>
            <img src={b2Image} alt="" />
          </div>
          <div className='flex gap-10 h-13 items-center shadow-[0_0.5px_0.5px_rgba(0,0,0,0.10)]'>
            <div className='flex lg:gap-3 gap-2'>
              <div>
                <img src={UserImage} alt="" />
              </div>
              <p className='lg:text-[16px] text-[15px] text-center'>Mark Wiens</p>
            </div>
            <div className='flex items-center lg:gap-4 gap-2 text-[#777]'>
              <p className='lg:text-[16px] text-[15px] text-center'>13th Dec</p>
              <div className='flex gap-1 items-center'>
                <FaRegHeart />
                <p className='lg:text-[16px] text-[15px] text-center'>15</p>
              </div>
              <div className='flex gap-1 items-center'>
        <FaRegComment />
                <p className='lg:text-[16px] text-[15px] text-center'>04</p>
              </div>

            </div>
          </div>
        </div>
        <h1 className='text-[16px] font-[600]'>STOCKING YOUR RESTAURANT KITCHEN FINDING RELIABLE SELLERS</h1>
        <p className='text-[#777] text-[14px]'>Saving money-is something we would all like to do.Whether you are struggling to manage day to day or earning a six figure salary,saving is something we all think about.</p>
      </div>
      <div className='flex gap-4 flex-col'>
        <div className='flex flex-col'>
          <div>
            <img src={b3Image} alt="" />
          </div>
          <div className='flex gap-10 h-13 items-center shadow-[0_0.5px_0.5px_rgba(0,0,0,0.10)]'>
            <div className='flex gap-3'>
              <div>
                <img src={UserImage} alt="" />
              </div>
              <p className='lg:text-[16px] text-[15px] text-center'>Mark Wiens</p>
            </div>
            <div className='flex gap-4 text-[#777]'>
              <p className='lg:text-[16px] text-[15px] text-center'>13th Dec</p>
              <div className='flex gap-1 items-center'>
                <FaRegHeart />
                <p className='lg:text-[16px] text-[15px] text-center'>15</p>
              </div>
              <div className='flex gap-1 items-center'>
             <FaRegComment />
                <p className='lg:text-[16px] text-[15px] text-center'>04</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className='text-[16px] font-[600]'>STOCKING YOUR RESTAURANT KITCHEN FINDING RELIABLE SELLERS</h1>
        <p className='text-[#777] text-[14px]'>Saving money-is something we would all like to do.Whether you are struggling to manage day to day or earning a six figure salary,saving is something we all think about.</p>
      </div> */}
    </div>
  </div>
  )
}

export default Lastestpost