import React from "react";
import { useState } from "react";

const SearchBar = ({ searchMovies }) => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="search">
        <input
          type="text"
          value={search}
          placeholder="Search a movie"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <i
          className="bi bi-search"
          onClick={() => {
            searchMovies(search);
          }}
        ></i>
      </div>
    </>
  );
};

export default SearchBar;
