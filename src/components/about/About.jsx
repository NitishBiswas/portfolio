import React from 'react'
import './about.css'
import ABOUT_ME from '../../assets/me5.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ABOUT_ME} alt="profile" />
            </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>2+ Years Learning</small>
            </article>
            
            <article className="about_card">
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>
            
            <article className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>50+ Completed</small>
              </article>
          </div>
          <p>
            I have a passion for learning and I am currently learning to become a full stack developer. I am currently working on a project called stroke prediction using machine learning.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
