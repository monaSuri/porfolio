import { assets, projectsData } from '@/assets /assets'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'

const Projects = () => {
  // State to track which project is active
  const [activeProject, setActiveProject] = useState(null);
  // Reference to detect clicks outside
  const projectRefs = useRef([]);

  // Function to handle card click
  const handleCardClick = (index) => {
    setActiveProject(activeProject === index ? null : index);
    
    // Toggle body scroll when project is active
    if (activeProject === null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // Function to handle clicks outside the active project
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeProject !== null && 
        projectRefs.current[activeProject] && 
        !projectRefs.current[activeProject].contains(event.target)
      ) {
        setActiveProject(null);
        document.body.style.overflow = '';
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  return (
    <div id="projects" className='w-full px-[12%] py-10 scroll-mt-20 relative'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Projects</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
      These are some of the projects I've built to explore and strengthen my skills in web development, mobile apps, and design. 
      Each project reflects my learning journey and passion for creating user-friendly digital experiences.</p>

      {/* Overlay that appears when a project is active */}
      {activeProject !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10 transition-all duration-300"></div>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-4'>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            {/* Normal Card */}
            <div 
              ref={el => projectRefs.current[index] = el}
              onClick={() => handleCardClick(index)}
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
              style={{backgroundImage: `url(${project.bgImage})`}}
            >
              <div className='bg-white/80 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500
              group-hover:bottom-7'>
                <div className='flex-1'>
                  <h2 className='font-semibold truncate'>{project.title}</h2>
                  <p className='text-sm line-clamp-2'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center 
                shadow-[2px_2px_0_#000] group-hover:bg-blue-200 transition'>
                  <Image src={assets.send_icon} alt='' className='w-6' />
                </div>
              </div>
            </div>

            {/* Project Details Modal */}
            {activeProject === index && (
              <div 
                className="fixed inset-0 z-20 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div 
                  className="bg-white w-[90%] max-w-2xl max-h-[80vh] rounded-lg overflow-hidden shadow-2xl animate-scaleUp"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header with image background */}
                  <div 
                    className="h-40 bg-cover bg-center relative"
                    style={{backgroundImage: `url(${project.bgImage})`}}
                  >
                    <div className="absolute inset-0 bg-black/30"></div>
                    <h2 className="absolute bottom-4 left-6 text-2xl font-bold text-white font-Ovo">{project.title}</h2>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 overflow-y-auto max-h-[calc(80vh-10rem)]">
                    <div className='mb-5'>
                      <p className='text-lg font-Ovo leading-relaxed'>{project.description}</p>
                    </div>
                    
                    <div className='mb-5'>
                      <h3 className='text-lg font-semibold font-Ovo mb-2'>Technologies Used:</h3>
                      <p className='font-Ovo'>{project.technologies || 'React, TailwindCSS, JavaScript'}</p>
                    </div>
                    
                    <div className='mb-5'>
                      <h3 className='text-lg font-semibold font-Ovo mb-2'>Project Duration:</h3>
                      <p className='font-Ovo'>{project.duration || '2 months'}</p>
                    </div>
                    
                    <div className='mb-5'>
                      <h3 className='text-lg font-semibold font-Ovo mb-2'>Key Features:</h3>
                      <ul className='list-disc pl-5 font-Ovo'>
                        <li className='mb-1'>Responsive design for all device sizes</li>
                        <li className='mb-1'>Interactive user interface with smooth animations</li>
                        <li className='mb-1'>Optimized performance and loading times</li>
                      </ul>
                    </div>
                    
                    <div className='mb-5'>
                      <h3 className='text-lg font-semibold font-Ovo mb-2'>Challenges & Solutions:</h3>
                      <p className='font-Ovo'>
                        During development, I overcame challenges with {project.challenges || 'responsive layouts and state management'} 
                        by implementing {project.solutions || 'custom hooks and flexible grid systems'}.
                      </p>
                    </div>
                    
                    <div className='flex flex-wrap gap-3 justify-center mt-8'>
                      <a 
                        href={project.liveLink || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors duration-300'
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Live Project
                      </a>
                      <a 
                        href={project.githubLink || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='bg-gray-800 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-900 transition-colors duration-300'
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Projects