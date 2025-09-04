import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  API_OPTIONS, TOP_RATED_MOVIES } from "../utils/constant";
import {  addTopRatedMovies } from "../utils/movieSlice";
const useTopRatedMovies = () => {
    
    const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const res = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
    const data = await res.json();
    console.log("Top Rated Movies");
    
    console.log(data.results);
    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
}

export default useTopRatedMovies