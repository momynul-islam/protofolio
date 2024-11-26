import React from 'react'

function ProjectCard({img1, img2, label, title}) {
  return (
    <div className='flex flex-col p-5 hover:translate-y-2 hover:bg-[#FFEBDB] transition-all duration-300'>
        <div className='w-[445px] h-[489px] relative overflow-hidden bg-[#FFEBDB] p-5 rounded-xl'>
            <img className='w-[274px] h-[403px] absolute top-16 left-8 z-10' src={img1} alt={`${title} img1`} />
            <img className='w-[274px] h-[403px] absolute top-0 right-8 z-0' src={img2} alt={`${title} img2`} />
        </div>
        <div className='mt-4'>
            <span className='text-[#FD6F00] text-xl my-3'>{label}</span>
            <p className='font-bold text-2xl'>{title}</p>
        </div>
    </div>
  )
}

export default ProjectCard