import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movies/movieSlice';
// import reducers from './reducers';
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer
  }
});
