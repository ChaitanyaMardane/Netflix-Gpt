import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ movie }) => {
  return (
    <div className=" flex-shrink-0 cursor-pointer   ">
      <img
        className="w-32 md:w-40 md:h-50  object-cover rounded-md hover:scale-125 transition-all duration-200 ease-out "
        src={IMG_CDN_URL + movie?.poster_path}
        alt="movie"
      />
    </div>
  );
};

export default MovieCard;
