// @ts-nocheck
"use client";

import { GALLERY } from "../../data/galleryData";
import classes from "./genreGrid.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GenreGrid({ genre }) {
  const [columns, setColumns] = useState(2);
  const [currentPhotos, setCurrentPhotos] = useState([]);

  // Handle genre change - instant clear and load
  useEffect(() => {
    // Instantly clear current photos
    setCurrentPhotos([]);

    // Find new genre and set immediately
    const foundGenre = GALLERY.find((photoGenre) => photoGenre.genre === genre);
    if (foundGenre) {
      setCurrentPhotos(foundGenre.photos);
    }
  }, [genre]);

  // Responsive column adjustment
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth > 1200) {
        setColumns(3);
      } else if (window.innerWidth > 900) {
        setColumns(2);
      } else if (window.innerWidth > 600) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Don't render anything if no photos
  if (currentPhotos.length === 0) {
    return <div className={classes.container}></div>;
  }

  // Distribute images across columns for masonry layout
  const distributePhotos = () => {
    const columnArrays = Array.from({ length: columns }, () => []);

    currentPhotos.forEach((photo, index) => {
      const shortestColIndex = columnArrays
        .map((column, i) => ({
          height: column.reduce((acc) => acc + 1, 0),
          index: i
        }))
        .sort((a, b) => a.height - b.height)[0].index;

      columnArrays[shortestColIndex].push({ url: photo, index });
    });

    return columnArrays;
  };

  const photoColumns = distributePhotos();

  return (
    <div className={classes.container}>
      <div
        className={classes.masonryGrid}
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {photoColumns.map((column, colIndex) => (
          <div key={`column-${colIndex}`} className={classes.masonryColumn}>
            {column.map((photo, photoIndex) => (
              <motion.div
                key={`photo-${genre}-${photo.index}`}
                className={classes.imageWrapper}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: photoIndex * 0.05
                }}
              >
                <img
                  src={photo.url}
                  alt={`${genre} photo ${photo.index}`}
                  className={classes.image}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
