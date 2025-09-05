import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainor = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies) return null;
  const mainMovie = movies?.[0];
  const { original_title, overview } = mainMovie;

  return (
    <div className=" ">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainor;
