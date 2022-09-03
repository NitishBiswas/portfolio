import React from 'react'
import {AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
      <div className="header_socials">
          <a href="https://www.facebook.com/profile.php?id=100009017233862" target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
          <a href="https://github.com/NitishBiswas" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
          <a href="https://www.linkedin.com/in/nitish-biswas-9298841b6/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
    </div>
  )
}

export default HeaderSocials
