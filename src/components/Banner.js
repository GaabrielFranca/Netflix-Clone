import React, { useState } from "react";
import styles from "./Banner.module.css";
const Banner = () => {
  function counterLetter(string, count) {
    return string.length > count ? string.substr(0, count - 1) + "..." : string;
  }

  return (
    <header
      className={styles.Banner}
      style={{
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.Banner__contents}>
        <h1 className={styles.Banner__title}>Title Movie</h1>
        <div className={styles.Banner__buttons}>
          <button className={styles.Banner__button}>Play</button>
          <button className={styles.Banner__button}>My List</button>
        </div>
        <h1 className={styles.Banner__description}>
          {counterLetter(
            " asdasdas asdasda asdada asdasdas asdasda asdada asdasdas asdasda asdada asdasdas asdasda asdada asdasdas asdasda asdada asdasdas asdasda asdada asdasdas asdasda asdada asdasdas asdasda asdada asdasdas asdasda asdada asdasdas asdasda asdada asdasdas asdasda asdada asdasdas asdasda asdada asdasdas asdasda asdada asdasdas asdasda asdada asdasdas asdasda asdada asdasdas asdasda asdada asdasdas asdasda asdada asdasdas asdasda asdada",
            150
          )}
        </h1>
      </div>

      <div className={styles.Banner__fadeBottom}></div>
    </header>
  );
};

export default Banner;
