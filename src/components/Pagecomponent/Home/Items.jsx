import React from 'react'
import c1Image from '../../../assets/c1.jpg.webp'
import c2Image from '../../../assets/c2.jpg.webp'
import c3Image from '../../../assets/c3.jpg.webp'
import c4Image from '../../../assets/c4.jpg.webp'
function Items() {
const item=[
  {
    img:c1Image,
    name:'pizza',
  },
  {
    img:c2Image,
    name:'Bread',
  },
  {
    img:c3Image,
    name:'Burger',
  },
  {
    img:c4Image,
    name:'Chicken',
  }

]

  return (
    <div className='bg-[#f3f3fb] h-full py-16 flex flex-col items-center' >
    <div className='flex flex-col gap-18 justify-center text-center lg:px-17 px-8'>
      <div>
        <h1 className='font-bold lg:text-4xl text-4xl'>Category of available items</h1>
        <p className='text-[#686666] text-center lg:tracking-wide tracking-normal  leading-8'>They are grilling celebrities in their own right.</p>
      </div>
    
      <div className='grid lg:grid-cols-4 lg:gap-6 gap-14'>
{
  item.map((val,i)=>{
return(
  <div className='flex flex-col items-center gap-4'>
  <div className=''>
    <img className='rounded-[700px]' src={val.img} alt="" />
  </div>
  <div className='text-xl font-[700]'>{val.name}</div>
  <p className='text-[#a1a0a0] font-[400] items-center text-center'>inapproprite behaviour is often laughed off as "boys will be.</p>

</div>
)
  })
}

       
    
        {/* <div className='flex flex-col items-center gap-4'>
          <div className=''>
            <img className='rounded-[700px]' src={c2Image} alt="" />
          </div>
          <h1 className='text-xl font-[700]'>Bread</h1>
          <p className='text-[#a1a0a0] font-[400] text-center'>inapproprite behaviour is often laughed off as "boys will be.</p>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <div className=''>
            <img className='rounded-[700px]' src={c3Image} alt="" />
          </div>
          <h1 className='text-xl font-[700]'>Burgers</h1>
          <p className='text-[#a1a0a0] font-[400] text-center'>inapproprite behaviour is often laughed off as "boys will be.</p>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <div className=''>
            <img className='rounded-[700px]' src={c4Image} alt="" />
          </div>
          <h1 className='text-xl font-[700]'>Chicken</h1>
          <p className='text-[#a1a0a0] font-[400] text-center'>inapproprite behaviour is often laughed off as "boys will be.</p>
        </div> */}
      </div>
    
      <button className='bg-[#dcb487] text-[16px] font-medium px-5 m-auto text-white py-2.5 transition duration-300 all ease-in-out hover:bg-transparent hover:border hover:text-[#d1ab7f] w-44'>View Full Menu</button>
    </div>
    </div>
  )
}

export default Items