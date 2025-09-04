
import {  useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  const key = trailerVideo?.key;
  const url =
    "https://www.youtube.com/embed/" + key + "?&autoplay=1&mute=1&controls=0";
  

  return (
    <div className="w-screen  h-[100h]   ">
      <div className="w-screen h-[100vh]"></div>

      <iframe
        className="w-screen h-[100vh]  absolute top-0 left-0"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
        referrerPolicy="strict-origin-when-cross-origin"
        loop
        // to loop the vide
      ></iframe>
    </div>
  );
};

export default VideoBackground;
