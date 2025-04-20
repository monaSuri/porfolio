import { assets, projectsData } from '@/assets /assets'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div id="projects" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Projects</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
      These are some of the projects I’ve built to explore and strengthen my skills in web development, mobile apps, and design. 
      Each project reflects my learning journey and passion for creating user-friendly digital experiences.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-4'>
        {projectsData.map((project,index) =>(
            <div key={index} 
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{backgroundImage: `url(${project.bgImage})`}}>
                <div className='bg-white/80 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500
                group-hover:bottom-7'>
                    <div className='flex-1'>
                        <h2 className='font-semibold truncate'>{project.title}</h2>
                        <p className='text-sm line-clamp-2'>{project.description}</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justiffy-center 
                    shadow-[2px_2px_0_#000] group-hover:bg-blue-200 transition'>
                        <Image src={assets.send_icon} alt='' className='w-6' />
                    </div>
                </div>

            </div>           
        ))}
      </div>

    </div>
  )
}

export default Projects
