import React from 'react'
import Image from 'next/image'
import { assets, goalsData } from '@/assets /assets'


const Goals = () => {
  return (
    <div id='goals' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>What I'm looking for</h4>
      <h2 className='text-center text-5xl font-Ovo'>Internship Interests</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I’m a passionate undergraduate actively seeking internship opportunities to gain real-world experience 
        and contribute to exciting tech projects. I'm particularly interested in roles like,</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 my-8 md:my-10'>
            {goalsData.map(({icon,title, description}, index) => (
              <div key={index}
              className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-blue-200/35
              hover:-translate-y-1 duration-500'>
                <Image src={icon} alt='' className='w-8 md:w-10'/>
                <h3 className='text-base md:text-lg my-3 md:my-4 text-gray-700'>{title}</h3>
                <p className='text-xs md:text-sm text-gray-600 leading-4 md:leading-5'>{description}</p>
                {/* <a href={link} className='flex items-center gap-1 md:gap-2 text-xs md:text-sm mt-3 md:mt-5'>
                  Read more <Image src={assets.right_arrow} alt='' className='w-3 md:w-4'/>
                </a> */}
              </div>
            ))}
        </div>
    </div>
  )
}

export default Goals
