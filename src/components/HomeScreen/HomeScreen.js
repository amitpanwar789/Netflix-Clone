import React from "react";
import Row from "./Row";
import requests from "../../request";
import Banner from "./Banner";
import Navbar from "./Navbar";

export default function HomeScreen() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row
        title={"Netflix Originals"}
        isLargeRow={true}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
