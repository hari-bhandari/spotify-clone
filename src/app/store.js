import { configureStore } from '@reduxjs/toolkit';
import spotifyReducer from '../features/counter/spotifySlice';

export default configureStore({
  reducer: {
    counter: spotifyReducer,
  },
});
