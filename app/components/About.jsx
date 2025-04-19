import { assets, infoList } from '@/assets /assets'
import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>
            I’m a Software Engineering undergraduate with hands-on experience in both frontend and backend development. 
            I’ve worked on real-world projects like mobile apps and sustainability-focused websites. I’m also involved in university clubs, 
            where I contribute to impactful initiatives and grow through teamwork. I'm always eager to learn and build meaningful solutions.
            </p>

        </div>
      </div>
    </div>
  )
}

export default about
