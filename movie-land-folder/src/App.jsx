import { useState, useEffect } from "react";
import WebTitle from "./components/WebTitle";
import SearchBar from "./components/SearchBar";
import MoviesCard from "./components/MoviesCard";
import "./App.css";
// 3f92b819
const API = `http://www.omdbapi.com/?i=tt3896198&apikey=3f92b819`;
const App = () => {
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data);
  };
  useEffect(() => {
    // searchMovies("barbie");
  }, []);
  return (
    <>
      <div className="app">
        <WebTitle name="MOVIE LAND" />
        <SearchBar searchMovies={searchMovies} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            <MoviesCard movie={movie} />;
          })}
        </div>
      ) : (
        {}
      )}
    </>
  );
};

export default App;
