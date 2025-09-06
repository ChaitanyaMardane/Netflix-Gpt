import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pl-4 text pt-60 md:pt-80 absolute top-0 left-0 text-white z-20 w-screen bg-gradient-to-r from-black h-[100vh]  ">
      <h1 className="md:mx-40 text-2xl  md:text-5xl font-semibold  py-4">{title}</h1>
      <p className="mx-40  text-lg w-1/4 hidden md:block">{overview}</p>

      <div className=" md:mx-40 md:mt-0">
        <button className="bg-white text-black text-xl font-bold p-2 rounded-md  md:h-16 md:w-36 hover:bg-opacity-85 ">
          ▶Play
        </button>
        <button className="bg-gray-600 text-white p-2 rounded-md  md:h-16 md:w-36 m-4 hover:bg-opacity-85 hidden md:inline-block">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
