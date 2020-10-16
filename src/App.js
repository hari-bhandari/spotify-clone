import React, {useEffect, useState} from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Login from "./components/auth/Login";
import {getTokenFromResponse} from "./utils/spotify";

function App() {
    const [token,setToken]=useState(null)
    useEffect(()=>{
        const hash =getTokenFromResponse()
        console.log(token)
        window.location.hash=''
        hash.access_token&&setToken(hash.access_token)



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
