import { assets } from '@/assets /assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
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
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
          <li><a href="#top">Home</a></li>
          <li><a href="#top">About Me</a></li>
          <li><a href="#top">Services</a></li>
          <li><a href="#top">My Projects</a></li>
          <li><a href="#top">Contact Me</a></li>
        </ul>

        {/* === Contact Button === */}
        <div>
          <a 
            href="#contact" 
            className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>
            Contact 
            <Image 
              src={assets.arrow_icon} 
              alt=" " 
              className='w-3' 
            />
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
