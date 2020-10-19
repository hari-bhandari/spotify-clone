import { createSlice } from '@reduxjs/toolkit';
import SpotifyWebApi from "spotify-web-api-js";
const Spotify=new SpotifyWebApi();

export const spotifySlice = createSlice({
  name: 'spotify',
  initialState: {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:null
  },
  reducers: {
    getUser: (state, action) => {
      state.user=action.payload;
    },
    setToken:(state, action) => {
      state.token=action.payload;
    },
    getUserPlaylists:(state, action) => {
      state.playlists=action.payload;
    },
  },
});

export const {getUser,setToken,getUserPlaylists} = spotifySlice.actions;

export default spotifySlice.reducer;
export const User = state => state.spotify.user;
export const Token = state => state.spotify.token;
export const Playlists = state => state.spotify.playlists;


