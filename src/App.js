import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Search from "./components/pages/Search";
import MovieDetails from "./components/pages/MovieDetails/MovieDetails";
import Page404 from "./components/pages/Page404/Page404";
import useIsOnline from "./hooks/useIsOnline";

function App() {
  useIsOnline();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/pelicula/:id" element={<MovieDetails />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
