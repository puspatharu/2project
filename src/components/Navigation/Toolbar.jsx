import React from 'react'
import Logo from '../../assets/logo.png.webp'
import { FaFacebookF, FaTwitter, FaBehance, FaDribbble, FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';
function Toolbar() {


  const nav = [
    {
      name: "home",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "menu",
      link: "/menu"
    },
    {
      name: "team",
      link: "/team"

    },
    {
      name: "blog",
      link: "/blog"
    },
    {
      name: "elements",
      link: "/element"
    },
    {
      name: "contact",
      link: "/contact"
    },
  ]





  return (
    <div className='fixed h-fit py-4 flex flex-col gap-4 w-full top-0 left-0 z-50'>
      <div className='hidden px-8 w-11/12 mx-auto  lg:flex h-fit z-10 l justify-between items-center  text-white '>
        <div className='flex items-center lg:gap-4 gap-2 '>
          <FaFacebookF />
          <FaTwitter />
          <FaDribbble />
          <FaBehance />
        </div>
        <div className='hidden lg:flex items-center gap-6 text-[14px] font-sans'>
          <div className='flex items-center gap-1'>
            <div><FaPhone /></div>
            <div> +953 012 3654 896</div>
          </div>
          <div className='flex items-center gap-1'>
            <div>
              <MdOutlineMail />
            </div>
            <div>support@colorlib.com</div>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center z-10 relative h-22  bg-white w-11/12 mx-auto px-8'>
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className='hidden lg:flex gap-6 uppercase font-medium text-[12px]'>
          {
            nav.map((val, i) => {
              return (
                <Link to={val.link} key={i}>
                  <div className='hover:text-[#d1ab7f]'>
                    {val.name}
                  </div>
                </Link>
              )
            })
          }
        </div>
        {/* <ul className='hidden lg:flex gap-6 font-medium text-[12px]'>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/menu">MENU</Link></li>
          <li><Link to="/team">TEAM</Link></li>
          <li><Link to="/blog">BOLG</Link></li>
          <li><Link to="/element">ELEMENTS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul> */}
      </div>
    </div>
  )
}

export default Toolbar