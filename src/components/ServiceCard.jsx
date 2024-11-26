import React from 'react'

function ServiceCard({icon, title, description}) {
  return (
    <div className='bg-[#F8F8F8] px-6 py-8 rounded-2xl hover:translate-y-2 transition-transform duration-300'>
        <img className='w-16 h-20' src={icon} alt={`${title} icon`} />
        <p className='text-3xl font-semibold my-4'>{title}</p>
        <p className='text-lg text-justify'>{description}</p>
    </div>
  )
}

export default ServiceCard