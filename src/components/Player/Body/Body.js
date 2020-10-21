import React from 'react';
import './Body.css'
import PropTypes from 'prop-types';
import Header from "./Header";
import { useSelector, useDispatch } from 'react-redux';
import {
    DiscoverWeekly
} from '../../../features/counter/spotifySlice';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

const Body = ({spotify}) => {
    const discoverWeekly=useSelector(DiscoverWeekly)
    return (
        <div className="body">
            <Header spotify={spotify} />


            {discoverWeekly&&(<div className="body__info">
                <img src={discoverWeekly?.images[0]?.url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{discoverWeekly?.name}</h2>
                    <p>{discoverWeekly?.description}</p>
                </div>
            </div>)}

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                        className="body__shuffle"
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {discoverWeekly?.tracks.items.map((item) => (
                    <SongRow  track={item.track} />
                ))}
            </div>
        </div>
    );
};

Body.propTypes = {
    spotify: PropTypes.object.isRequired,
};

export default Body;