import React from 'react';
import PropTypes from 'prop-types';
import './SongRow.css'
import {useDispatch} from 'react-redux';
import {
    setCurrentMusic, setPlaying
} from '../../../features/counter/spotifySlice';

const SongRow = ({track,spotify}) => {
    const artistName = track.artists.map((artist) => artist.name).join(", ")
    const dispatch = useDispatch()
    const changeCurrentMusicOnClick = () => {
        spotify.play({
            uris: [`spotify:track:${track.id}`]})
            .then((res) => {
                console.log(1)
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    setPlaying(true)
                });
            });
        dispatch(setCurrentMusic({name: track.name, artist: artistName, imageUrl: track.album.images[0].url}))
    }
    return (
        <div className="songRow" onClick={changeCurrentMusicOnClick}>
            <img className="songRow__album" src={track.album.images[0].url} alt=""/>
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {artistName}-
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