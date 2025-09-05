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
    <div className="bg-black">
      <div className="-mt-20">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular Movies" movies={movies.popularMovies} />
        <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
        <MovieList title="Top Rated Movies" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainor;
