const tmdbApiConfig = {
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    include_adult: false,
    language: "en-US",
  },
};

export default tmdbApiConfig;
