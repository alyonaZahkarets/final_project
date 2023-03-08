import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photos from './photos';
import arrowright from './arrowright.svg';
import arrowleft from './arrowleft.svg';
import './slider.scss';

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <img src={arrowleft} alt="Previous" />
    </div>
  );
};
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <img src={arrowright} alt="Next" />
    </div>
  );
};



const SliderComp = () => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <div className='testimonials__slider'>
    <Slider {...settings}>
      {photos.map(photo => (
        <div key={photo.id}>
          <div className='testimonials__slider-item'>
          <img src={photo.url} alt={photo.name} />
          <div className='photo__info'>
          <h3 className='photo__title'>{photo.name}<h4 className='photo__subtitle'>{photo.subtitle}</h4></h3>
          <p className='photo__descr'>{photo.description}</p>
          </div>
        </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default SliderComp;