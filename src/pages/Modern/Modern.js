import React from 'react';
import Button from '../../components/button/button';

import './modern.scss';

import modern from '../../assets/images/modern.png';

const Modern = () => {
 
    return (
        <div className="modern">
        <div className="container">
      <div className="modern__wrapper">
      <div className="modern__body">
          <div className="modern__subtitle">
              MODERN INTERIOR
          </div>
          <div className="modern__title">
          Create Your Interior Design.
          </div>
          <div className="modern__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation.
          </div>
          <Button to="/contact" className='button'>Contact</Button>
      </div>
      <div className="modern__img"> <img src={modern} alt='Modern'></img></div>
      </div>
</div>
</div>

)
};


export default Modern;