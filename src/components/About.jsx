import React from 'react'
import myimg2 from '../assets/myimg2.png'

function About() {
  return (
    <section className='my-28 md:my-56 flex gap-8 flex-col md:flex-row justify-between' id='about-me'>
        <div className='relative'>
            <img className='w-[560px] mx-auto' src={myimg2} alt="my image" />
            <div className='h-20 w-96 bg-[#FD6F0099] absolute right-[50%] translate-x-[50%] top-10 md:top-20'></div>
        </div>
        <div>
            <h1 className='font-bold text-3xl md:text-6xl'>About Me</h1>
            <p className='text-md md:text-xl my-4'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa <br /> nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis <br /> tempus pharetra.</p>
            <div>
                <div className='my-6'>
                    <span className='text-lg md:text-2xl'>UX</span>
                    <div className='h-3 mt-2 bg-[#EDECEC] rounded-md relative'>
                        <p className='w-[90%] h-3 bg-[#FD6F00] rounded-md'></p>
                        <p className='w-8 h-8 rounded-full border-4 border-[#FD6F00] absolute right-[2.5%] md:right-[5.5%] top-[-80%]'></p>
                    </div>
                </div>
                <div className='my-6'>
                    <span className='text-lg md:text-2xl'>Website Design</span>
                    <div className='h-3 mt-2 bg-[#EDECEC] rounded-md relative'>
                        <p className='w-[80%] h-3 bg-[#FD6F00] rounded-md'></p>
                        <p className='w-8 h-8 rounded-full border-4 border-[#FD6F00] absolute right-[12.5%] md:right-[15.5%] top-[-80%]'></p>
                    </div>
                </div>
                <div className='my-6'>
                    <span className='text-lg md:text-2xl'>App Design</span>
                    <div className='h-3 mt-2 bg-[#EDECEC] rounded-md relative'>
                        <p className='w-[75%] h-3 bg-[#FD6F00] rounded-md'></p>
                        <p className='w-8 h-8 rounded-full border-4 border-[#FD6F00] absolute right-[17.5%] md:right-[20.5%] top-[-80%]'></p>
                    </div>
                </div>
                <div className='my-6'>
                    <span className='text-lg md:text-2xl'>Graphic Design</span>
                    <div className='h-3 mt-2 bg-[#EDECEC] rounded-md relative'>
                        <p className='w-[85%] h-3 bg-[#FD6F00] rounded-md'></p>
                        <p className='w-8 h-8 rounded-full border-4 border-[#FD6F00] absolute right-[7.5%] md:right-[10.5%] top-[-80%]'></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About