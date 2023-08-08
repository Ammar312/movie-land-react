import React from "react";

const MoviesCard = ({ movie: { Poster, Title, Type, Year, imdbID } }) => {
  return (
    <>
      <div className="movie" key={imdbID}>
        <div className="year">
          <p>{Year}</p>
        </div>
        <div className="poster">
          <img
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
            alt={Title}
          />
        </div>
        <div className="description">
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>
    </>
  );
};

export default MoviesCard;
