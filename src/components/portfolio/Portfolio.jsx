import React from 'react'
import './portfolio.css'
import BREAST_IMG from '../../assets/breast_cancer.png'
import BREAST_CANCER_MOBILE from '../../assets/breast_mobile.png'
import PASSWORD from '../../assets/password.png'
import STROKE_MOBILE from '../../assets/stroke_mobile.png'
import STROKE_WEB from '../../assets/stroke_web.png'
import STUDENT_LIST from '../../assets/student_list.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={PASSWORD} alt="Stroke Web" />
          </div>
          <h3>Store Password</h3>
          <a className='btn' href="https://github.com/NitishBiswas/React_Native_Apps/tree/main/React%20Native%20%20App/Password_Demo" target='_blank' rel="noreferrer">Github</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={STROKE_MOBILE} alt="Stroke Web" />
          </div>
          <h3>Stroke Prediction (Mobile)</h3>
          <a className='btn' href="https://github.com/NitishBiswas/Stroke-Prediction-Mobile-App/tree/main/Stroke" target='_blank' rel="noreferrer">Github</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={BREAST_CANCER_MOBILE} alt="Stroke Web" />
          </div>
          <h3>EML Breast Cancer</h3>
          <a className='btn' href="https://github.com/NitishBiswas/EML_Breast_Cancer_Mobile_App/tree/main/BreastCancerEML" target='_blank' rel="noreferrer">Github</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={STUDENT_LIST} alt="Stroke Web" />
          </div>
          <h3>Student List</h3>
          <a className='btn' href="https://github.com/NitishBiswas" target='_blank' rel="noreferrer">Github</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={STROKE_WEB} alt="Stroke Web" />
          </div>
          <h3>Stroke Prediction (Web)</h3>
          <a className='btn' href="https://stroke-prediction-web.herokuapp.com/" target='_blank' rel="noreferrer">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={BREAST_IMG} alt="Stroke Web" />
          </div>
          <h3>Breast Cancer Prediction</h3>
          <a className='btn' href="https://predict-breast-cancer-type.herokuapp.com/" target='_blank' rel="noreferrer">Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
