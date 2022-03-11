import React, { useState, useEffect } from "react";
import axios from "axios";
import Movies from "../Movies/Movies";
import "./FilterByTitle.css";
import tmdbApiConfig from "../../tmdbApiConfig";

function FilterByTitle({ movies, setMovies, apiPageNumber, setApiPageNumber }) {
  const [title, setTitle] = useState("");

  // Primer llamada a la API - trae las pelis cuyo titulo contenga las letras que le pasemos
  useEffect(() => {
    const getMovies = async () => {
      tmdbApiConfig.params.query = title;
      tmdbApiConfig.params.page = apiPageNumber;
      const { data } = await axios.get("search/movie", tmdbApiConfig);
      setMovies(data.results);
    };
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  // Segunda llamada a la API - trae más pelis luego de scrollear hacia abajo (llama a la siguiente pagina con 20 peliculas)
  const getMoreMovies = async () => {
    tmdbApiConfig.params.query = title;
    tmdbApiConfig.params.page = apiPageNumber + 1;
    const { data } = await axios.get("search/movie", tmdbApiConfig);
    setApiPageNumber((prev) => prev + 1);
    setMovies([...movies, ...data.results]);
  };

  return (
    <div>
      <form className="form-search-title">
        <label className="label-search-title" htmlFor="search-input-title">
          Search movie
        </label>
        <input
          onChange={(event) => setTitle(event.target.value)}
          id="search-input-title"
          type="text"
          placeholder="Enter a title to search..."
        />
      </form>
      {title && <Movies movies={movies} getMoreMovies={getMoreMovies} />}
    </div>
  );
}

export default FilterByTitle;
