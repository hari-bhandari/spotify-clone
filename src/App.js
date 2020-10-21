import React, {useEffect} from 'react';
import './App.css';
import Login from "./components/auth/Login";
import {getTokenFromResponse} from "./utils/spotify";
import { useSelector, useDispatch } from 'react-redux';
import {
    getUser,User,Token,setToken,getUserPlaylists,setDiscoverWeekly,setCurrentMusic
} from './features/counter/spotifySlice';
import Player from "./components/Player/Player";
import SpotifyWebApi from "spotify-web-api-js";
const Spotify=new SpotifyWebApi();

function App() {

    const user = useSelector(User);
    const dispatch = useDispatch();
    const token=useSelector(Token)
    useEffect(()=>{
        const hash =getTokenFromResponse()
        // window.location.hash=''
        const {access_token}=hash
        if(access_token){
            dispatch(setToken(access_token))
            Spotify.setAccessToken(access_token)
            Spotify.getMe().then((response)=>{
                dispatch(getUser(response))
            })
            Spotify.getUserPlaylists().then((response)=>{
                dispatch(getUserPlaylists(response))
            })
            Spotify.getPlaylist('37i9dQZEVXcG2cftDkVej0').then((response)=>{
                dispatch(setDiscoverWeekly(response))
            })
            Spotify.getMyCurrentPlaybackState().then((response) => {
                console.log(response)

                if(response.item) {
                    dispatch(setCurrentMusic({
                        name: response?.item?.name,
                        artist: response?.item?.artists[0].name,
                        imageUrl: response?.item?.album?.images[0].url
                    }))
                }
            });


        }



    },[token])
    return (
        <div className="App">


            {
                token?(
                    <div><Player spotify={Spotify} name={user?.display_name}/></div>):<Login/>
            }
        </div>
    );
}

export default App;
