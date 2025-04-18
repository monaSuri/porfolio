import { assets } from '@/assets /assets'
import Image from 'next/image'
import React, { useRef } from 'react'

const Navbar = () => {

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
      <Image src={assets.header_bg_color} alt='' className='w-full'/>
    
    </div>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50'>

        {/* === Social Icons (GitHub, LinkedIn, Instagram) === */}
        <div className='flex items-center gap-6'>
          {/* GitHub */}
          <a href="https://github.com/monaSuri" target="_blank" rel="noopener noreferrer">
            <div className="rounded-full bg-gray-100 p-2 shadow-md hover:bg-[#333] transition duration-300">
              <Image 
                src={assets.gitHub_icon} 
                alt="GitHub" 
                width={20} 
                height={20} 
                className="cursor-pointer"
              />
            </div>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/monalisuriarachchi" target="_blank" rel="noopener noreferrer">
            <div className="rounded-full bg-gray-100 p-2 shadow-md hover:bg-[#0077b5] transition duration-300">
              <Image 
                src={assets.linkedIn_icon} 
                alt="LinkedIn" 
                width={20} 
                height={20} 
                className="cursor-pointer"
              />
            </div>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/monalisuriarachchi" target="_blank" rel="noopener noreferrer">
            <div className="rounded-full bg-gray-100 p-2 shadow-md hover:bg-[#F97C94] transition duration-300">
              <Image 
                src={assets.Instagram_icon} 
                alt="Instagram" 
                width={20} 
                height={20} 
                className="cursor-pointer"
              />
            </div>
          </a>
        </div>

        {/* === Center Nav Links === */}
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/80 shadow-sm'>
          <li><a className='font-Ovo' href="#top">Home</a></li>
          <li><a className='font-Ovo' href="#about">About Me</a></li>
          <li><a className='font-Outfit' href="#services">Services</a></li>
          <li><a className='font-Outfit' href="#projects">My Projects</a></li>
          <li><a className='font-Outfit' href="#contact">Contact Me</a></li>
        </ul>

        {/* === Contact Button === */}
        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon} alt=" " className='w-6' />
          </button>

          <a 
            href="#contact" 
            className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Outfit'>
            Contact 
            <Image 
              src={assets.arrow_icon} 
              alt=" " 
              className='w-3' 
            />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt=" " className='w-6' />
          </button>

        </div>

       {/* === Mobile Menu === */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 
        top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

          <div className='absolute right-6 top-6' onClick={closeMenu}> 
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
          </div>

          <li className='md:hidden'>
            <a className='font-Ovo' onClick={closeMenu} href="#top">Home</a>
          </li>
          <li className='md:hidden'>
            <a className='font-Ovo' onClick={closeMenu} href="#about">About Me</a>
          </li>
          <li className='md:hidden'>
            <a className='font-Outfit' onClick={closeMenu} href="#services">Services</a>
          </li>
          <li className='md:hidden'>
            <a className='font-Outfit' onClick={closeMenu} href="#projects">My Projects</a>
          </li>
          <li className='md:hidden'>
            <a className='font-Outfit' onClick={closeMenu} href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
