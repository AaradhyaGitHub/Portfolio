import React from "react";
import styles from "./ProjectCard.module.css";
export default function ProjectCard({
  orientation,
  image,
  title,
  description,
  viewProejctLink,
  viewGithubLink,
  viewDemoLink
}) {
  const orientationStyle = {
    web: styles.webCard,
    mobile: styles.movileCard,
    other: styles.otherCard
  };
  const cardStyle = orientationStyle[orientation] || styles.defaultStyle;
  return (
    <>
      <div className={styles.cardStyle}></div>
    </>
  );
}
