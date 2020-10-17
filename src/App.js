import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./components/auth/Login";
import {getTokenFromResponse} from "./utils/spotify";
import { useSelector, useDispatch } from 'react-redux';
import {
    getUser,GetUser,User
} from './features/counter/spotifySlice';
import Player from "./components/Player/Player";

function App() {
    const user = useSelector(User);
    const dispatch = useDispatch();
    const [token,setToken]=useState(null)
    useEffect(()=>{
        const hash =getTokenFromResponse()
        console.log(token)
        window.location.hash=''
        const {access_token}=hash
        if(access_token){
            setToken(access_token)
            dispatch(GetUser(access_token))
        }



    },[])
  return (
    <div className="App">
        {
            token?(
                <div><Player name={user?.display_name}/></div>):<Login/>
        }
    </div>
  );
}

export default App;
