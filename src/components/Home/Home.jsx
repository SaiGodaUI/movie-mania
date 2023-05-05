import React, { useEffect } from "react";
import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/moviesAPI";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(movieText));
  }, [dispatch]);
  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
