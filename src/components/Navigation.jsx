import React from 'react'
import Button from './Button'

function Navigation({showDownloadCVButton}) {
  return (
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
                {
                    showDownloadCVButton && 
                    <li>
                        <Button text='Download CV'/>
                    </li>
                }
            </ul>
        </nav>
  )
}

export default Navigation