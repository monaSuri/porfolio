import { assets } from '@/assets /assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>  
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p> © 2025 Monali Suriarachchi. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <div className='w-max flex items-center gap-2 mx-auto'>
              <Image src={assets.phone_icon} alt='' className='w-4.5'/>
                  +94 77 651 8052
            </div>
          </li>
          <li>
            <div className='w-max flex items-center gap-2 mx-auto'>
              <Image src={assets.mail_icon} alt='' className='w-6'/>
                monalisuriarachchi@gmail.com
            </div>
          </li>
        </ul>
      </div>
    </div>


  )
}

export default Footer
