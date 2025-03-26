import { assets } from '@/assets /assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50'>
        <a href=''>
            <Image src={assets.logo} alt=' ' className='w-28
            cursor-pointer mr-14'/>
        </a>
        <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#top">About Me</a></li>
            <li><a href="#top">Services</a></li>
            <li><a href="#top">My Projects</a></li>
            <li><a href="#top">Contact Me</a></li>
        </ul>
        <div>
            <a href="#contact">Contact <Image src={assets.arrow_icon} alt=" "className='W-3'/></a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
