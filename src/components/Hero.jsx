import React from 'react'
import myimg from '../assets/myimg.png'
import Button from './Button';
import SocialIcons from './SocialIcons';

function Hero() {
  return (
    <section className='my-16 flex flex-col-reverse justify-between md:flex-row'>
      <div className='mt-24'>
        <p className='text-xl md:text-2xl'>Hi I am <br/> <span className='text-3xl text-[#FD6F00]'>Muhammad Umair</span></p>
        <p className='text-4xl md:text-8xl font-bold'>UI & UX <br/> <span className='ml-28 md:ml-56'>Designer</span> </p>
        <p className='my-7 text-md md:text-xl'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed <br /> massa nibh lectus netus in. Aliquet donec morbi convallis <br /> pretium. Turpis tempus pharetra.</p>
        <Button text='Hire Me'/>
      </div>
      <div className='relative'>
        <img className='w-[530px] mx-auto' src={myimg} alt="my image" />
        <div className='h-20 w-96 bg-[#FD6F0099] absolute right-[50%] translate-x-[50%] top-10 md:top-20'></div>
        <SocialIcons />
      </div>
    </section>
  )
}

export default Hero