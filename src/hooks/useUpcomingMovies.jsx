import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  API_OPTIONS,  UPCOMING_MOVIES } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";
const useUpcomingMovies = () => {
    
    const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const res = await fetch(UPCOMING_MOVIES, API_OPTIONS);
    const data = await res.json();
    console.log("Top Rated Movies");
    
    console.log(data.results);
    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
}

export default useUpcomingMovies