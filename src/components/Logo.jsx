import React from 'react'
import logo from '../assets/logo.png'

function Logo() {
  return (
    <div className='flex items-center mx-auto md:mx-0 gap-3 my-2 md:my-0'>
        <img className='w-8 md:w-16' src={logo} alt="logo" />
        <h3 className='text-2xl md:text-5xl font-montserrat'><span className='font-bold'>M</span>umair</h3>
    </div>
  )
}

export default Logo