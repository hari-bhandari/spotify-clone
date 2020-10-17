import { createSlice } from '@reduxjs/toolkit';
import SpotifyWebApi from "spotify-web-api-js";
const Spotify=new SpotifyWebApi();

export const spotifySlice = createSlice({
  name: 'spotify',
  initialState: {
    user:null,
    playlists:[],
    playing:false,
    item:null
  },
  reducers: {
    getUser: (state, action) => {
      state.user=action.payload;
    },
  },
});

export const {getUser} = spotifySlice.actions;

export default spotifySlice.reducer;
export const GetUser = token => async dispatch => {
  Spotify.setAccessToken(token)
  const user = await Spotify.getMe()
  dispatch(getUser(user));
};
export const User = state => state.spotify.user;


