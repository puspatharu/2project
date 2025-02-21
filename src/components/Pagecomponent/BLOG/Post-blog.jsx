import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { FaEye, FaRegComment } from "react-icons/fa";
import feature1 from '../../../assets/feature-img1.jpg.webp'
import userImage from '../../../assets/user-info.png.webp'
import { IoSearch } from "react-icons/io5";
import { FaFacebookF, FaBehance, FaTwitter, FaGithub } from "react-icons/fa";
import pp1Image from '../../../assets/pp1.jpg.webp'
import pp2Image from '../../../assets/pp2.jpg.webp'
import pp3Image from '../../../assets/pp3.jpg.webp'
import pp4Image from '../../../assets/pp4.jpg.webp'
import { MdEmail } from "react-icons/md";
import Blog_Reuse from '../../ui/Blog_Reuse';
function Postblog() {

  const post = [
    {
      name: "Technology"
    },
    {
      name: "fashion"
    },
    {
      name: "Architecture"
    },
    {
      name: "Fashion"
    },
    {
      name: "Food"
    },
    {
      name: "Technology"
    },
    {
      name: "Lifestyle"
    },
    {
      name: "Art"
    },
    {
      name: "Advanture"
    },
    {
      name: "food"
    },
    {
      name: "Lifestyle"
    },
    {
      name: "Advanture"
    },

  ]

  const space = [
    {
      image: pp1Image,
      head: 'Space The Final Frontier',
      des: '02 Hours ago'
    },
    {
      image: pp2Image,
      head: 'Space The Final Frontier',
      des: '02 Hours ago'
    },
    {
      image: pp3Image,
      head: 'Space The Final Frontier',
      des: '02 Hours ago'
    },
    {
      image: pp4Image,
      head: 'Space The Final Frontier',
      des: '02 Hours ago'
    },

  ]

  const arr = [
    {
      name: 'Technology',
      num: 37
    },
    {
      name: 'Lifestyle',
      num: 24
    },
    {
      name: 'Fashion',
      num: 59
    },
    {
      name: 'Art',
      num: 29
    },
    {
      name: 'food',
      num: 15
    },
  ]

  return (
    <div className='bg-[#f3f4f6] h-full w-full flex px-17'>
      {/* <div className='flex justify-between gap-9 '>
        <div className='py-9 flex flex-col gap-4 w-fit  '>
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
            <img src={feature1} alt="" />
          </div>
          <div>
            <h1 className='text-3xl font-medium'>Astronomy Binoculars A Great Alternative</h1>
            <p className='text-[#777] text-[16px]'>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction. </p>
          </div>
          <button className='bg-white text-[15px] font-medium px-5 py-3  transition hover:bg-[#bea278]  all ease-in-out duration-500  cursor-pointer hover:text-white w-32 '>View More</button>
        </div>
      </div> */}
      <Blog_Reuse image={feature1} title='Astronomy Binoculars A Great Alternative' />

      <div className='border border-[#dbd6d6]  flex flex-col w-7/12 gap-8 '>

        <div className='flex items-center border-b border-[#d5cfcf] h-28 mx-7'>
          <input className='bg-[#bea278] w-70 placeholder:text-white py-2 px-8 font-medium text-[13px] rounded-4xl ' type="text" placeholder='Search Posts' />
          <div className='text-white -m-8 text-[19px]'>

            <IoSearch />
          </div>
        </div>
        <div className='flex flex-col gap-10 justify-center items-center border-b mx-4 border-[#dbd6d6]'>
          <div>
            <img src={userImage} alt="" />
          </div>
          <div className='flex flex-col gap-3  justify-center items-center'>
            <h1 className='text-xl font-medium'>Charlie Barbar</h1>
            <p className='text-[16px] text-[#777]'>Senior blog writer</p>
            <div className='flex gap-5 py-3'>
              <FaFacebookF />
              <FaTwitter />
              <FaGithub />
              <FaBehance />
            </div>
            <p className='text-[#777] px-8 pb-16'>Boot camps have its supporters andit sdetractors.Some people do not understand why you should have to spend money on boot camp when you can get.Boot camps have itssupporters andit detractors</p>
          </div>
        </div>

        <div className='flex flex-col gap-8 mx-6 pb-8 border-b border-[#dbd6d6]'>
          <h1 className='py-2 text-center text-[18px] font-bold text-white bg-[#bea278]'>Popular Posts</h1>

          {
            space.map((val, i) => {
              return (
                <div className='flex gap-2.5 items-center'>

                  <img src={val.image} alt="" />
                  <div className='flex flex-col'>
                    <h1 className='text-[18px] font-medium'>{val.head}</h1>
                    <p className='text-[#777]'>{val.des}</p>
                  </div>
                </div>
              )
            })
          }

        </div>
        <div className=' w-full h-48 border-b flex items-center justify-center  border-[#dbd6d6]'>
          <h1 className='text-2xl w-43 font-medium text-[#dbd6d6] '>300X250 PX AD GOES HERE</h1>
        </div>

        <div className='mx-6 flex flex-col gap-7 pb-8 border-b border-[#dbd6d6]'>
          <h1 className='py-2 text-center text-[18px] font-bold text-white bg-[#bea278]'>Post Catgories</h1>
          <div className='flex flex-col '>
            {
              arr.map((val, i) => {
                return (

                  <div className='text-[#777] flex justify-between border-dotted border-b hover:text-[#bea278]  border-[#dbd6d6] py-3.5'>
                    <p>{val.name}</p>
                    <p>{val.num}</p>
                  </div>
                )
              })
            }
            
          </div>
        </div>

        <div className='flex flex-col gap-6 pb-8 border-b border-[#dbd6d6] mx-6'>
          <h1 className='py-2 text-center text-[18px] font-bold text-white bg-[#bea278]'>Newsletter</h1>
          <p className='text-[#acabab]'>Here,I focus on a range of items and features that we use in life without giving them a second throught.</p>
          <div className='flex items-center'>
            <div className='text-[#b8b6b6] -mr-6'>
              <MdEmail />
            </div>
            <input className='placeholder:text-[#b8b6b6] border border-[#dbd6d6] font-medium py-1.5 pl-7' type="text" placeholder='Enter email' />
            <button className='py-1.5 px-1 -m-1.5 text-white bg-[#bea278]'>Subscribe</button>
          </div>
          <p className='text-[#acabab]'>You can unsubscribe at any time </p>
        </div>

        <div className='flex flex-col gap-6 pb-8 border-b border-[#dbd6d6] mx-4'>
          <h1 className='py-2 text-center text-[18px] font-bold text-white bg-[#bea278]'>Post Catgories</h1>

          <div className='grid grid-cols-3 gap-3 '>
            {
              post.map((val, i) => {
                return (
                  <div key={i}>
                    <div className='text-[14px] px-2 py-1.5 border border-[#dbd6d6] hover:text-white hover:bg-[#bea278] duration-300 all ease-in-out'>
                      {val.name}
                    </div>
                  </div>
                )
              })
            }
          </div>


          {/* <div className=''>
      <span className='text-[14px] px-2 py-1.5 border border-[#dbd6d6] hover:text-white hover:bg-[#bea278] duration-300 all ease-in-out'>Technology</span>
      <span className='text-[14px] px-2 py-1.5 border border-[#dbd6d6] hover:text-white hover:bg-[#bea278] duration-300 all ease-in-out'>Fashion</span>
      <span className='text-[14px] px-2 py-1.5 border border-[#dbd6d6] hover:text-white hover:bg-[#bea278] duration-300 all ease-in-out'>Architecture</span>
      <span className='text-[14px] px-2 py-1.5 border border-[#dbd6d6] hover:text-white hover:bg-[#bea278] duration-300 all ease-in-out'>Fashion</span>
      <span className='text-[14px] px-2 py-1.5 border border-[#dbd6d6] hover:text-white hover:bg-[#bea278] duration-300 all ease-in-out'>Technology</span>
      <span className='text-[14px] px-2 py-1.5 border border-[#dbd6d6] hover:text-white hover:bg-[#bea278] duration-300 all ease-in-out'>Lifestyle</span>
      <span className='text-[14px] px-2 py-1.5 border border-[#dbd6d6] hover:text-white hover:bg-[#bea278] duration-300 all ease-in-out'>Art</span>
      <span className='text-[14px] px-2 py-1.5 border border-[#dbd6d6] hover:text-white hover:bg-[#bea278] duration-300 all ease-in-out'>Advanture</span>
      <span className='text-[14px] px-2 py-1.5 border border-[#dbd6d6] hover:text-white hover:bg-[#bea278] duration-300 all ease-in-out'>Food</span>
      <span className='text-[14px] px-2 py-1.5 border border-[#dbd6d6] hover:text-white hover:bg-[#bea278] duration-300 all ease-in-out'>Lifestyle</span>
      <span className='text-[14px] px-2 py-1.5 border border-[#dbd6d6] hover:text-white hover:bg-[#bea278] duration-300 all ease-in-out'>Advanture</span>
    </div> */}
        </div>
      </div>
    </div>
  )
}

export default Postblog