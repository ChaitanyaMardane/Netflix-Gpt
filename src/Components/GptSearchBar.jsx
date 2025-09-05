import { useRef } from "react";
import { API_OPTIONS, BG_IMG } from "../utils/constant";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import ai from "../utils/gemini";
import { addSearchResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.lang);
  const searchInput = useRef(null);
  const handleSearch = async () => {
    // const response = await fetch("https://api.x.ai/v1/chat/completions", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${process.env.REACT_APP_GROX_API}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     model: "grok-3", // Use the desired Grok model
    //     messages: [
    //       {
    //         role: "user",
    //         content: `Suggest movies based on: ${searchInput.current.value}`,
    //       },
    //     ],
    //   }),
    // });
    // const data = await response.json();
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Suggest exactly 5 movies based on the following input: ${searchInput.current.value}. 
Return only the movie names in a single line, separated by commas, with no extra text.`,
    });
    const searchResult =
      response?.candidates[0]?.content?.parts[0]?.text.split(",");
    const result = searchResult.map((movie) =>
      searchMovie(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie.trim() +
          "&include_adult=false&language=en-US&page=1"
      )
    );
    const movieList = await Promise.all(result);

    dispatch(
      addSearchResult({
        movieList: movieList,
        movieNames: searchResult,
      })
    );
  };

  const searchMovie = async (movie) => {
    const res = await fetch(movie, API_OPTIONS);
    const data = await res.json();

    const tmdbList = data.results.filter(
      (movie) =>
        movie.original_language === "hi" || movie.original_language === "en"
    );

    return tmdbList;
  };

  return (
    <div className=" absolute top-0 left-0 w-full h-screen z-10  ">
      <div className=" p-2 m-auto h-20 w-3/5 mt-[15%] bg-black  rounded-lg ">
        <form action="" className="   " onSubmit={(e) => e.preventDefault()}>
          <div className=" grid grid-cols-12 gap-2 mt-2  ">
            <input
              ref={searchInput}
              className="col-span-9 bg-slate-700 h-12 my-auto mx-4 rounded-lg px-4 z-0"
              type="text"
              placeholder={lang[language].gptSearchPlaceholder}
            />
            <button
              className="bg-red-700 h-12 text-white  h-12 my-auto mr-4 rounded-lg pr-4 col-span-3"
              onClick={handleSearch}
            >
              {lang[language].search}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
