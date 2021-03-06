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
    token:null,
    discoverWeekly:null
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
    setDiscoverWeekly:(state, action) => {
      state.discoverWeekly=action.payload;
    },
    setCurrentMusic:(state, action) => {
      state.item=action.payload;
    },
    setPlaying:(state, action) => {
      state.playing=action.payload;
    }

  },
});

export const {getUser,setToken,getUserPlaylists,setDiscoverWeekly,setCurrentMusic,setPlaying} = spotifySlice.actions;

export default spotifySlice.reducer;
export const User = state => state.spotify.user;
export const Token = state => state.spotify.token;
export const Playlists = state => state.spotify.playlists;
export const DiscoverWeekly = state => state.spotify.discoverWeekly;
export const Item = state => state.spotify.item;
export const Playing = state => state.spotify.playing;


