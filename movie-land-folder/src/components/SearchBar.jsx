import React from "react";
import { useState } from "react";

const SearchBar = (prop) => {
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
        <i className="bi bi-search" onClick={() => {}}></i>
      </div>
    </>
  );
};

export default SearchBar;
