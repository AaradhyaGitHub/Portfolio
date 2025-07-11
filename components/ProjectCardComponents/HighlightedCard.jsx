import React, { useState } from "react";
import styles from "./HighlightedCard.module.css";
import { MdSportsMartialArts } from "react-icons/md";
import { MdFactory } from "react-icons/md";
import { GiCow } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import {
  Eye,
  CornerDownRight,
  ArrowLeft,
  Laptop,
  Smartphone
} from "lucide-react";

// Icon map
const techIconMap = {
  factory: <MdFactory size={80} />,
  fight: <MdSportsMartialArts size={80} />,
  cow: <GiCow size={80} />
};

// Type icon map
const typeIconMap = {
  web: <Laptop size={24} />,
  mobile: <Smartphone size={24} />
};

export default function HighlightedCard({
  image,
  title,
  description,
  technologies,
  backStory,
  howItWorks,
  keyFeatures,
  viewProjectLink,
  viewGithubLink,
  viewDemoLink,
  logo,
  type // new prop for web/mobile
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.cardWrapper}>
      <div
        className={`${styles.cardContainer} ${isFlipped ? styles.flipped : ""}`}
      >
        {/* Front of card */}
        <div className={styles.cardFront}>
          <div className={styles.logoSection}>
            <div className={styles.iconContainer}>
              {logo && techIconMap[logo]}
            </div>

            <div className={styles.linksContainer}>
              {type && (
                <div className={styles.typeIndicator}>
                  <div>{typeIconMap[type]}</div>
                  <span>{type}</span>
                </div>
              )}
              {viewGithubLink && (
                <a
                  href={viewGithubLink}
                  className={`${styles.actionLink} ${styles.githubLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={16} />
                  <span>GitHub</span>
                </a>
              )}
              {viewProjectLink && (
                <a
                  href={viewProjectLink}
                  className={styles.actionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Eye size={16} />
                  <span>Visit</span>
                </a>
              )}
            </div>
          </div>

          <div className={styles.contentSection}>
            <div className={styles.contentArea}>
              <h2 className={styles.cardTitle}>{title}</h2>
              <p className={styles.cardDescription}>{backStory}</p>
            </div>

            <div className={styles.buttonArea}>
              <button className={styles.detailsBtn} onClick={handleFlip}>
                <span>View Details</span>
                <CornerDownRight size={18} className={styles.detailsIcon} />
              </button>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className={styles.cardBack}>
          <div className={styles.backHeader}>
            <button className={styles.backBtn} onClick={handleFlip}>
              <ArrowLeft size={18} />
              <span>Back</span>
            </button>
            <h3 className={styles.backTitle}>{title}</h3>
          </div>

          <div className={styles.detailsContent}>
            <div className={styles.detailSection}>
              <h4 className={styles.detailTitle}>Technologies</h4>
              <p className={styles.detailText}>{technologies}</p>
            </div>

            <div className={styles.detailSection}>
              <h4 className={styles.detailTitle}>How It Works</h4>
              <p className={styles.detailText}>{howItWorks}</p>
            </div>

            <div className={styles.detailSection}>
              <h4 className={styles.detailTitle}>Key Features</h4>
              <p className={styles.detailText}>{keyFeatures}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}