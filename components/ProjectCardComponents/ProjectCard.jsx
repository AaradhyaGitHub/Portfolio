import React from "react";
import styles from "./ProjectCard.module.css";
import webStyles from "./ProjectCardWeb.module.css";
import mobileStyles from "./ProjectCardMobile.module.css";
import highlightedStyles from "./ProjectCardHighlighted.module.css";

import { FaInternetExplorer } from "react-icons/fa";
import {
  SquareX,
  SquareMinus,
  PanelTop,
  FileSearch,
  Search
} from "lucide-react";

export default function ProjectCard({
  orientation,
  image,
  title,
  description,
  technologies,
  backStory,
  howItWorks,
  keyFeatures,
  viewProjectLink,
  viewGithubLink,
  viewDemoLink
}) {
  const styles =
    orientation === "web"
      ? webStyles
      : orientation === "mobile"
      ? mobileStyles
      : orientation === "highlighted"
      ? highlightedStyles
      : undefined;

  return (
    <>
      <div className={styles?.cardContainer}>
        {orientation === "web" ? (
          <>
            <div className={styles?.titleBar}>
              <h1 className={styles?.title}>
                <FaInternetExplorer size={24} />
                {title}
              </h1>
              <div className={styles?.browserActions}>
                <SquareMinus size={32} />
                <PanelTop size={32} />
                <SquareX size={32} color={"red"} />
              </div>
            </div>
            <div className={styles?.searchContainer}>
              <div className={styles?.searchBar}>
                <p className={styles?.searchBarContent}>
                  <FileSearch className={styles?.searchBarIcon} size={20} />
                  <u>{viewProjectLink}</u>
                </p>
              </div>
              <div className={styles?.searchButton}>
                <p className={styles?.searchBarContent}>
                  <Search className={styles?.searchBarIcon} size={20} />
                  Visit
                </p>
              </div>
            </div>
          </>
        ) : (
          <h1 className={styles?.title}>{title}</h1>
        )}

        <img className={styles?.image} src={image} />
        <p className={styles?.description}>{description}</p>
        <ul className={styles?.techList}>
          <li className={styles?.techItems}>{technologies}</li>
        </ul>
        <h2 className={styles?.projectDetails}>Project Details</h2>
        <p className={styles?.projectBackStory}>{backStory}</p>
        <p className={styles?.projectHowItWorks}>{howItWorks}</p>
        <p className={styles?.keyFeatures}>{keyFeatures}</p>
        <div className={styles?.linkButtonsContainer}>
          <h2 className={styles?.linksHeader}>Links</h2>
          <ul className={styles?.linkLists}>
            <li className={styles?.linkItems}>
              <button className={styles?.linkButton}>{viewProjectLink}</button>
            </li>
            <li className={styles?.linkButton}>
              <button>{viewGithubLink}</button>
            </li>
            <li className={styles?.linkButton}>
              <button>{viewDemoLink}</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
