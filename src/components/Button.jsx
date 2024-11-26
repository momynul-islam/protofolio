import React from 'react'

function Button({text}) {
  return (
    <button className='px-3 py-4 bg-[#FD6F00] text-white rounded-md hover:bg-white hover:text-[#FD6F00] transition-colors duration-300 cursor-pointer'>{text}</button>
  )
}

export default Button