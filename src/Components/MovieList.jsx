import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="flex w-screen ">
      <div className="w-full h-auto pl-8 md:pl-16 z-30">
        <h1 className="text-xl font-bold text-white mt-8">{title}</h1>
        <div className="list flex overflow-x-scroll space-x-4 pt-4    ">
          {movies?.length === 1
            ? movies[0]?.map((movie, id) => {
                return <MovieCard key={id} movie={movie} />;
              })
            : movies?.map((movie, id) => {
                return <MovieCard key={id} movie={movie} />;
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
