import React from 'react'
import backImage from '../assets/banner-bg.jpg'
import itembacImage from '../assets/pattern-bg.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import Toolbar from '../components/Navigation/Toolbar';

import Linksection from '../components/Footer/Linksection';
import Video from '../components/Pagecomponent/Home/Video';
import BannerReuse from '../components/ui/bannerReuse';
function Menu() {
  return (
    <div className='flex flex-col gap-24'>
      <Toolbar />
      {/* <div className='relative h-80'>
        <img src={backImage} className='absolute h-80 top-0 w-full object-cover object-left-top left-0' />
        <div className='opacity-40 absolute w-full h-80 bg-[#020512]'></div>
        <div className=' z-10 relative h-80 text-white flex flex-col gap-4 justify-center items-center pt-28 '>
          <div className='text-4xl font-bold'>
            Menu List
          </div>
          <div className='flex gap-3 items-center'>
            <div>Home</div>
            <div className='[15px]'><FaArrowRightLong /></div>
            <div>Menu</div>
          </div>
        </div>
      </div> */}
<BannerReuse image={backImage} title='Menu List' />

      <div className='flex flex-col gap-24'>
        <div className='h-full relative'>
          <img src={itembacImage} className='top-0 left-0 w-full absolute h-full object-cover ' />
          <div className='opacity-5 absolute w-full h-full bg-[#020512]'></div>

          <div className='relative z-10 flex flex-col gap-18 py-20'>
            <div className='flex lg:gap-3 gap-1 font-medium justify-center w-full'>
              <button className='bg-[#dcb487] text-white lg:px-6 py:lg-1.5 px-4 py-1 text-[18px]'>Pizza</button>
              <button className='bg-white text-[18px] lg:px-6 lg:py-1.5 px-4 py-1'>Breads</button>
              <button className='bg-white lg:px-6 lg:py-1.5 px-4 py-1 text-[18px]'>Burders</button>
              <button className='bg-white lg:px-6 lg:py-1.5 px-4 py-1 text-[18px]'>Chicken</button>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='bg-white flex  lg:flex-row flex-col lg:gap-36 gap-10 w-11/12 mx-auto lg:px-10 px-3 lg:py-6 py-3 h-fit items-center rounded-2xl'>
                <div className='flex flex-col gap-4'>
                  <h className='text-[18px] font-[700] tracking-wide'>Pizza Americano</h>
                  <p className='text-[#777] tracking-wide'>Usage of the internet is becoming more common due to rapid advance.Usage of the internet is becoming more common due to rapid advance.</p>
                </div>
                <div className='text-[19px] font-bold flex gap-12'>
                  <div className='flex flex-col gap-2.5'>
                    <div>6"</div>
                    <div className='text-[#dcb487]'>$15</div>
                  </div>
                  <div className='flex flex-col gap-2.5'>
                    <div>10"</div>
                    <div className='text-[#dcb487]'>$20</div>
                  </div>
                  <div className='flex flex-col gap-2.5'>
                    <div>14"</div>
                    <div className='text-[#dcb487]'>$25</div>
                  </div>
                </div>
              </div>
              <div className='bg-white flex lg:flex-row flex-col lg:gap-36 gap-10 w-11/12 mx-auto lg:px-10 px-3 lg:py-6 py-3 h-fit items-center rounded-2xl'>
                <div className='flex flex-col gap-4'>
                  <h className='text-[18px] font-[700] tracking-wide'>Pizza Americano</h>
                  <p className='text-[#777] tracking-wide'>Usage of the internet is becoming more common due to rapid advance.Usage of the internet is becoming more common due to rapid advance.</p>
                </div>
                <div className='text-[19px] font-bold flex gap-12'>
                  <div className='flex flex-col gap-2.5'>
                    <div>6"</div>
                    <div className='text-[#dcb487]'>$15</div>
                  </div>
                  <div className='flex flex-col gap-2.5'>
                    <div>10"</div>
                    <div className='text-[#dcb487]'>$20</div>
                  </div>
                  <div className='flex flex-col gap-2.5'>
                    <div>14"</div>
                    <div className='text-[#dcb487]'>$25</div>
                  </div>
                </div>
              </div>
              <div className='bg-white flex lg:flex-row flex-col lg:gap-36 gap-10 w-11/12 mx-auto lg:px-10 px-3 lg:py-6 py-3 h-fit items-center rounded-2xl'>
                <div className='flex flex-col gap-4'>
                  <h className='text-[18px] font-[700] tracking-wide'>Pizza Americano</h>
                  <p className='text-[#777] tracking-wide'>Usage of the internet is becoming more common due to rapid advance.Usage of the internet is becoming more common due to rapid advance.</p>
                </div>
                <div className='text-[19px] font-bold flex gap-12'>
                  <div className='flex flex-col gap-2.5'>
                    <div>6"</div>
                    <div className='text-[#dcb487]'>$15</div>
                  </div>
                  <div className='flex flex-col gap-2.5'>
                    <div>10"</div>
                    <div className='text-[#dcb487]'>$20</div>
                  </div>
                  <div className='flex flex-col gap-2.5'>
                    <div>14"</div>
                    <div className='text-[#dcb487]'>$25</div>
                  </div>
                </div>
              </div>
              <div className='bg-white flex lg:flex-row flex-col lg:gap-36 gap-10 w-11/12 mx-auto lg:px-10 px-3 lg:py-6 py-3 h-fit items-center rounded-2xl'>
                <div className='flex flex-col gap-4'>
                  <h className='text-[18px] font-[700] tracking-wide'>Pizza Americano</h>
                  <p className='text-[#777] tracking-wide'>Usage of the internet is becoming more common due to rapid advance.Usage of the internet is becoming more common due to rapid advance.</p>
                </div>
                <div className='text-[19px] font-bold flex gap-12'>
                  <div className='flex flex-col gap-2.5'>
                    <div>6"</div>
                    <div className='text-[#dcb487]'>$15</div>
                  </div>
                  <div className='flex flex-col gap-2.5'>
                    <div>10"</div>
                    <div className='text-[#dcb487]'>$20</div>
                  </div>
                  <div className='flex flex-col gap-2.5'>
                    <div>14"</div>
                    <div className='text-[#dcb487]'>$25</div>
                  </div>
                </div>
              </div>
              <div className='bg-white flex lg:flex-row flex-col lg:gap-36 gap-10 w-11/12 mx-auto lg:px-10 px-3 lg:py-6 py-3 h-fit items-center rounded-2xl'>
                <div className='flex flex-col gap-4'>
                  <h className='text-[18px] font-[700] tracking-wide'>Pizza Americano</h>
                  <p className='text-[#777] tracking-wide'>Usage of the internet is becoming more common due to rapid advance.Usage of the internet is becoming more common due to rapid advance.</p>
                </div>
                <div className='text-[19px] font-bold flex gap-12'>
                  <div className='flex flex-col gap-2.5'>
                    <div>6"</div>
                    <div className='text-[#dcb487]'>$15</div>
                  </div>
                  <div className='flex flex-col gap-2.5'>
                    <div>10"</div>
                    <div className='text-[#dcb487]'>$20</div>
                  </div>
                  <div className='flex flex-col gap-2.5'>
                    <div>14"</div>
                    <div className='text-[#dcb487]'>$25</div>
                  </div>
                </div>
              </div>
              <div className='bg-white flex lg:flex-row flex-col lg:gap-36 gap-10 w-11/12 mx-auto lg:px-10 px-3 lg:py-6 py-3 h-fit items-center rounded-2xl'>
                <div className='flex flex-col gap-4'>
                  <h className='text-[18px] font-[700] tracking-wide'>Pizza Americano</h>
                  <p className='text-[#777] tracking-wide'>Usage of the internet is becoming more common due to rapid advance.Usage of the internet is becoming more common due to rapid advance.</p>
                </div>
                <div className='text-[19px] font-bold flex gap-12'>
                  <div className='flex flex-col gap-2.5'>
                    <div>6"</div>
                    <div className='text-[#dcb487]'>$15</div>
                  </div>
                  <div className='flex flex-col gap-2.5'>
                    <div>10"</div>
                    <div className='text-[#dcb487]'>$20</div>
                  </div>
                  <div className='flex flex-col gap-2.5'>
                    <div>14"</div>
                    <div className='text-[#dcb487]'>$25</div>
                  </div>
                </div>
              </div>
              <div className='bg-white flex lg:flex-row flex-col lg:gap-36 gap-10 w-11/12 mx-auto lg:px-10 px-3 lg:py-6 py-3 h-fit items-center rounded-2xl'>
                <div className='flex flex-col gap-4'>
                  <h className='text-[18px] font-[700] tracking-wide'>Pizza Americano</h>
                  <p className='text-[#777] tracking-wide'>Usage of the internet is becoming more common due to rapid advance.Usage of the internet is becoming more common due to rapid advance.</p>
                </div>
                <div className='text-[19px] font-bold flex gap-12'>
                  <div className='flex flex-col gap-2.5'>
                    <div>6"</div>
                    <div className='text-[#dcb487]'>$15</div>
                  </div>
                  <div className='flex flex-col gap-2.5'>
                    <div>10"</div>
                    <div className='text-[#dcb487]'>$20</div>
                  </div>
                  <div className='flex flex-col gap-2.5'>
                    <div>14"</div>
                    <div className='text-[#dcb487]'>$25</div>
                  </div>
                </div>
              </div>
              <div className='bg-white flex lg:flex-row flex-col lg:gap-36 gap-10 w-11/12 mx-auto lg:px-10 px-3 lg:py-6 py-3 h-fit items-center rounded-2xl'>
                <div className='flex flex-col gap-4'>
                  <h className='text-[18px] font-[700] tracking-wide'>Pizza Americano</h>
                  <p className='text-[#777] tracking-wide'>Usage of the internet is becoming more common due to rapid advance.Usage of the internet is becoming more common due to rapid advance.</p>
                </div>
                <div className='text-[19px] font-bold flex gap-12'>
                  <div className='flex flex-col gap-2.5'>
                    <div>6"</div>
                    <div className='text-[#dcb487]'>$15</div>
                  </div>
                  <div className='flex flex-col gap-2.5'>
                    <div>10"</div>
                    <div className='text-[#dcb487]'>$20</div>
                  </div>
                  <div className='flex flex-col gap-2.5'>
                    <div>14"</div>
                    <div className='text-[#dcb487]'>$25</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
       <Video />
     
    </div>
  )
}

export default Menu