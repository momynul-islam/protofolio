import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import SocialIcons from './SocialIcons'

function Footer() {
  return (
    <footer className='bg-[#F8F8F8] pt-16'>
      <div className='flex flex-col items-center my-8'>
        <Logo />
        <div className='mt-8'>
          <Navigation showDownloadCVButton={false}/>
        </div>
        <div>
          <SocialIcons />
        </div>
      </div>
      <div className='bg-[#545454] p-6'>
        <p className='text-xl text-center text-white'>&copy; 2023 <span className='text-[#FD6F00]'>Mumair</span> All Rights Reserved , Inc.</p>
      </div>
    </footer>
  )
}

export default Footer