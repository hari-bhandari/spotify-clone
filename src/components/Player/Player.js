import React from 'react';
import PropTypes from 'prop-types';
import './Player.css'
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
const Player = ({spotify}) => {
    return (
        <div className="player">
            <div className="player__body">
            <Sidebar spotify={spotify}/>
            <Body spotify={spotify}/>
            </div>
        <Footer/>
        </div>
    );
};

Player.propTypes = {
    spotify: PropTypes.object.isRequired
};

export default Player;