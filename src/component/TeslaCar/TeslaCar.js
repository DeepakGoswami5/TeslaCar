import React from 'react';
import './TeslaCar.css';
import PropTypes from 'react';

const TeslaCar = (props) => (
    <div className='tesla-car'>
        <div className='tesla-wheels'>
            <div className={`tesla-wheel tesla-wheel--front tesla-wheel--${props.wheelsize}`}></div>
            <div className={`tesla-wheel tesla-wheel--rear tesla-wheel--${props.wheelsize}`}></div>
        </div>
    </div>
)

TeslaCar.prototype = {
    wheelsize: PropTypes.number
}

export default TeslaCar;