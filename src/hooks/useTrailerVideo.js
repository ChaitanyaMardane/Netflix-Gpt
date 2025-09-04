import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

    const res = await fetch(url, API_OPTIONS);
    const json = await res.json();
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
     dispatch(addTrailerVideo(trailer));

  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useTrailerVideo;
