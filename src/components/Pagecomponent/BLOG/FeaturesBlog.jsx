import React from 'react'
import cat1Image from "../../../assets/cat-widget1.jpg.webp"
import cat2Image from "../../../assets/cat-widget2.jpg.webp"
import cat3Image from "../../../assets/cat-widget3.jpg.webp"
function FeaturesBlog() {
  const myarr=[
    {
      img:cat1Image,
      name:"social life",
      para:'Enjoy your social life together'
    },
    {
      img:cat2Image,
      name:"politics",
      para:'Be a part of politics'
    },
    {
      img:cat3Image,
      name:"food",
      para:'Let the food be finished'
    }
  ]
  return (
    <div className='w-10/12  h-fit mx-auto grid lg:grid-cols-3 lg:gap-7 gap-15'>
    

    {
      myarr.map((val,i)=>{
        return(
      <div className='relative h-60  group cursor-pointer '>
        <img src={val.img} className='w-full h-full object-cover' alt="" />
     
      <div className=' text-white group-hover:bg-amber-500/80 transition-all duration-700 delay-75 ease-in-out bg-black opacity-85 m-auto flex justify-center items-center flex-col absolute top-0 left-0 right-0 bottom-0 h-4/6 w-9/12 gap-2'>
        <h1 className='uppercase font-medium'>{val.name}</h1>
        <span className='h-0.5 w-[60%] bg-white'></span>
        <p>{val.para}</p>
      </div>
      </div>
        )
      })
    }
 
    </div>
  )
}

export default FeaturesBlog