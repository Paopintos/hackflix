import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import FilterByRating from "../FilterByRating/FilterByRating";
import MyCarousel from "../MyCarousel/MyCarousel";

function Home() {
  const [movies, setMovies] = useState([]);
  const [apiPageNumber, setApiPageNumber] = useState(1);
  return (
    <>
      <Navbar />
      <MyCarousel movies={movies} setMovies={setMovies} />
      <FilterByRating
        movies={movies}
        setMovies={setMovies}
        apiPageNumber={apiPageNumber}
        setApiPageNumber={setApiPageNumber}
      />
    </>
  );
}

export default Home;
