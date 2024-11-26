import React from 'react'
import ProjectCategoryButton from './ProjectCategoryButton'
import SectionIntro from './SectionIntro'
import ProjectCard from './ProjectCard'
import aircalling1 from '../assets/aircalling1.png'
import aircalling2 from '../assets/aircalling2.png'
import buisness1 from '../assets/buisness1.png'
import buisness2 from '../assets/buisness2.png'
import ecom1 from '../assets/ecom1.png'
import ecom2 from '../assets/ecom2.png'


function Projects() {
  return (
    <section className='my-16 md:my-32' id='projects'>
        <SectionIntro title='My Projects' description='Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus'/>
        <div className='flex flex-wrap justify-center items-center my-8 gap-5'>
            <ProjectCategoryButton category='All'/>
            <ProjectCategoryButton category='UI/UX'/>
            <ProjectCategoryButton active={true} category='Web Design'/>
            <ProjectCategoryButton category='App Design'/>
            <ProjectCategoryButton category='Graphic Design'/>
        </div>
        <div className='flex flex-col gap-5 md:flex-row justify-center items-center'>
          <ProjectCard img1={aircalling1} img2={aircalling2} label='Web Design' title='AirCalling Landing Page Design'/>
          <ProjectCard img1={buisness1} img2={buisness2} label='Web Design' title='Business Landing Page Design'/>
          <ProjectCard img1={ecom1} img2={ecom2} label='Web Design' title='Ecom Web Page Design'/>
        </div>
    </section>
  )
}

export default Projects