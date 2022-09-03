import React from 'react'
import CTA from './CTA'
import './header.css'
import Typewriter from 'typewriter-effect';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Nitish Biswas</h1>
        <h3 className='text-light'>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              strings: [
                'Mobile App Developer',
                'Full Stack Developer',
                'Frontend Developer',
              ],
            }}
          />
        </h3>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href='#contact' className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
