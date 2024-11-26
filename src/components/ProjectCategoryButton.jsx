import React from 'react'

function ProjectCategoryButton({category, active}) {
  return (
        <button className={`${active ? 'bg-[#FD6F00] text-white' : ''} bg-[#F8F8F8] text-md px-4 py-2 rounded-xl cursor-pointer hover:bg-[#FD6F00] hover:text-white transition-colors duration-300`}>{category}</button>
  )
}

export default ProjectCategoryButton