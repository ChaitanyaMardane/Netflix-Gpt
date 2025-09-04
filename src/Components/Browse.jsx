
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainor from "../Components/MainContainor";
import Header from "./Header";
import SecondaryContainor from "../Components/SecondaryContainor";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainor />
      <SecondaryContainor />
    </div>
  );
};

export default Browse;
