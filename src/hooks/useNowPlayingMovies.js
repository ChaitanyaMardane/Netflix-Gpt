import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NOW_PLAYING, API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const res = await fetch(NOW_PLAYING, API_OPTIONS);
    const data = await res.json();
    // console.log(data.results);
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
