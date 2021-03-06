import React from 'react';
import './TeslaStats.css';
import PropTypes from 'react';


const TeslaStats = (props) => {
    const listItem = props.carstats.map((stat) => (
        <li key={stat.model}>
            <div className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}></div>
            <p>{stat.miles}</p>
        </li>
    ));
    return(
        <div className="tesla-stats">
            <ul>
                {listItem}
            </ul>
        </div>
    )
}

TeslaStats.prototypes = {
    carstats:PropTypes.array
}

export default TeslaStats;