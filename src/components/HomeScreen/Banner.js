import React, { useEffect, useState } from "react";
import axiosReq from "../../axios";
import requests from "../../request";
import "./banner.css"

const baseUrl = "https://image.tmdb.org/t/p/original/";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requestData = await axiosReq.get(requests.fetchTrending);
      setMovie(
        requestData.data.results[
          Math.floor(Math.random() * requestData.data.results.length)
        ]
      );
      return requestData;
    }
    fetchData();
  }, []);
  
  function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1)+"...":str;
  }

  return (
    <header className="banner" style={{
        backgroundSize : "cover",
        backgroundImage : `url(${baseUrl}${movie?.backdrop_path})`,
        backgroundPosition : "center center"
    }}>
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h2 className="banner__bescription">{truncate(movie?.overview , 150)}</h2>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}
