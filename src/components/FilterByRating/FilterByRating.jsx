import React, { useState, useEffect } from "react";
import "./FilterByRating.css";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import Movies from "../Movies/Movies";
import tmdbApiConfig from "../../tmdbApiConfig";

function FilterByRating({
  movies,
  setMovies,
  apiPageNumber,
  setApiPageNumber,
}) {
  const [rating, setRating] = useState(6);

  // Primer llamada a la API - trae las pelis más recientes con un minimo de rating que elijamos
  useEffect(() => {
    const getMovies = async () => {
      tmdbApiConfig.params["vote_average.gte"] = rating;
      tmdbApiConfig.params["sort_by"] = "vote_average.asc";
      tmdbApiConfig.params["vote_count.gte"] = 100;
      tmdbApiConfig.params.page = apiPageNumber;
      const { data } = await axios.get("discover/movie", tmdbApiConfig);
      setMovies(data.results);
    };
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  // Segunda llamada a la API - trae más pelis luego de scrollear hacia abajo (llama a la siguiente pagina con 20 peliculas)
  const getMoreMovies = async () => {
    tmdbApiConfig.params["vote_average.gte"] = rating;
    tmdbApiConfig.params["sort_by"] = "vote_average.asc";
    tmdbApiConfig.params["vote_count.gte"] = 100;
    tmdbApiConfig.params.page = apiPageNumber + 1;
    const { data } = await axios.get("discover/movie", tmdbApiConfig);
    setApiPageNumber((prev) => prev + 1);
    setMovies([...movies, ...data.results]);
  };

  // Filtrar por rating cuando seleccionamos una estrella
  const ratingChanged = (newRating) => {
    setRating(newRating * 2 - 2);
  };

  return (
    <div>
      <div className="div-filter-rating">
        <p className="p-filter-by-rating">Filter by rating:</p>
        <ReactStars
          className="stars"
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          value={3}
        />
      </div>
      <Movies movies={movies} getMoreMovies={getMoreMovies} />
    </div>
  );
}

export default FilterByRating;
