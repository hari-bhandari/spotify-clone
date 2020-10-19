import React from 'react';
import PropTypes from 'prop-types';
import './Player.css'
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
const Player = ({spotify}) => {
    return (
        <div className="player">
            <div className="player__body">
            <Sidebar/>
            <Body/>
            </div>
        {/*    footer*/}
        </div>
    );
};

Player.propTypes = {
    spotify: PropTypes.object.isRequired
};

export default Player;