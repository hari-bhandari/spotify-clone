import React from 'react';
import PropTypes from 'prop-types';
import './SongRow.css'
const SongRow = ({track}) => {
    return (
        <div className="songRow" >
            <img className="songRow__album" src={track.album.images[0].url} alt="" />
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    );
};

SongRow.propTypes = {
    track: PropTypes.object.isRequired
};

export default SongRow;