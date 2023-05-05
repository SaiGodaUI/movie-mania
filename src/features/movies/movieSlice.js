import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  fetchAsyncDetails,
} from "./moviesAPI";

const initialState = {
  movies: {},
  shows: {},
  selectedItem: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedItem: (state) => {
      state.selectedItem = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, shows: payload };
    },
    [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, selectedItem: payload };
    },
  },
});

export const { removeSelectedItem } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedItemDetails = (state) => state.movies.selectedItem;
export default movieSlice.reducer;
