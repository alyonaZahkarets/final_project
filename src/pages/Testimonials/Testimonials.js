import React from 'react';
import SliderComp from '../../components/Slider/SliderComp';
import './testimonials.scss';



const Testimonials = () => {
 
    return (
        <div className="testimonials">
        <div className="container">
            <div className="testimonials__subtitle">TESTIMONIALS</div>
            <div className='testimonials__title'>Clients says about us</div>
            <div className='testimonials_slider-wrapper'><SliderComp /></div>
        </div>
        </div>

)
};


export default Testimonials;