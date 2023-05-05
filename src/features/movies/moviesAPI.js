import { createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi
      .get(`?apiKey=${APIkey}&s=${term}&type=movie`)
      .catch((error) => {
        console.log("error", error);
      });
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncseries",
  async (term) => {
    const response = await movieApi
      .get(`?apiKey=${APIkey}&s=${term}&type=series`)
      .catch((error) => {
        console.log("error", error);
      });
    return response.data;
  }
);

export const fetchAsyncDetails = createAsyncThunk(
  "movies/fetchAsyncDetails",
  async (id) => {
    const response = await movieApi
      .get(`?apiKey=${APIkey}&i=${id}&Plot=full`)
      .catch((error) => {
        console.log("error", error);
      });
    return response.data;
  }
);
