import React, {useState} from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

const Nav = () => {
  const [isActive, setIsActive] = useState('#home');
  return (
    <nav>
      <a href='#home' onClick={() => setIsActive('#home')} className={isActive === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setIsActive('#about')} className={isActive === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setIsActive('#experience')} className={isActive === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href='#services' onClick={() => setIsActive('#services')} className={isActive === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href='#contact' onClick={() => setIsActive('#contact')} className={isActive === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
