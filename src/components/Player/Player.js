import React from 'react';
import PropTypes from 'prop-types';

const Player = ({name}) => {
    return (
        <div>
            I am logged in : {name}
        </div>
    );
};

Player.propTypes = {

};

export default Player;