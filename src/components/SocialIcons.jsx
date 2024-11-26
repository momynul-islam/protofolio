import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
    <div className='mt-9 flex gap-5 items-center justify-center'>
          <a className='hover:translate-y-2 hover:text-[#FD6F00] transition-all duration-500' href="https://www.facebook.com" target='blank'>
            <FontAwesomeIcon icon={faFacebook} size='2x'/>
          </a>
          <a className='hover:translate-y-2 hover:text-[#FD6F00] transition-all duration-500' href="https://www.instagram.com" target='blank'>
            <FontAwesomeIcon icon={faInstagram} size='2x'/>
          </a>
          <a className='hover:translate-y-2 hover:text-[#FD6F00] transition-all duration-500' href="https://www.twitter.com" target='blank'>
            <FontAwesomeIcon icon={faTwitter} size='2x'/>
          </a>
          <a className='hover:translate-y-2 hover:text-[#FD6F00] transition-all duration-500' href="https://www.linkedin.com" target='blank'>
            <FontAwesomeIcon icon={faLinkedin} size='2x'/>
          </a>
    </div>
  )
}

export default SocialIcons