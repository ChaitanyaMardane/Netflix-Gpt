import React from "react";
import GptSearchBar from "./GptSearchBar";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptSearch = () => {
  const searchMovies = useSelector((store) => store.gpt);
  const { movieList, movieNames } = searchMovies;

  return (
    <div className=" h-full w-full">
      <GptSearchBar />
      <div className=" bg-black h-max w-screen ">
        <div className=" -mt-[30%]  ">
          {!movieNames && null}
          {!movieList && null}
          {movieNames?.map((movieName) => {
            return (
              <div className="   ">
                <MovieList
                  key={movieName}
                  title={movieName}
                  movies={movieList?.filter((m) => {
                    if (m?.title?.includes(movieName.trim())) return m;
                    if (m[0]?.title?.includes(movieName.trim())) {
                      return m;
                    }
                  })}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
