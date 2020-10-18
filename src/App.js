import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./components/auth/Login";
import {getTokenFromResponse} from "./utils/spotify";
import { useSelector, useDispatch } from 'react-redux';
import {
    getUser,GetUser,User,Token,SetToken
} from './features/counter/spotifySlice';
import Player from "./components/Player/Player";

function App() {
    const user = useSelector(User);
    const dispatch = useDispatch();
    const token=useSelector(Token)
    useEffect(()=>{
        const hash =getTokenFromResponse()
        console.log(token)
        window.location.hash=''
        const {access_token}=hash
        if(access_token){
            dispatch(GetUser(access_token))
            dispatch(SetToken(access_token))
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
