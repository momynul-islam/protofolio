import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <header className='flex flex-col justify-between gap-5 md:flex-row md:items-center'>
        <div className='flex items-center mx-auto md:mx-0 gap-3 my-2 md:my-0'>
            <img className='w-8 md:w-16' src={logo} alt="logo" />
            <h3 className='text-2xl md:text-5xl font-montserrat'><span className='font-bold'>M</span>umair</h3>
        </div>
        <nav>
            <ul className='flex items-center justify-center gap-5 mt-1 flex-wrap text-md md:text-xl md:justify-start'>
                <li className='hover:text-[#FD6F00] transition-colors duration-300'>
                    <a href="#">Home</a>
                </li>
                <li className='hover:text-[#FD6F00] transition-colors duration-300'>
                    <a href="#about-me">About Me</a>
                </li>
                <li className='hover:text-[#FD6F00] transition-colors duration-300'>
                    <a href="#services">Services</a>
                </li>
                <li className='hover:text-[#FD6F00] transition-colors duration-300'>
                    <a href="#projects">Projects</a>
                </li>
                <li className='hover:text-[#FD6F00] transition-colors duration-300'>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li className='hover:text-[#FD6F00] transition-colors duration-300'>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <button className='p-2 bg-[#FD6F00] text-white rounded-md hover:bg-white hover:text-[#FD6F00] transition-colors duration-300 cursor-pointer'>Download CV</button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header