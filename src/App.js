import React, {useEffect, useState} from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Login from "./components/auth/Login";
import {getTokenFromResponse} from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
const spotify=new SpotifyWebApi();
function App() {
    const spotifyHelper=async (token)=>{
        spotify.setAccessToken(token)
        const user=await spotify.getMe()
        console.log(user)
    }
    const [token,setToken]=useState(null)
    useEffect(()=>{
        const hash =getTokenFromResponse()
        console.log(token)
        window.location.hash=''
        const {access_token}=hash
        if(access_token){
            setToken(access_token)
            spotifyHelper(access_token)

        }



    },[])
  return (
    <div className="App">
        {
            token?(
                <div>I am logged in</div>):<Login/>
        }
    </div>
  );
}

export default App;
