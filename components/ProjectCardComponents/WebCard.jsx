// @ts-nocheck
import React from "react";
import styles from "./WebCard.module.css";

import { FaInternetExplorer } from "react-icons/fa";
import {
  SquareX,
  SquareMinus,
  PanelTop,
  FileSearch,
  ExternalLink,
  Github,
  Play,
  Folder,
  Settings,
  FileText
} from "lucide-react";

export default function WebCard({
  projectId,
  image,
  title,
  description,
  technologyCategory,
  technologyItems,
  backStory,
  howItWorks,
  keyFeatures,
  viewProjectLink,
  viewGithubLink,
  viewDemoLink,
  activeTab,
  onTabChange
}) {
  const handleTabClick = (tab) => {
    onTabChange(projectId, tab);
  };

  const renderOverviewTab = () => (
    <div className={styles?.overviewContent}>
      <div className={styles?.heroSection}>
        <div className={styles?.heroImageContainer}>
          <img className={styles?.heroImage} src={image} alt={title} />
          <div className={styles?.heroOverlay}>
            <div className={styles?.heroActions}>
              {viewProjectLink && (
                <button className={styles?.heroActionBtn}>
                  <ExternalLink size={14} />
                  Live Site
                </button>
              )}
              {viewGithubLink && (
                <button className={styles?.heroActionBtn}>
                  <Github size={14} />
                  Source
                </button>
              )}
              {viewDemoLink && (
                <button className={styles?.heroActionBtn}>
                  <Play size={14} />
                  Demo
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles?.projectInfo}>
        <div className={styles?.infoSection}>
          <h3 className={styles?.infoTitle}>Project Overview</h3>
          <p className={styles?.infoDescription}>{description}</p>
        </div>
      </div>
    </div>
  );

  const renderDetailsTab = () => (
    <div className={styles?.detailsContent}>
      <div className={styles?.windowsDesktop}>
        <div className={styles?.programWindow}>
          <div className={styles?.windowTitleBar}>
            <div className={styles?.windowTitle}>
              <Folder size={16} />
              Project Background
            </div>
            <div className={styles?.windowControls}>
              <SquareMinus size={12} />
              <PanelTop size={12} />
              <SquareX size={12} />
            </div>
          </div>
          <div className={styles?.windowContent}>
            <p className={styles?.windowContextDescription}>{backStory}</p>
          </div>
        </div>

        <div className={styles?.programWindow}>
          <div className={styles?.windowTitleBar}>
            <div className={styles?.windowTitle}>
              <Settings size={16} />
              How It Works
            </div>
            <div className={styles?.windowControls}>
              <SquareMinus size={12} />
              <PanelTop size={12} />
              <SquareX size={12} />
            </div>
          </div>
          <div className={styles?.windowContent}>
            {howItWorks.map((working, index) => (
              <p key={index} className={styles?.windowContextDescription}>
                - {working}
              </p>
            ))}
          </div>
        </div>

        <div className={styles?.programWindow}>
          <div className={styles?.windowTitleBar}>
            <div className={styles?.windowTitle}>
              <FileText size={16} />
              Key Features
            </div>
            <div className={styles?.windowControls}>
              <SquareMinus size={12} />
              <PanelTop size={12} />
              <SquareX size={12} />
            </div>
          </div>
          <div className={styles?.windowContent}>
            <ul>
              {keyFeatures.map((feature, index) => (
                <p key={index} className={styles?.windowContextDescription}>
                  - {feature}
                </p>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTechTab = () => (
    <div className={styles?.techContent}>
      <div className={styles?.techStack}>
        {technologyCategory.map((techCategory, index) => (
          <div key={index} className={styles?.techCategory}>
            <h4>{techCategory}</h4>
            <div className={styles?.techItems}>
              {technologyItems[index].map((tech, techIndex) => (
                <span key={techIndex} className={styles?.techItem}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles?.cardContainer}>
      <div className={styles?.titleBar}>
        <div className={styles?.titleSection}>
          <FaInternetExplorer size={14} />
          <span className={styles?.title}>
            {title} - Microsoft Internet Explorer
          </span>
        </div>
        <div className={styles?.browserActions}>
          <button className={styles?.windowBtn}>
            <SquareMinus size={14} />
          </button>
          <button className={styles?.windowBtn}>
            <PanelTop size={14} />
          </button>
          <button className={styles?.windowBtn}>
            <SquareX size={14} />
          </button>
        </div>
      </div>

      <div className={styles?.addressBar}>
        <div className={styles?.addressLabel}>Address</div>
        <div className={styles?.addressInput}>
          <FileSearch className={styles?.addressIcon} size={14} />
          <span className={styles?.addressText}>
            https://projects.portfolio.com/
            {title.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </div>
        <button className={styles?.goButton}>
          <span>Go</span>
        </button>
      </div>

      <div className={styles?.browserTabs}>
        <div
          className={`${styles?.tab} ${
            activeTab === "overview" ? styles?.activeTab : ""
          }`}
          onClick={() => handleTabClick("overview")}
        >
          <span>Overview</span>
        </div>
        <div
          className={`${styles?.tab} ${
            activeTab === "details" ? styles?.activeTab : ""
          }`}
          onClick={() => handleTabClick("details")}
        >
          <span>Details</span>
        </div>
        <div
          className={`${styles?.tab} ${
            activeTab === "tech" ? styles?.activeTab : ""
          }`}
          onClick={() => handleTabClick("tech")}
        >
          <span>Tech Stack</span>
        </div>
      </div>

      <div className={styles?.browserContent}>
        <div className={styles?.tabContent}>
          {activeTab === "overview" && renderOverviewTab()}
          {activeTab === "details" && renderDetailsTab()}
          {activeTab === "tech" && renderTechTab()}
        </div>
      </div>

      <div className={styles?.statusBar}>
        <div className={styles?.statusLeft}>
          <span className={styles?.statusText}>Done</span>
        </div>
        <div className={styles?.statusRight}>
          <span className={styles?.statusText}>Internet Zone</span>
        </div>
      </div>
    </div>
  );
}
