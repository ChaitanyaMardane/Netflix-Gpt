import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainor = () => {
  const movies = useSelector((store) => store.movie);
  if (!movies) return null;

  /*
  MovieList 
    -MovieCard
      -MovieCardImage
      -MovieCardTitle
  

*/

  return (
    <div className="bg-black relative -top-36 md:top-32 h-[100%] pb-20 ">
      <div className="-mt-40">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular Movies" movies={movies.popularMovies} />
        <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
        <MovieList title="Top Rated Movies" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainor;
