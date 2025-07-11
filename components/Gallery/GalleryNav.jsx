import classes from "./GalleryNav.module.css";
import React from "react";
export default function GalleryNav({ selectedGenre, onGenreSelect }) {
  const handleClick = (e, genreId) => {
    e.preventDefault();
    onGenreSelect(genreId);
  };

  return (
    <nav className={classes.galleryNav}>
      <ul>
        <li>
          <a
            href="#"
            onClick={(e) => handleClick(e, "street")}
            className={
              selectedGenre === "street"
                ? `${classes.genre} ${classes.active}`
                : classes.genre
            }
          >
            STREET
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => handleClick(e, "animal")}
            className={
              selectedGenre === "animal"
                ? `${classes.genre} ${classes.active}`
                : classes.genre
            }
          >
            ANIMALS
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => handleClick(e, "aerial")}
            className={
              selectedGenre === "aerial"
                ? `${classes.genre} ${classes.active}`
                : classes.genre
            }
          >
            DRONE
          </a>
        </li>
      </ul>
    </nav>
  );
}
