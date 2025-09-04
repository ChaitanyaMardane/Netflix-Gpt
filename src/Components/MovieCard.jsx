import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({movie}) => {
    
    
  return (
    <div className=" flex-shrink-0 ">
      <img
        className="w-40 h-50 object-cover rounded-md "
        src={IMG_CDN_URL + movie?.poster_path}
      alt="movie"
      />
    </div>
  );
}

export default MovieCard
