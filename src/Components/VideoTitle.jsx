import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-[20%] absolute text-white z-20 w-screen bg-gradient-to-r from-black h-[100vh]  ">
      <h1 className="mx-40   text-5xl font-semibold  py-4">{title}</h1>
      <p className="mx-40  text-lg w-1/4">{overview}</p>

      <div className=" mx-40">
        <button className="bg-white text-black text-xl font-bold p-2 rounded-md  h-16 w-36 hover:bg-opacity-85 ">
          ▶Play
        </button>
        <button className="bg-gray-600 text-white p-2 rounded-md  h-16 w-36 m-4 hover:bg-opacity-85">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
