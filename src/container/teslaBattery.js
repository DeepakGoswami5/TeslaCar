import React, { Component } from 'react';
import './teslaBattery.css';
import TeslaNotice from '../component/teslaNotice/teslaNotice';
import TeslaCar from '../component/TeslaCar/TeslaCar';

class teslaBattery extends Component {
    render() {
        return(
            <form className="tesla-battery">
                <h1>Range Per Charge</h1>
                <TeslaCar/>
                <TeslaNotice/>
            </form>
        )
    }
}

export default teslaBattery;