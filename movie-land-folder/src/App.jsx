import { useState, useEffect } from "react";
import WebTitle from "./components/WebTitle";
import SearchBar from "./components/SearchBar";
import "./App.css";
// 3f92b819
const API = `http://www.omdbapi.com/?i=tt3896198&apikey=3f92b819`;
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    // searchMovies("barbie");
  }, []);
  return (
    <>
      <div className="app">
        <WebTitle name="MOVIE LAND" />
        <SearchBar func={searchMovies} />
      </div>
    </>
  );
};

export default App;
