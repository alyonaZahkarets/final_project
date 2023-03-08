import React from 'react';

import './complited.scss';

const Complited = () => {
 
    return (
        <div className='complited'>
            <div className='container'>
                <div className='complited__title'>3000+ Completed Work Which WE have Successfully Done</div>
                <div className='complited__items'>
                    <div className='complited__item'>
                        <div className='complited__item-number'>980</div>
                        <div className='complited__item-subtitle'>Project</div>
                    </div>

                    <div className='complited__item'>
                        <div className='complited__item-number'>520</div>
                        <div className='complited__item-subtitle'>Happy Client</div>
                    </div>

                    <div className='complited__item'>
                        <div className='complited__item-number'>330</div>
                        <div className='complited__item-subtitle'>Winners</div>
                    </div>

                    <div className='complited__item'>
                        <div className='complited__item-number'>120</div>
                        <div className='complited__item-subtitle'>Recoment</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Complited;