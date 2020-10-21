import React, {useEffect, useState} from 'react';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import './Footer.css'
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import { useSelector,useDispatch} from 'react-redux';
import {
    Item,setPlaying,Playing,setCurrentMusic
} from '../../../features/counter/spotifySlice';
const Footer = ({spotify}) => {
    const dispatch=useDispatch()
    const item=useSelector(Item)
    const playing=useSelector(Playing)

    const handlePlayPause = () => {
        if (playing) {
            spotify.pause();
        } else {
            spotify.play();
            dispatch(setPlaying(true))

        }
    };

    const skipNext = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack().then((r) => {
            dispatch(setCurrentMusic(r))
            dispatch(setPlaying(true))
        });
    };



    return (
        <div className="footer">

            <div className="footer__left">
                <img
                    className="footer__albumLogo"
                    src={item?.imageUrl}
                    alt={item?.artist}
                />
                <div className="footer__songInfo">
                    <h4>{item?.name}</h4>
                    <p>{item?.artist}</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon  className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
                <SkipNextIcon  className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>

        </div>
    );
};


export default Footer;