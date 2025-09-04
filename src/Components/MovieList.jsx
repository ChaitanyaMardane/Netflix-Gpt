import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
return (
  <div className="flex w-screen ">
    <div className="w-full h-auto pl-16 z-40">
      <h1 className="text-xl font-bold text-white mt-8">{title}</h1>
      <div className="list flex overflow-x-auto space-x-4 pt-4    ">
        {movies?.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
      {/* <style>
                {`
                    .flex::-webkit-scrollbar {
                        display: none;
                    }
                `}
            </style> */}
    </div>
    <style>
      {`
            .flex::-webkit-scrollbar {
                display: none;
            }
        `}
    </style>
  </div>
);
};

export default MovieList;
