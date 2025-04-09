import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import backImage from '../assets/banner-bg.jpg'
import Toolbar from '../components/Navigation/Toolbar';
import BannerReuse from '../components/ui/Banner_Reuse';

function Elements() {
  const item=['Default','primary','success','Info','Warning','Danger','Link','Disable']
  return (
    <div className='flex flex-col gap-24'>
    < Toolbar />
    {/* <div className='relative h-80'>
           <img src={backImage} className='absolute h-80 top-0 w-full object-cover object-left-top left-0' />
           <div className='opacity-40 absolute w-full h-80 bg-[#020512]'></div>
           <div className=' z-10 relative h-80 text-white flex flex-col gap-4 justify-center items-center pt-28 '>
             <div className='text-4xl font-bold'>
               Elements
             </div>
             <div className='flex gap-3 items-center'>
               <div>Home</div>
               <div className='[15px]'><FaArrowRightLong /></div>
               <div>Menu</div>
             </div>
           </div>
         </div> */}
         <BannerReuse image={backImage} title='Elements' />

         <div className='flex flex-col gap-8 w-11/12 mx-auto'>
          <h1 className='text-3xl font-bold'>Text Sample</h1>
          <p className='text-[#777]'>Every avid independent filmmaker has <span className='text-[#cba227]'>Bold</span> about making that Italic interest documentary,or short film to show off their creative prowess.Many have great ideas and want to 'wow' the <sup className='text-[#cba227]'>Superscript</sup> scene,or video renters with their big project.But once you have the <sub className='text-[#cba227]'>subscript</sub> "in the can" (no easy feat),how do you move from a <span className='text-[#cba227]'>Strike</span> markedhand-written title inside a secondhand CD case,to a pile of cardboard boxes full of shiny new , retail-ready DVDs,<span className='text-[#cba227] underline'>underline</span> with UPC barcodes and polywrap sitting on your doorstep? You need to create eye-popping artwork and have your project replicated.Using a reputable full service DVD Replicate company like pacificDics,Inc.to partner with is certainly a helpful option to ensure a professional end result,but to help with your DVD replication project,here are 4 easy steps to follow for good DVD replication result:</p>
         </div>
         <div className='h-full flex flex-col gap-13'>
<h1 className='text-3xl w-11/12  mx-auto font-medium'>Sample Buttons</h1>
<div className='flex flex-col gap-6 w-11/12 mx-auto'>
  <div className='flex gap-4'>
 <a className='bg-[#f9f9ff] text-[13px] font-medium px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer'>Default</a>
 <a className='bg-[#bea278] text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer hover:text-[#bea278] border'>Primary</a>
 <a className='bg-[#62bfd4] text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500 hover:text-[#62bfd4] border cursor-pointer'>Success</a>
 <a className='bg-[#3579c2] text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent transition all ease-in-out hover:text-[#3579c2] border duration-500  cursor-pointer'>Info</a>
 <a className='bg-[#eeea1d] text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent hover:text-[#eeea1d] border transition all ease-in-out duration-500  cursor-pointer'>Warning</a>
 <a className='bg-[#d20b0b] text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent hover:text-[#d20b0b] transition all ease-in-out duration-500  cursor-pointer border'>Danger</a>
 <a className='bg-[#f9f9ff] text-[13px] font-medium text-black underline px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer'>Link</a>
 <a className='bg-[#f9f9ff] text-[13px] font-medium text-[#3579c2] px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer'>Disable</a>
  </div>
  <div className='flex gap-4'>
 <a className='bg-white text-[13px] font-medium px-7 py-2.5 text-[#3579c2] hover:bg-transparent transition all ease-in-out duration-500  hover:text-black cursor-pointer'>Default</a>
 <a className='hover:bg-[#bea278] text-[13px] font-medium hover:text-white px-7 py-2.5 bg-transparent transition all ease-in-out duration-500  cursor-pointer text-[#bea278] border'>Primary</a>
 <a className='hover:bg-[#62bfd4] text-[13px] font-medium hover:text-white px-7 py-2.5 bg-transparent transition all ease-in-out duration-500 text-[#62bfd4] border cursor-pointer'>Success</a>
 <a className='hover:bg-[#3579c2] text-[13px] font-medium hover:text-white px-7 py-2.5 bg-transparent transition all ease-in-out text-[#3579c2] border duration-500  cursor-pointer'>Info</a>
 <a className='hover:bg-[#eeea1d] text-[13px] font-medium hover:text-white px-7 py-2.5 bg-transparent text-[#eeea1d] border transition all ease-in-out duration-500  cursor-pointer'>Warning</a>
 <a className='hover:bg-[#d20b0b] text-[13px] font-medium hover:text-white px-7 py-2.5 bg-transparent text-[#d20b0b] transition all ease-in-out duration-500  cursor-pointer border'>Danger</a>
 <a className='bg-[#f9f9ff] text-[13px] font-medium text-black underline px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer'>Link</a>
 <a className='bg-[#f9f9ff] text-[13px] font-medium text-[#3579c2] px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer'>Disable</a>
  </div>
</div>
<div className='flex flex-col gap-6 w-11/12 mx-auto'>
  <div className='flex gap-4'>
 <a className='bg-[#f9f9ff] rounded text-[13px] font-medium px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer'>Default</a>
 <a className='bg-[#bea278] rounded text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer hover:text-[#bea278] border'>Primary</a>
 <a className='bg-[#62bfd4] rounded  text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500 hover:text-[#62bfd4] border cursor-pointer'>Success</a>
 <a className='bg-[#3579c2] rounded  text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent transition all ease-in-out hover:text-[#3579c2] border duration-500  cursor-pointer'>Info</a>
 <a className='bg-[#eeea1d] rounded  text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent hover:text-[#eeea1d] border transition all ease-in-out duration-500  cursor-pointer'>Warning</a>
 <a className='bg-[#d20b0b] rounded  text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent hover:text-[#d20b0b] transition all ease-in-out duration-500  cursor-pointer border'>Danger</a>
 <a className='bg-[#f9f9ff] rounded  text-[13px] font-medium text-black underline px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer'>Link</a>
 <a className='bg-[#f9f9ff] rounded  text-[13px] font-medium text-[#3579c2] px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer'>Disable</a>
  </div>
  <div className='flex gap-4'>
 <a className='bg-white rounded  text-[13px] font-medium px-7 py-2.5 text-[#3579c2] hover:bg-transparent transition all ease-in-out duration-500  hover:text-black cursor-pointer'>Default</a>
 <a className='hover:bg-[#bea278] text-[13px] rounded  font-medium hover:text-white px-7 py-2.5 bg-transparent transition all ease-in-out duration-500  cursor-pointer text-[#bea278] border'>Primary</a>
 <a className='hover:bg-[#62bfd4] text-[13px] rounded  font-medium hover:text-white px-7 py-2.5 bg-transparent transition all ease-in-out duration-500 text-[#62bfd4] border cursor-pointer'>Success</a>
 <a className='hover:bg-[#3579c2] text-[13px] rounded  font-medium hover:text-white px-7 py-2.5 bg-transparent transition all ease-in-out text-[#3579c2] border duration-500  cursor-pointer'>Info</a>
 <a className='hover:bg-[#eeea1d] text-[13px] rounded  font-medium hover:text-white px-7 py-2.5 bg-transparent text-[#eeea1d] border transition all ease-in-out duration-500  cursor-pointer'>Warning</a>
 <a className='hover:bg-[#d20b0b] text-[13px] rounded  font-medium hover:text-white px-7 py-2.5 bg-transparent text-[#d20b0b] transition all ease-in-out duration-500  cursor-pointer border'>Danger</a>
 <a className='bg-[#f9f9ff] text-[13px] font-medium rounded  text-black underline px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer'>Link</a>
 <a className='bg-[#f9f9ff] text-[13px] font-medium rounded  text-[#3579c2] px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer'>Disable</a>
  </div>
</div>
<div className='flex flex-col gap-6 w-11/12 mx-auto'>
  <div className='flex gap-4'>
 <a className='bg-[#f9f9ff] rounded-4xl text-[13px] font-medium px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer'>Default</a>
 <a className='bg-[#bea278] rounded-4xl text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer hover:text-[#bea278] border'>Primary</a>
 <a className='bg-[#62bfd4] rounded-4xl  text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500 hover:text-[#62bfd4] border cursor-pointer'>Success</a>
 <a className='bg-[#3579c2] rounded-4xl  text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent transition all ease-in-out hover:text-[#3579c2] border duration-500  cursor-pointer'>Info</a>
 <a className='bg-[#eeea1d] rounded-4xl  text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent hover:text-[#eeea1d] border transition all ease-in-out duration-500  cursor-pointer'>Warning</a>
 <a className='bg-[#d20b0b] rounded-4xl  text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent hover:text-[#d20b0b] transition all ease-in-out duration-500  cursor-pointer border'>Danger</a>
 <a className='bg-[#f9f9ff] rounded-4xl  text-[13px] font-medium text-black underline px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer'>Link</a>
 <a className='bg-[#f9f9ff] rounded-4xl  text-[13px] font-medium text-[#3579c2] px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer'>Disable</a>
  </div>
  <div className='flex gap-4'>
 <a className='bg-white rounded-4xl  text-[13px] font-medium px-7 py-2.5 text-[#3579c2] hover:bg-transparent transition all ease-in-out duration-500  hover:text-black cursor-pointer'>Default</a>
 <a className='hover:bg-[#bea278] text-[13px] rounded-4xl  font-medium hover:text-white px-7 py-2.5 bg-transparent transition all ease-in-out duration-500  cursor-pointer text-[#bea278] border'>Primary</a>
 <a className='hover:bg-[#62bfd4] text-[13px] rounded-4xl  font-medium hover:text-white px-7 py-2.5 bg-transparent transition all ease-in-out duration-500 text-[#62bfd4] border cursor-pointer'>Success</a>
 <a className='hover:bg-[#3579c2] text-[13px] rounded-4xl  font-medium hover:text-white px-7 py-2.5 bg-transparent transition all ease-in-out text-[#3579c2] border duration-500  cursor-pointer'>Info</a>
 <a className='hover:bg-[#eeea1d] text-[13px] rounded-4xl  font-medium hover:text-white px-7 py-2.5 bg-transparent text-[#eeea1d] border transition all ease-in-out duration-500  cursor-pointer'>Warning</a>
 <a className='hover:bg-[#d20b0b] text-[13px] rounded-4xl  font-medium hover:text-white px-7 py-2.5 bg-transparent text-[#d20b0b] transition all ease-in-out duration-500  cursor-pointer border'>Danger</a>
 <a className='bg-[#f9f9ff] text-[13px] font-medium rounded-4xl text-black underline px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer'>Link</a>
 <a className='bg-[#f9f9ff] text-[13px] font-medium rounded-4xl  text-[#3579c2] px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer'>Disable</a>
  </div>
</div>
<div className='flex flex-col gap-6 w-11/12 mx-auto'>
  <div className='flex gap-4'>
 <a className='bg-[#f9f9ff] rounded-4xl text-[13px] font-medium px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer flex items-center gap-2 '><span >Default</span> <span className='text-[10px]'><FaArrowRightLong /></span></a>
 <a className='bg-[#bea278] rounded-4xl text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer hover:text-[#bea278] border flex items-center gap-2'><span >Primary</span> <span className='text-[10px]'><FaArrowRightLong /></span></a>
 <a className='bg-[#62bfd4] rounded-4xl  text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent transition all ease-in-out duration-500 hover:text-[#62bfd4] border cursor-pointer flex items-center gap-2'><span >Success</span> <span className='text-[10px]'><FaArrowRightLong /></span></a>
 <a className='bg-[#3579c2] rounded-4xl  text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent transition all ease-in-out hover:text-[#3579c2] border duration-500  cursor-pointer flex items-center gap-2'><span >Info</span> <span className='text-[10px]'><FaArrowRightLong /></span></a>
 <a className='bg-[#eeea1d] rounded-4xl  text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent hover:text-[#eeea1d] border transition all ease-in-out duration-500  cursor-pointer flex items-center gap-2'><span >Warning</span> <span className='text-[10px]'><FaArrowRightLong /></span></a>
 <a className='bg-[#d20b0b] rounded-4xl  text-[13px] font-medium text-white px-7 py-2.5 hover:bg-transparent hover:text-[#d20b0b] transition all ease-in-out duration-500  cursor-pointer border flex items-center gap-2'><span >Danger</span> <span className='text-[10px]'><FaArrowRightLong /></span></a>
  </div>
  <div className='flex gap-4'>
 <a className='bg-white rounded-4xl  text-[13px] font-medium px-7 py-2.5 text-[#3579c2] hover:bg-transparent transition all ease-in-out duration-500  hover:text-black cursor-pointer flex items-center gap-2'><span >Default</span> <span className='text-[10px]'><FaArrowRightLong /></span></a>
 <a className='hover:bg-[#bea278] text-[13px] rounded-4xl  font-medium hover:text-white px-7 py-2.5 bg-transparent transition all ease-in-out duration-500  cursor-pointer text-[#bea278] border flex items-center gap-2'><span >Primary</span> <span className='text-[10px]'><FaArrowRightLong /></span></a>
 <a className='hover:bg-[#62bfd4] text-[13px] rounded-4xl  font-medium hover:text-white px-7 py-2.5 bg-transparent transition all ease-in-out duration-500 text-[#62bfd4] border cursor-pointer flex items-center gap-2'><span >Success</span> <span className='text-[10px]'><FaArrowRightLong /></span></a>
 <a className='hover:bg-[#3579c2] text-[13px] rounded-4xl  font-medium hover:text-white px-7 py-2.5 bg-transparent transition all ease-in-out text-[#3579c2] border duration-500  cursor-pointer flex items-center gap-2'><span >Info</span> <span className='text-[10px]'><FaArrowRightLong /></span></a>
 <a className='hover:bg-[#eeea1d] text-[13px] rounded-4xl  font-medium hover:text-white px-7 py-2.5 bg-transparent text-[#eeea1d] border transition all ease-in-out duration-500  cursor-pointer flex items-center gap-2'><span >Warning</span> <span className='text-[10px]'><FaArrowRightLong /></span></a>
 <a className='hover:bg-[#d20b0b] text-[13px] rounded-4xl  font-medium hover:text-white px-7 py-2.5 bg-transparent text-[#d20b0b] transition all ease-in-out duration-500  cursor-pointer border flex items-center gap-2'><span >Danger</span> <span className='text-[10px]'><FaArrowRightLong /></span></a>

  </div>
</div>

<div className='flex flex-col w-11/12 mx-auto'>
  <div className=' '>
    <a className='bg-[#bea278] text-[13px] font-medium text-white px-4 py-2.5 mx-6  hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer hover:text-[#bea278] border'>Extra Large</a>
    <a className='hover:bg-[#62bfd4] text-[13px] font-medium px-3 py-2   hover:text-white  bg-transparent transition all ease-in-out duration-500 text-[#62bfd4] border cursor-pointer'>Large</a>
    <a className='bg-[#bea278] text-[13px] font-medium text-white px-3 py-1.5 mx-6   hover:bg-transparent transition all ease-in-out duration-500  cursor-pointer hover:text-[#bea278] border'>Default</a>
    <a className='hover:bg-[#62bfd4] text-[13px] font-medium hover:text-white px-2 py-1 bg-transparent transition all ease-in-out duration-500 text-[#62bfd4] border cursor-pointer'>Medium</a>
    <a className='bg-[#bea278] text-[13px] font-medium text-white hover:bg-transparent mx-6 px-2 py-0.5 transition all ease-in-out duration-500  cursor-pointer hover:text-[#bea278] border'>small</a>

  </div>
  {/* <div>
    afdsnfjy
  </div> */}
</div>

         </div>
         </div>
  )
}

export default Elements