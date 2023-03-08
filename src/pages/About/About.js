import React from 'react';
import Button from '../../components/button/button';

import './about.scss';

import about from '../../assets/images/about.png';
import about2 from '../../assets/images/about2.png';

const About = () => {
 
    return (
        <div className="about">
        <div className="container">
      <div className="about__wrapper">
      <div className="about__body">
          <div className="about__subtitle">
          ABOUT US
          </div>
          <div className="about__title">
          Interioris The Will of An Epoch Mextreo
          </div>
          <div className="about__description">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form injected humour, or randomised words which don't look even slightly believable.If you are going to use a passage of Lorem Ipsum, sure there isn't anything embarrassing hidden the middleof text. All the Lorem Ipsum generators on the Internettend to repeat predefined chunks as necessary,making this the first true generator on the Internet.
          </div>
          <Button to="/learnmore" className='button'>LEARN MORE</Button>
      </div>
      <div className="about__img"> <img src={about} alt='About'></img></div>
      </div>



      <div className="years__wrapper">
      <div className="years__body">
          <div className="years__subtitle">
          20
          </div>
          <div className="years__title">
          <p>Years Of Successful</p>
          <p>Working</p>
          <p>The Market</p>
          </div>
          <Button to="/learnmore" className='button'>LEARN MORE</Button>
      </div>
      <div className="years__img"> <img src={about2} alt='About'></img></div>
      </div>





</div>
</div>

)
};


export default About;