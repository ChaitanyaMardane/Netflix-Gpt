export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjdmMGNkMzdiNjdlMjIzOTA3NjE1Zjk5MWQ4ZjY2ZCIsIm5iZiI6MTc1NjgyMjA5My41LCJzdWIiOiI2OGI2ZmE0ZDI4Y2IxYzZiOWUxNTg5ZjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xGQC2sOYSD3Fkj-hi_thmxKKN33Q4H8QXEDqckUIuMY",
  },
};
export const NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const TOP_RATED_MOVIES =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const UPCOMING_MOVIES =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "es", name: "Spanish" },
];
export const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";
