import React from 'react';
import PropTypes from 'prop-types';
import './Player.css'
const Player = ({spotify}) => {
    return (
        <div className="player">
            <div className="player__body">
            {/*    Sidebar*/}
            {/*    body*/}
            </div>
        {/*    footer*/}
        </div>
    );
};

Player.propTypes = {
    spotify: PropTypes.object.isRequired
};

export default Player;