import React, { useEffect, useState } from "react";
import axiosReq from "../axios";
import requests from "../request";
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
      <div className="bannerContents">
        <h1 className="bannerTitle">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="bannerButtons">
          <button className="bannerButton">Play</button>
          <button className="bannerButton">My List</button>
        </div>
        <h2 className="bannerDescription">{truncate(movie?.overview , 150)}</h2>
      </div>
      <div className="bannerFadeBottom"></div>
    </header>
  );
}
