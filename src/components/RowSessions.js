import React from "react";
import styles from "./RowSessions.module.css";
const RowSessions = ({ title, fetchUrl, LargeRow }) => {
  const [data, setData] = React.useState([]);
  React.useState(() => {
    async function fetchMovies() {
      const res = await fetch(fetchUrl);
      const json = await res.json();
      setData(json.results);
    }
    fetchMovies();
  }, []);
  const baseUrl = "https://image.tmdb.org/t/p/original";

  if (data)
    return (
      <div className={styles.row}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.wrap}>
          {data.map(({ backdrop_path, id, poster_path, name }) => (
            <img
              className={`${LargeRow ? styles.rowLarge : styles.rowPoster}`}
              key={id}
              src={`${baseUrl}${LargeRow ? backdrop_path : poster_path}`}
              alt={name}
            ></img>
          ))}
        </div>
      </div>
    );
};

export default RowSessions;
