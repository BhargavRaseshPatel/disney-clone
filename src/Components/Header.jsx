import React, { useState } from 'react'
import logo from './../assets/image/logo.png'
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { RiMovie2Fill } from "react-icons/ri";
import { MdOutlineVideoLibrary } from "react-icons/md";
import HeaderItem from './HeaderItem';
import { HiDotsVertical } from "react-icons/hi";

function Header() {
  const [toggle,setToggle] = useState(false)
  const menu = [
    { name: "HOME", icon: GoHomeFill },
    { name: "SEARCH", icon: FaSearch },
    { name: "WATCH LIST", icon: IoAddOutline },
    { name: "ORIGINALS", icon: IoMdStar },
    { name: "MOVIES", icon: RiMovie2Fill },
    { name: "SERIES", icon: MdOutlineVideoLibrary }
  ]
  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex'>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover' />

        <div className='hidden md:flex gap-8'>
          {menu.map((item,index) => (
            <HeaderItem key={index} itemName={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className='flex md:hidden gap-5'>
          {menu.map((item, index) => index < 3 && (
            <HeaderItem key={index} itemName={""} Icon={item.icon} />
          ))}
          <div className='md:hidden' onClick={() => setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical}/>
            {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4'>
              {menu.map((item, index) => index > 2 && (
                <HeaderItem key={index} itemName={item.name} Icon={item.icon} />
              ))}
            </div> :null}
          </div>
        </div>
      </div>
      <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
        className='w-[40px] rounded-full' />

    </div>
  )
}

export default Header