import React, {useEffect} from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Login from "./components/auth/Login";
import {getTokenFromResponse} from "./utils/spotify";

function App() {
    useEffect(()=>{
        const token =getTokenFromResponse()
        console.log(token)
    },[])
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
