import React, { Component } from 'react';
import './teslaBattery.css';
import TeslaNotice from '../component/teslaNotice/teslaNotice';

class teslaBattery extends Component {
    render() {
        return(
            <form className="tesla-battery">
                <h1>Range Per Charge</h1>
                <TeslaNotice/>
            </form>
        )
    }
}

export default teslaBattery;