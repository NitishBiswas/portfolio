import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='services'>
          <div className="services_head">
            <h3>Web Development</h3>
          </div>
          <ul className="services_list">
            <li>
              <BiCheck className="services_list-icon" />
              <p>Progressive web apps</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Single page applications</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Cross-platform and hybrid apps</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Custom web apps</p>
            </li>
          </ul>
        </article>

        <article className='services'>
          <div className="services_head">
            <h3>Mobile App Development</h3>
          </div>
          <ul className="services_list">
            <li>
              <BiCheck className="services_list-icon" />
              <p>Custom iOS and Android apps development</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Native and cross-platform solutions</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Second platform app development</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Automated QA and testing</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Power management, notification and geofencing</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Maintenance and post-warranty support</p>
            </li>
          </ul>
        </article>

        <article className='services'>
          <div className="services_head">
            <h3>Web Design</h3>
          </div>
          <ul className="services_list">
            <li>
              <BiCheck className="services_list-icon" />
              <p>Website Development & Design from scratch</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Responsive websites with HTML, CSS and JavaScript</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Scalable, fast-loading, and highly interactive single page application</p>
            </li>
            <li>
              <BiCheck className="services_list-icon" />
              <p>Create custom, scalable, and safe applications</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
