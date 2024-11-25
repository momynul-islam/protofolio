import React from 'react'
import myimg from '../assets/myimg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Hero() {
  return (
    <section className='my-16 flex flex-col-reverse justify-between md:flex-row'>
      <div className='mt-24'>
        <p className='text-xl md:text-2xl'>Hi I am <br/> <span className='text-3xl text-[#FD6F00]'>Muhammad Umair</span></p>
        <p className='text-4xl md:text-8xl font-bold'>UI & UX <br/> <span className='ml-28 md:ml-56'>Designer</span> </p>
        <p className='mt-7 text-md md:text-xl'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed <br /> massa nibh lectus netus in. Aliquet donec morbi convallis <br /> pretium. Turpis tempus pharetra.</p>
        <button className='text-md bg-[#FD6F00] text-white px-3 py-2 rounded-md mt-5 hover:bg-white hover:text-[#FD6F00] transition-colors duration-300'>Hire Me</button>
      </div>
      <div className='relative'>
        <img className='w-[530px] mx-auto' src={myimg} alt="my image" />
        <div className='h-20 w-96 bg-[#FD6F0099] absolute right-[50%] translate-x-[50%] top-10 md:top-20'></div>
        
        <div className='mt-9 flex gap-5 items-center justify-center'>
          <a className='hover:translate-y-2 hover:text-[#FD6F00] transition-all duration-500' href="https://www.facebook.com" target='blank'>
            <FontAwesomeIcon icon={faFacebook} size='2x'/>
          </a>
          <a className='hover:translate-y-2 hover:text-[#FD6F00] transition-all duration-500' href="https://www.instagram.com" target='blank'>
            <FontAwesomeIcon icon={faInstagram} size='2x'/>
          </a>
          <a className='hover:translate-y-2 hover:text-[#FD6F00] transition-all duration-500' href="https://www.twitter.com" target='blank'>
            <FontAwesomeIcon icon={faTwitter} size='2x'/>
          </a>
          <a className='hover:translate-y-2 hover:text-[#FD6F00] transition-all duration-500' href="https://www.linkedin.com" target='blank'>
            <FontAwesomeIcon icon={faLinkedin} size='2x'/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero