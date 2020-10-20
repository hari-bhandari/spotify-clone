import React from 'react';
import PropTypes from 'prop-types';
import './SidebarOption.css'
import {setDiscoverWeekly} from "../../../../features/counter/spotifySlice";
import { useDispatch } from 'react-redux';

const SidebarOption = ({optionText,Icon,id,spotify}) => {
    const dispatch=useDispatch()
    const onClickToToggleSpotify=()=>{
        spotify.getPlaylist(id).then((response)=>{
            dispatch(setDiscoverWeekly(response))
        })
    }
    if(id){
        return (
            <div className="sidebarOption" >
                <p onClick={onClickToToggleSpotify}>{optionText}</p>
            </div>
        );
    }
    return (
        <div className="sidebarOption" >
            {Icon&&<Icon className="sidebarOption__icon"/>}
            {Icon?<h4>{optionText}</h4>:<p>{optionText}</p>}
        </div>
    );
};

SidebarOption.propTypes = {
    optionText: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default SidebarOption;