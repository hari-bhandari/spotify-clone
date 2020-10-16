import { createSlice } from '@reduxjs/toolkit';
import SpotifyWebApi from "spotify-web-api-js";
const spotify=new SpotifyWebApi();

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
  spotify.setAccessToken(token)
  const user = await spotify.getMe()
  dispatch(getUser(user));
};


const getMe=async (token)=>{

}