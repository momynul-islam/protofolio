import React from 'react'
import SectionIntro from './SectionIntro'
import Button from './Button'

function Contact() {
  return (
    <section className='my-16 md:my-32 max-w-4xl mx-auto' id='contact'>
        <SectionIntro title='Lets Design Together' description='Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium'/>
        <form className='flex flex-col md:flex-row gap-3 justify-center items-center p-3'>
            <input className='flex-1 text-xl text-[#797979] p-3 border border-[#AFAFAF] rounded-xl' type="email" name="email" placeholder='Enter Your Email'/>
            <Button text='Contact Me'/>
        </form>
    </section>
  )
}

export default Contact