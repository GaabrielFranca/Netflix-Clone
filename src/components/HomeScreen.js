import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import RowSessions from "./RowSessions";
import requests from "../Requests";
const HomeScreen = () => {
  return (
    <main>
      <NavBar />
      <Banner />

      <RowSessions
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <RowSessions
        LargeRow
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <RowSessions
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <RowSessions
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <RowSessions
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <RowSessions
        title="Documentaries"
        fetchUrl={requests.fetchDocumentariesMovies}
      />
    </main>
  );
};

export default HomeScreen;
