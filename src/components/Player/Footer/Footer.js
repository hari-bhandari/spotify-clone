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
import Script from 'react-load-script'

const Footer = () => {
    useEffect(()=>{

    },[])
    const [player,setPlayer]=useState(null)

    return (
        <div className="footer">
            <Script
                url="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
                // onCreate={this.handleScriptCreate.bind(this)}
                // onError={this.handleScriptError.bind(this)}
                // onLoad={this.handleScriptLoad.bind(this)}
            />
            <div className="footer__left">
                <img
                    className="footer__albumLogo"
                    src='https://upload.wikimedia.org/wikipedia/en/0/0b/JustinBieberLoveYourself.png'
                    alt='ha'
                />
                <div className="footer__songInfo">
                    <h4>Yeah</h4>
                    <p>Us</p>
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