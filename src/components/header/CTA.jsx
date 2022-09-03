import React from 'react'
import CV from '../../assets/Resume of Nitish Biswas.pdf'

const CTA = () => {
  return (
      <div className="cta">
          <a className='btn' href={CV} download='Resume of Nitish Biswas.pdf'>Download CV</a>
          <a className='btn btn-primary' href='#contact'>Let's Talk</a>
    </div>
  )
}

export default CTA
