import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'

function Header() {
  return (
    <header className='flex flex-col justify-between gap-5 md:flex-row md:items-center'>
        <Logo />
        <Navigation showDownloadCVButton={true}/>
    </header>
  )
}

export default Header