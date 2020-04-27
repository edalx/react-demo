import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    winter: {
        text: 'Burr it is cold!',
        iconName: 'snowflake'
    },
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    console.log("Season props");
    console.log(props);
    let season = getSeason(props.propState.lat, new Date().getMonth());
    const config = seasonConfig[season];
    return <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${config.iconName} icon`} />
        <h1 > {config.text} </h1>
        <i className={`icon-right massive ${config.iconName} icon`} />
    </div>
}
export default SeasonDisplay;