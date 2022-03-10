import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import FilterByTitle from "../FilterByTitle/FilterByTitle";

function Search() {
  const [movies, setMovies] = useState([]);
  const [apiPageNumber, setApiPageNumber] = useState(1);
  return (
    <>
      <Navbar />
      <FilterByTitle
        movies={movies}
        setMovies={setMovies}
        apiPageNumber={apiPageNumber}
        setApiPageNumber={setApiPageNumber}
      />
    </>
  );
}

export default Search;
