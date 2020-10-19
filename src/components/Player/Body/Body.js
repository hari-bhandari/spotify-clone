import React from 'react';
import './Body.css'
import PropTypes from 'prop-types';
import Header from "./Header";

const Body = ({spotify}) => {
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={"https://newjams-images.scdn.co/v2/discover-weekly/Ivsw3LNAca4betPc3vw4loerVRPov1kqGMkPVmndN1FOWhe4wV9YxwRApgTj9fiszJ1St2iQtWKn_A9L71bUf2957J5jUHX5YI3sFm8IAulFBDPS3oppgd3DlojoUP8NnDJBcP6gm_yRI_BdIApVTg==/NDM6MzU6NzBUNzItMjAtMA==/default"} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>a</p>
                </div>
            </div>

            {/*<div className="body__songs">*/}
            {/*    <div className="body__icons">*/}
            {/*        <PlayCircleFilledIcon*/}
            {/*            className="body__shuffle"*/}
            {/*            onClick={playPlaylist}*/}
            {/*        />*/}
            {/*        <FavoriteIcon fontSize="large" />*/}
            {/*        <MoreHorizIcon />*/}
            {/*    </div>*/}

            {/*    {discover_weekly?.tracks.items.map((item) => (*/}
            {/*        <SongRow playSong={playSong} track={item.track} />*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );
};

Body.propTypes = {
    spotify: PropTypes.object.isRequired,
};

export default Body;