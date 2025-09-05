import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
    movieList: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.gptSearch = !state.gptSearch;
    },
    addSearchResult: (state, action) => {
      const { movieList, movieNames } = action.payload;
      state.movieList = movieList;
      state.movieNames = movieNames;
    },
  },
});
export const { toggleGptSearch, addSearchResult } = gptSlice.actions;
export default gptSlice.reducer;
