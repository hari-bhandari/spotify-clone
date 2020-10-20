import React from 'react';
import './Sidebar.css'
import PropTypes from 'prop-types';
import SidebarOption from "./SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useSelector, useDispatch } from 'react-redux';
import {
    Playlists
} from '../../../features/counter/spotifySlice';
const Sidebar = ({spotify}) => {
    const playlists=useSelector(Playlists)
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SidebarOption Icon={HomeIcon} optionText="Home" />
            <SidebarOption Icon={SearchIcon} optionText="Search" />
            <SidebarOption Icon={LibraryMusicIcon} optionText="Your Library" />
            <br/>
            <strong className="sidebar__title">Playlists</strong>
            <hr/>
            {playlists?.items?.map(playlist=>(
                <SidebarOption optionText={playlist.name} id={playlist.id} spotify={spotify}/>
            ))}


        </div>
    );
};

Sidebar.propTypes = {
    
};

export default Sidebar;