import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainor from "../Components/MainContainor";
import Header from "./Header";
import SecondaryContainor from "../Components/SecondaryContainor";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const gptSearch = useSelector((state) => state.gpt.gptSearch);

  return (
    <div className="">
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainor />
          <SecondaryContainor />
        </>
      )}
    </div>
  );
};

export default Browse;
