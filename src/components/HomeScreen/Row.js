import React, { useState, useEffect } from "react";
import axiosReq from "../../axios";
import "./row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //this code runs based on the conditions
  // [] => runs once when the component loads first time
  useEffect(() => {
    async function fetchData() {
      const requestData = await axiosReq.get(fetchUrl);
      setMovies(requestData.data.results);
      //remove the result without posters
      return requestData;
    }
    fetchData();
  }, [fetchUrl]);
  //[fetchUrl] , component depends upon fetchUrl, whenever it changes we need to reload it

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            (movie.poster_path || movie.backdrop_path) && (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie?.name || movie?.title || movie?.original_title}
              ></img>
            )
        )}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}></Youtube>}
    </div>
  );
}

export default Row;
