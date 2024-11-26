import React from 'react'
import ServiceCard from './ServiceCard'
import uiuxicon from '../assets/uiuxicon.png'
import webicon from '../assets/webicon.png'
import appicon from '../assets/appicon.png'
import graphicicon from '../assets/graphicicon.png'
import SectionIntro from './SectionIntro'

function Services() {
  return (
    <section className='my-16 md:my-32' id='services'>
        <SectionIntro title='Services' description='Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium'/>
        <div className='flex flex-col gap-5 md:flex-row mt-6'>
            <ServiceCard icon={uiuxicon} title='UI/UX' description='Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum'/>
            <ServiceCard icon={webicon} title='Web Design' description='Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum'/>
            <ServiceCard icon={appicon} title='App Design' description='Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum'/>
            <ServiceCard icon={graphicicon} title='Graphic Design' description='Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum'/>
        </div>
    </section>
  )
}

export default Services