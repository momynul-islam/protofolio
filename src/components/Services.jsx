import React from 'react'

function Services() {
  return (
    <section className='my-16 md:my-32' id='services'>
        <div>
            <h1 className='text-center font-bold text-3xl md:text-6xl'>Services</h1>
            <p className='mt-4 text-center text-md'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus <br /> in. Aliquet donec morbi convallis pretium</p>
        </div>
        <div className='flex flex-wrap justify-center items-center my-8 gap-5'>
            <button className='bg-[#F8F8F8] text-md px-4 py-2 rounded-xl cursor-pointer hover:bg-[#FD6F00] hover:text-white transition-colors duration-300'>UI/UX</button>
            <button className='bg-[#F8F8F8] text-md px-4 py-2 rounded-xl cursor-pointer hover:bg-[#FD6F00] hover:text-white transition-colors duration-300'>All</button>
            <button className='bg-[#F8F8F8] text-md px-4 py-2 rounded-xl cursor-pointer hover:bg-[#FD6F00] hover:text-white transition-colors duration-300'>Web Design</button>
            <button className='bg-[#F8F8F8] text-md px-4 py-2 rounded-xl cursor-pointer hover:bg-[#FD6F00] hover:text-white transition-colors duration-300'>App Design</button>
            <button className='bg-[#F8F8F8] text-md px-4 py-2 rounded-xl cursor-pointer hover:bg-[#FD6F00] hover:text-white transition-colors duration-300'>Graphic Design</button>
        </div>
        <div>

        </div>
    </section>
  )
}

export default Services