import React from 'react'
import './footer.css'
import { FaFacebookF,FaLinkedinIn } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer_logo'>NITISH BISWAS</a>
      <ul className="premalinks">
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100009017233862" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://github.com/NitishBiswas" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
          <a href="https://www.linkedin.com/in/nitish-biswas-9298841b6/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>
      <div className="footer_copyright">
        <small>
          Copyright &copy; Nitish Biswas. All rights reserved. 
        </small>
      </div>
    </footer>
  )
}

export default Footer
