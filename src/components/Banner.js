import React, { useState, useEffect } from "react";
import styles from "./Banner.module.css";
import requests from "../Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(requests.fetchNetflixOriginals);
      const json = await res.json();

      setMovie(
        json.results[Math.floor(Math.random() * json.results.length - 1)]
      );
    }

    fetchData();
  }, []);

  function counterLetter(string, count) {
    return string.length > count ? string.substr(0, count - 1) + "..." : string;
  }

  if (movie) {
    return (
      <header
        className={styles.Banner}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.Banner__contents}>
          <h1 className={styles.Banner__title}>{movie.name}</h1>
          <div className={styles.Banner__buttons}>
            <button className={styles.Banner__button}>Play</button>
            <button className={styles.Banner__button}>My List</button>
          </div>
          <h1 className={styles.Banner__description}>
            {counterLetter(`${movie.overview}`, 150)}
          </h1>
        </div>

        <div className={styles.Banner__fadeBottom}></div>
      </header>
    );
  }
};
export default Banner;
