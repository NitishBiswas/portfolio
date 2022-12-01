import React from 'react'
import './portfolio.css'

import { GiTwirlyFlower } from 'react-icons/gi'

import BREAST_IMG from '../../assets/breast_cancer.png'
import BREAST_CANCER_MOBILE from '../../assets/breast_mobile.png'
import PASSWORD from '../../assets/password.png'
import STROKE_MOBILE from '../../assets/stroke_mobile.png'
import STROKE_WEB from '../../assets/stroke_web.png'
import STUDENT_LIST from '../../assets/student_list.png'
import EML_LUNG_CANCER from '../../assets/eml_lung_cancer.png'
import URL_DETECTION from '../../assets/URL_DETECTION.png'
import MALICIOUS_URL_DETECTION from '../../assets/Malicious URL Input Web.png'
import EXPENSE_TRACKER from '../../assets/expense-traccker.png'
import NITISH_PORTFOLIO from '../../assets/Nitish-Portfolio.png'
import CHAT_APP_MOBILE from '../../assets/chat-app2.png';
import HEART from '../../assets/heart.png';
import SHADOW from '../../assets/shadow.png';
import GITHUB from '../../assets/github.png';
import YOUTUBE from '../../assets/youtube-clone.png';
import FAKESHOP from '../../assets/fake-shop.png';
import FOODIESHUB from '../../assets/foodies-hub.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container'>
        <br />
        <br />
        <hr style={{ height: 1, backgroundColor: 'gray' }} />
        <h3 style={{ textAlign: 'center', padding: 10 }}>Mobile Applications</h3>
        <hr style={{ height: 1, backgroundColor: 'gray' }} />
        <br />
        <br />
      </div>

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
          <h3>Stroke Prediction</h3>
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
            <img src={EML_LUNG_CANCER} alt="Stroke Web" />
          </div>
          <h3>EML Lung Cancer</h3>
          <a className='btn' href="https://github.com/NitishBiswas/Lung_Cancer_Prediction" target='_blank' rel="noreferrer">Github</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={CHAT_APP_MOBILE} alt="Stroke Web" />
          </div>
          <h3>Chat App</h3>
          <a className='btn' href="https://github.com/NitishBiswas/Chat-App-Mobile" target='_blank' rel="noreferrer">Github</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={URL_DETECTION} alt="Stroke Web" />
          </div>
          <h3>Malicious URL Detection</h3>
          <a className='btn' href="https://github.com/NitishBiswas/Malicious_URL_Detection_Mobile_APP/tree/main/MaliciousURL" target='_blank' rel="noreferrer">Github</a>
        </article>
      </div>

      <div className='container'>
        <br />
        <br />
        <hr style={{ height: 1, backgroundColor: 'gray' }} />
        <h3 style={{ textAlign: 'center', padding: 10 }}>Web Applications</h3>
        <hr style={{ height: 1, backgroundColor: 'gray' }} />
        <br />
        <br />
      </div>

      <div className="container portfolio_container">

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={FOODIESHUB} alt="Stroke Web" />
          </div>
          <h3>FoodiesHub</h3>
          <a className='btn' href="https://foodieshub-app.netlify.app/" target='_blank' rel="noreferrer">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={FAKESHOP} alt="Stroke Web" />
          </div>
          <h3>FakeShop</h3>
          <a className='btn' href="https://nitishbiswas.github.io/FakeShop/" target='_blank' rel="noreferrer">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={EXPENSE_TRACKER} alt="Stroke Web" />
          </div>
          <h3>Expense Tracker</h3>
          <a className='btn' href="https://nitishbiswas.github.io/Expense_Tracker/" target='_blank' rel="noreferrer">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={YOUTUBE} alt="Stroke Web" />
          </div>
          <h3>YouTube Clone</h3>
          <a className='btn' href="https://nitishbiswas.github.io/youtube-clone/" target='_blank' rel="noreferrer">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={GITHUB} alt="Stroke Web" />
          </div>
          <h3>GitHub Users</h3>
          <a className='btn' href="https://nitishbiswas.github.io/github-users/" target='_blank' rel="noreferrer">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={SHADOW} alt="Stroke Web" />
          </div>
          <h3>Shadow Generator</h3>
          <a className='btn' href="https://nitishbiswas.github.io/shadow-generator/" target='_blank' rel="noreferrer">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={NITISH_PORTFOLIO} alt="Stroke Web" />
          </div>
          <h3>Portfolio</h3>
          <a className='btn' href="https://nitishbiswas.github.io/portfolio/" target='_blank' rel="noreferrer">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={STROKE_WEB} alt="Stroke Web" />
          </div>
          <h3>Stroke Prediction</h3>
          <a className='btn' href="https://stroke-prediction-web.herokuapp.com/" target='_blank' rel="noreferrer">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={BREAST_IMG} alt="Stroke Web" />
          </div>
          <h3>Breast Cancer Prediction</h3>
          <a className='btn' href="https://predict-breast-cancer-type.herokuapp.com/" target='_blank' rel="noreferrer">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={MALICIOUS_URL_DETECTION} alt="Stroke Web" />
          </div>
          <h3>Malicious URL Detection</h3>
          <a className='btn' href="https://nitishbiswas.github.io/Malicious_URL_Detection/" target='_blank' rel="noreferrer">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={HEART} alt="Stroke Web" />
          </div>
          <h3>Heart Disease Diagnose</h3>
          <a className='btn' href="https://nitishbiswas.github.io/heart-disease-daignose/" target='_blank' rel="noreferrer">Live Demo</a>
        </article>

      </div>

      <div className='container'>
        <br />
        <br />
        <hr style={{ height: 1, backgroundColor: 'gray' }} />
        <h3 style={{ textAlign: 'center', padding: 10 }}>Paper and Publications</h3>
        <hr style={{ height: 1, backgroundColor: 'gray' }} />
        <br />
        <br />
      </div>

      <div className="container">
        <article className="portfolio_item" style={{ width: '100%' }}>
          <h3>Journal Papers</h3>
          <h4 style={{ textAlign: 'justify' }}><GiTwirlyFlower style={{ marginRight: 25 }} color={'#20fc03'} />N. Biswas, K.M.M. Uddin, S.T. Rikta et al., A comparative analysis of machine learning classifiers for stroke prediction: A predictive analytics approach, Healthcare Analytics (2022), doi: <a style={{ display: 'inline' }} href='https://doi.org/10.1016/j.health.2022.100116' target='_blank' rel="noreferrer">https://doi.org/10.1016/j.health.2022.100116</a> (Publisher: Elsevier).</h4>
          <br />
          <h4 style={{ textAlign: 'justify' }}><GiTwirlyFlower style={{ marginRight: 25 }} color={'#20fc03'} />K.M.M. Uddin, N. Biswas, S.T. Rikta, S.K. Dey, "Machine Learning-based Diagnosis of Breast Cancer Utilizing Feature Optimization Technique", Journal: Computer Methods and Programs in Biomedicine Update (Under review).</h4>
          <br />
          <h4 style={{ textAlign: 'justify' }}><GiTwirlyFlower style={{ marginRight: 25 }} color={'#20fc03'} />K.M.M. Uddin, N. Biswas, S.T. Rikta, S.K. Dey, " Explainable Machine Learning Can Outperform Stroke Predictions and Hybrid Stroke Prediction Application: A Predictive Analytics Approach", Journal: Healthcare Analytics (Under review).</h4>
          <br />
          <h4 style={{ textAlign: 'justify' }}><GiTwirlyFlower style={{ marginRight: 25 }} color={'#20fc03'} />S.T. Rikta, K.M.M. Uddin, N. Biswas, R. Mostafiz, S.K. Dey, “XML-GBMLung: An Explainable Machine Learning based Application for the Diagnosis of Lung Cancer”, Expert Systems With Applications (Under review).</h4>
          <br />
          <h4 style={{ textAlign: 'justify' }}><GiTwirlyFlower style={{ marginRight: 25 }} color={'#20fc03'} />K.M.M. Uddin, N. Biswas, S.T. Rikta, S.K. Dey, A. Qazi, “XML-LightGBMDroid: A Self-Driven Interactive Mobile Application Utilizing Explainable Machine Learning for Breast Cancer Diagnosis”, Journal: Artificial Intelligence in Medicine (Under review).</h4>
        </article>
        <br />
        <article className="portfolio_item" style={{ width: '100%' }}>
          <h3>Conference Papers</h3>
          <h4 style={{ textAlign: 'justify' }}><GiTwirlyFlower style={{ marginRight: 25 }} color={'#20fc03'} />H. M. H. Babu, K. M. M. Uddin, R. B. Himel and N. Biswas, "Quantum Technology for Comparator Circuit," 2022 23rd International Symposium on Quality Electronic Design (ISQED), 2022, pp. 1-1, doi:  <a style={{ display: 'inline' }} target='_blank' href='https://doi.org/10.1109/ISQED54688.2022.9806275' rel="noreferrer">https://doi.org/10.1109/ISQED54688.2022.9806275</a></h4>
          <br />
          <h4 style={{ textAlign: 'justify' }}><GiTwirlyFlower style={{ marginRight: 25 }} color={'#20fc03'} />H. M. H. Babu, K. M. M. Uddin, N. Biswas and S. T. Rikta, DNA Multiplier: A Design Architecture of a Multiplier Circuit Using DNA Molecules, London, United Kingdom <a style={{ display: 'inline' }} target='_blank' href='https://publications.waset.org/abstracts/141053/pdf?fbclid=IwAR31p6111rvumFqhdRRvgAWotLXPGVEy9c765ic5a01ckkqMRYgd3V_fadc' rel="noreferrer">https://publications.waset.org/abstracts/141053/</a></h4>
          <br />

        </article>
      </div>

    </section>
  )
}

export default Portfolio
