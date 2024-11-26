import React from 'react'

function SectionIntro({title, description}) {
  return (
    <div>
        <h1 className='text-center font-bold text-3xl md:text-6xl'>{title}</h1>
        <p className='my-6 text-center text-lg'>{description}</p>
    </div>
  )
}

export default SectionIntro