import React from 'react'
import './portfolio.css'

import { GiTwirlyFlower } from 'react-icons/gi'

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
import FAKEBLOG from '../../assets/fake-blog.png';
import MOVE_INFO from '../../assets/movie-info.png';
import JUGOL from '../../assets/jugol.png';

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
            <img src={JUGOL} alt="Stroke Web" />
          </div>
          <h3>Jugol</h3>
          <a className='btn' href="https://github.com/NitishBiswas/project-showcase/blob/main/jugol-app.md" target='_blank' rel="noreferrer">Github</a>
          <div className='portfolio_item-tool'>
            <p>React Native</p>
            <p>Native Base</p>
            <p>TypeScript</p>
            <p>NodeJS</p>
            <p>MongoDB</p>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={PASSWORD} alt="Stroke Web" />
          </div>
          <h3>Store Password</h3>
          <a className='btn' href="https://github.com/NitishBiswas/React_Native_Apps/tree/main/React%20Native%20%20App/Password_Demo" target='_blank' rel="noreferrer">Github</a>
          <div className='portfolio_item-tool'>
            <p>React Native</p>
            <p>Firebase</p>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={STROKE_MOBILE} alt="Stroke Web" />
          </div>
          <h3>Stroke Prediction</h3>
          <a className='btn' href="https://github.com/NitishBiswas/Stroke-Prediction-Mobile-App/tree/main/Stroke" target='_blank' rel="noreferrer">Github</a>
          <div className='portfolio_item-tool'>
            <p>React Native</p>
            <p>Machine Learning</p>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={BREAST_CANCER_MOBILE} alt="Stroke Web" />
          </div>
          <h3>EML Breast Cancer</h3>
          <a className='btn' href="https://github.com/NitishBiswas/EML_Breast_Cancer_Mobile_App/tree/main/BreastCancerEML" target='_blank' rel="noreferrer">Github</a>
          <div className='portfolio_item-tool'>
            <p>React Native</p>
            <p>Machine Learning</p>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={STUDENT_LIST} alt="Stroke Web" />
          </div>
          <h3>Student List</h3>
          <a className='btn' href="https://github.com/NitishBiswas" target='_blank' rel="noreferrer">Github</a>
          <div className='portfolio_item-tool'>
            <p>React Native</p>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={EML_LUNG_CANCER} alt="Stroke Web" />
          </div>
          <h3>EML Lung Cancer</h3>
          <a className='btn' href="https://github.com/NitishBiswas/Lung_Cancer_Prediction" target='_blank' rel="noreferrer">Github</a>
          <div className='portfolio_item-tool'>
            <p>React Native</p>
            <p>Machine Learning</p>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={CHAT_APP_MOBILE} alt="Stroke Web" />
          </div>
          <h3>Chat App</h3>
          <a className='btn' href="https://github.com/NitishBiswas/Chat-App-Mobile" target='_blank' rel="noreferrer">Github</a>
          <div className='portfolio_item-tool'>
            <p>React Native</p>
            <p>Firebase</p>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={URL_DETECTION} alt="Stroke Web" />
          </div>
          <h3>Malicious URL Detection</h3>
          <a className='btn' href="https://github.com/NitishBiswas/Malicious_URL_Detection_Mobile_APP/tree/main/MaliciousURL" target='_blank' rel="noreferrer">Github</a>
          <div className='portfolio_item-tool'>
            <p>React Native</p>
            <p>Machine Learning</p>
          </div>
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
          <div className='portfolio_item-tool'>
            <p>React</p>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={MOVE_INFO} alt="Stroke Web" />
          </div>
          <h3>Movie Info</h3>
          <a className='btn' href="https://movie-info-v1.netlify.app/" target='_blank' rel="noreferrer">Live Demo</a>
          <div className='portfolio_item-tool'>
            <p>React</p>
            <p>RTK Query</p>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={EXPENSE_TRACKER} alt="Stroke Web" />
          </div>
          <h3>Expense Tracker</h3>
          <a className='btn' href="https://nitishbiswas.github.io/Expense_Tracker/" target='_blank' rel="noreferrer">Live Demo</a>
          <div className='portfolio_item-tool'>
            <p>React</p>
            <p>Redux</p>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={FAKESHOP} alt="Stroke Web" />
          </div>
          <h3>FakeShop</h3>
          <a className='btn' href="https://nitishbiswas.github.io/FakeShop/" target='_blank' rel="noreferrer">Live Demo</a>
          <div className='portfolio_item-tool'>
            <p>React</p>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={YOUTUBE} alt="Stroke Web" />
          </div>
          <h3>YouTube Clone</h3>
          <a className='btn' href="https://nitishbiswas.github.io/youtube-clone/" target='_blank' rel="noreferrer">Live Demo</a>
          <div className='portfolio_item-tool'>
            <p>React</p>
            <p>Firebase</p>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={STROKE_WEB} alt="Stroke Web" />
          </div>
          <h3>Stroke Prediction</h3>
          <a className='btn' href="https://stroke-prediction.netlify.app/" target='_blank' rel="noreferrer">Live Demo</a>
          <div className='portfolio_item-tool'>
            <p>React</p>
            <p>Machine Learning</p>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={GITHUB} alt="Stroke Web" />
          </div>
          <h3>GitHub Users</h3>
          <a className='btn' href="https://nitishbiswas.github.io/github-users/" target='_blank' rel="noreferrer">Live Demo</a>
          <div className='portfolio_item-tool'>
            <p>React</p>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={SHADOW} alt="Stroke Web" />
          </div>
          <h3>Shadow Generator</h3>
          <a className='btn' href="https://nitishbiswas.github.io/shadow-generator/" target='_blank' rel="noreferrer">Live Demo</a>
          <div className='portfolio_item-tool'>
            <p>React</p>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={NITISH_PORTFOLIO} alt="Stroke Web" />
          </div>
          <h3>Portfolio</h3>
          <a className='btn' href="https://nitishbiswas.github.io/portfolio/" target='_blank' rel="noreferrer">Live Demo</a>
          <div className='portfolio_item-tool'>
            <p>React</p>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={MALICIOUS_URL_DETECTION} alt="Stroke Web" />
          </div>
          <h3>Malicious URL Detection</h3>
          <a className='btn' href="https://nitishbiswas.github.io/Malicious_URL_Detection/" target='_blank' rel="noreferrer">Live Demo</a>
          <div className='portfolio_item-tool'>
            <p>React</p>
            <p>Machine Learning</p>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={HEART} alt="Stroke Web" />
          </div>
          <h3>Heart Disease Diagnose</h3>
          <a className='btn' href="https://nitishbiswas.github.io/heart-disease-daignose/" target='_blank' rel="noreferrer">Live Demo</a>
          <div className='portfolio_item-tool'>
            <p>React</p>
            <p>Machine Learning</p>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={FAKEBLOG} alt="Stroke Web" />
          </div>
          <h3>Fake Blogs</h3>
          <a className='btn' href="https://fake-blogs.netlify.app/" target='_blank' rel="noreferrer">Live Demo</a>
          <div className='portfolio_item-tool'>
            <p>React</p>
          </div>
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
          <h4 style={{ textAlign: 'justify' }}><GiTwirlyFlower style={{ marginRight: 25 }} color={'#20fc03'} />K. M. Mohi Uddin, N. Biswas, S. T. Rikta, S. K. Dey, and A. Qazi, “XML-LightGBMDroid: A self-driven interactive mobile application utilizing explainable machine learning for breast cancer diagnosis,” Engineering Reports, 2023, doi: <a style={{ display: 'inline' }} href='https://doi.org/10.1002/eng2.12666' target='_blank' rel="noreferrer">https://doi.org/10.1002/eng2.12666</a></h4>
          <br />
          <h4 style={{ textAlign: 'justify' }}><GiTwirlyFlower style={{ marginRight: 25 }} color={'#20fc03'} />K. M. M. Uddin, N. Biswas, S. T. Rikta, and S. K. Dey, “Machine learning-based diagnosis of breast cancer utilizing feature optimization technique,” Computer Methods and Programs in Biomedicine Update, vol. 3, p. 100098, 2023, doi: <a style={{ display: 'inline' }} href='https://doi.org/10.1016/j.cmpbup.2023.100098' target='_blank' rel="noreferrer">https://doi.org/10.1016/j.cmpbup.2023.100098</a></h4>
          <br />
          <h4 style={{ textAlign: 'justify' }}><GiTwirlyFlower style={{ marginRight: 25 }} color={'#20fc03'} />S. T. Rikta, K. M. M. Uddin, N. Biswas, R. Mostafiz, F. Sharmin, and S. K. Dey, “XML-GBM lung: An explainable machine learning-based application for the diagnosis of lung cancer,” J Pathol Inform, vol. 14, p. 100307, 2023, doi: <a style={{ display: 'inline' }} href='https://doi.org/10.1016/j.jpi.2023.100307' target='_blank' rel="noreferrer">https://doi.org/10.1016/j.jpi.2023.100307</a></h4>
          <br />
          <h4 style={{ textAlign: 'justify' }}><GiTwirlyFlower style={{ marginRight: 25 }} color={'#20fc03'} />K. M. Mohi Uddin, R. Ripa, N. Yeasmin, N. Biswas, and S. K. Dey, “Machine learning-based approach to the diagnosis of cardiovascular vascular disease using a combined dataset,” Intell Based Med, vol. 7, p. 100100, 2023, doi: <a style={{ display: 'inline' }} href='https://doi.org/10.1016/j.ibmed.2023.100100' target='_blank' rel="noreferrer">https://doi.org/10.1016/j.ibmed.2023.100100</a></h4>
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
