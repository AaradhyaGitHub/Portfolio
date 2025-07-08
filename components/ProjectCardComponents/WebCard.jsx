// @ts-nocheck
import React, { useState } from "react";
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
  FileText,
  ArrowLeft,
  ArrowRight,
  Square,
  RotateCcw,
  Home
} from "lucide-react";

export default function WebCard({
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
  viewDemoLink
}) {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
                  <ExternalLink size={16} />
                  Live Site
                </button>
              )}
              {viewGithubLink && (
                <button className={styles?.heroActionBtn}>
                  <Github size={16} />
                  Source
                </button>
              )}
              {viewDemoLink && (
                <button className={styles?.heroActionBtn}>
                  <Play size={16} />
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
              <Folder size={20} />
              Project Background
            </div>
            <div className={styles?.windowControls}>
              <SquareMinus size={14} />
              <PanelTop size={14} />
              <SquareX size={14} />
            </div>
          </div>
          <div className={styles?.windowContent}>
            <p className={styles?.windowContextDescription}>{backStory}</p>
          </div>
        </div>

        <div className={styles?.programWindow}>
          <div className={styles?.windowTitleBar}>
            <div className={styles?.windowTitle}>
              <Settings size={20} />
              How It Works
            </div>
            <div className={styles?.windowControls}>
              <SquareMinus size={14} />
              <PanelTop size={14} />
              <SquareX size={14} />
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
              <FileText size={20} />
              Key Features
            </div>
            <div className={styles?.windowControls}>
              <SquareMinus size={14} />
              <PanelTop size={14} />
              <SquareX size={14} />
            </div>
          </div>
          <div className={styles?.windowContent}>
            <ul>
              {keyFeatures.map((feature, index) => (
                <p key={index} className={styles?.windowContextDescription}>
                  {" "}
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
          <FaInternetExplorer size={16} />
          <span className={styles?.title}>
            {title} - Microsoft Internet Explorer
          </span>
        </div>
        <div className={styles?.browserActions}>
          <button className={styles?.windowBtn}>
            <SquareMinus size={16} />
          </button>
          <button className={styles?.windowBtn}>
            <PanelTop size={16} />
          </button>
          <button className={styles?.windowBtn}>
            <SquareX size={16} />
          </button>
        </div>
      </div>

      <div className={styles?.menuBar}>
        <div className={styles?.menuItems}>
          <span className={styles?.menuItem}>File</span>
          <span className={styles?.menuItem}>Edit</span>
          <span className={styles?.menuItem}>View</span>
          <span className={styles?.menuItem}>Favorites</span>
          <span className={styles?.menuItem}>Tools</span>
          <span className={styles?.menuItem}>Help</span>
        </div>
      </div>

      <div className={styles?.toolbar}>
        <div className={styles?.toolbarButtons}>
          <button className={styles?.toolBtn}>
            <ArrowLeft size={18} color={"blue"} />
          </button>
          <button className={styles?.toolBtn}>
            <ArrowRight size={18} color={"blue"} />
          </button>
          <button className={styles?.toolBtn}>
            <Square size={18} color={"red"} />
          </button>
          <button className={styles?.toolBtn}>
            <RotateCcw size={18} color={"orange"} />
          </button>
          <button className={styles?.toolBtn}>
            <Home size={18} color={"green"} />
          </button>
        </div>
      </div>

      <div className={styles?.addressBar}>
        <div className={styles?.addressLabel}>Address</div>
        <div className={styles?.addressInput}>
          <FileSearch className={styles?.addressIcon} size={16} />
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
