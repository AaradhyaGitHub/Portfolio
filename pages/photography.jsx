// @ts-nocheck
"use client";

import { useState } from "react";
import GalleryNav from "../components/Gallery/GalleryNav";
import GenreGrid from "../components/Gallery/GenreGrid";
import styles from "./gallery.module.css";

export default function Gallery() {
  const [selectedGenre, setSelectedGenre] = useState("landscape");

  return (
    <div className={styles.galleryContainer}>
      <GalleryNav
        selectedGenre={selectedGenre}
        onGenreSelect={setSelectedGenre}
      />
      <div className={styles.galleryContent}>
        <GenreGrid genre={selectedGenre} />
      </div>
    </div>
  );
}
