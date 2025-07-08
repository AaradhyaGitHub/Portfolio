// @ts-nocheck
import React, { useState } from "react";
import styles from "./MobileCard.module.css";

import {
  Battery,
  Wifi,
  Signal,
  Home,
  ArrowLeft,
  MoreHorizontal,
  ExternalLink,
  Github,
  Play,
  Settings,
  FileText,
  Folder,
  Circle
} from "lucide-react";

export default function MobileCard({
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
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Parse technologies from the project data structure
  const parseTechnologies = () => {
    if (typeof technologies === "object" && technologies !== null) {
      return Object.entries(technologies).map(([category, items]) => ({
        category: category.charAt(0).toUpperCase() + category.slice(1),
        items: Array.isArray(items) ? items : [items]
      }));
    }
    return [];
  };

  const techData = parseTechnologies();

  const renderOverviewTab = () => (
    <div className={styles.overviewContent}>
      <div className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <img className={styles.heroImage} src={image} alt={title} />
          <div className={styles.heroOverlay}>
            <div className={styles.heroActions}>
              {viewProjectLink && (
                <button className={styles.heroActionBtn}>
                  <ExternalLink size={10} />
                  <span>Live</span>
                </button>
              )}
              {viewGithubLink && (
                <button className={styles.heroActionBtn}>
                  <Github size={10} />
                  <span>Code</span>
                </button>
              )}
              {viewDemoLink && (
                <button className={styles.heroActionBtn}>
                  <Play size={10} />
                  <span>Demo</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.projectInfo}>
        <div className={styles.infoSection}>
          <h3 className={styles.infoTitle}>About {title}</h3>
          <p className={styles.infoDescription}>{description}</p>
        </div>

        <div className={styles.quickStats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{techData.length}</div>
            <div className={styles.statLabel}>Tech Stack</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{keyFeatures?.length || 0}</div>
            <div className={styles.statLabel}>Features</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>3</div>
            <div className={styles.statLabel}>Links</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDetailsTab = () => (
    <div className={styles.detailsContent}>
      <div className={styles.detailSection}>
        <div className={styles.detailCard}>
          <div className={styles.detailHeader}>
            <div className={styles.detailIcon}>
              <Folder size={12} />
            </div>
            <h4 className={styles.detailTitle}>Background</h4>
          </div>
          <p className={styles.detailText}>{backStory}</p>
        </div>

        <div className={styles.detailCard}>
          <div className={styles.detailHeader}>
            <div className={styles.detailIcon}>
              <Settings size={12} />
            </div>
            <h4 className={styles.detailTitle}>How It Works</h4>
          </div>
          <div className={styles.detailList}>
            {howItWorks?.map((working, index) => (
              <div key={index} className={styles.detailListItem}>
                <div className={styles.bulletPoint}></div>
                <span className={styles.detailText}>{working}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.detailCard}>
          <div className={styles.detailHeader}>
            <div className={styles.detailIcon}>
              <FileText size={12} />
            </div>
            <h4 className={styles.detailTitle}>Key Features</h4>
          </div>
          <div className={styles.detailList}>
            {keyFeatures?.map((feature, index) => (
              <div key={index} className={styles.detailListItem}>
                <div className={styles.bulletPoint}></div>
                <span className={styles.detailText}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTechTab = () => (
    <div className={styles.techContent}>
      <div className={styles.techStack}>
        {techData.map((techCategory, index) => (
          <div key={index} className={styles.techCategory}>
            <h4 className={styles.techCategoryTitle}>
              {techCategory.category}
            </h4>
            <div className={styles.techItems}>
              {techCategory.items.map((tech, techIndex) => (
                <span key={techIndex} className={styles.techItem}>
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
    <div className={styles.cardWrapper}>
      {/* Main Title - Now at the top */}
      <h2 className={styles.mainTitle}>{title}</h2>
      
      <div className={styles.cardContainer}>
        {/* Left iPhone - Project Information */}
        <div className={styles.iPhone}>
          <div className={styles.iPhoneFrame}>
            {/* Status Bar */}
            <div className={styles.statusBar}>
              <div className={styles.statusLeft}>
                <span className={styles.time}>9:41</span>
              </div>
              <div className={styles.statusRight}>
                <Signal size={10} />
                <Wifi size={10} />
                <Battery size={10} />
              </div>
            </div>

            {/* Navigation Bar */}
            <div className={styles.navBar}>
              <ArrowLeft size={16} />
              <h2 className={styles.appTitle}>{title}</h2>
              <MoreHorizontal size={16} />
            </div>

            {/* Tab Navigation */}
            <div className={styles.tabNavigation}>
              <button
                className={`${styles.tabBtn} ${
                  activeTab === "overview" ? styles.activeTabBtn : ""
                }`}
                onClick={() => handleTabClick("overview")}
              >
                Overview
              </button>
              <button
                className={`${styles.tabBtn} ${
                  activeTab === "details" ? styles.activeTabBtn : ""
                }`}
                onClick={() => handleTabClick("details")}
              >
                Details
              </button>
              <button
                className={`${styles.tabBtn} ${
                  activeTab === "tech" ? styles.activeTabBtn : ""
                }`}
                onClick={() => handleTabClick("tech")}
              >
                Tech
              </button>
            </div>

            {/* Content Area */}
            <div className={styles.contentArea}>
              {activeTab === "overview" && renderOverviewTab()}
              {activeTab === "details" && renderDetailsTab()}
              {activeTab === "tech" && renderTechTab()}
            </div>

            {/* Home Button */}
            <div className={styles.homeButton}>
              <div className={styles.homeButtonInner}>
                <Home size={16} />
              </div>
            </div>

            {/* Home Indicator */}
            <div className={styles.homeIndicator}></div>
          </div>
        </div>

        {/* Right iPhone - Demo Video */}
        <div className={styles.iPhoneDemo}>
          <div className={styles.iPhoneDemoFrame}>
            {/* Status Bar */}
            <div className={styles.statusBar}>
              <div className={styles.statusLeft}>
                <span className={styles.time}>9:41</span>
              </div>
              <div className={styles.statusRight}>
                <Signal size={10} />
                <Wifi size={10} />
                <Battery size={10} />
              </div>
            </div>

            {/* Video Header */}
            <div className={styles.videoHeader}>
              <ArrowLeft size={16} />
              <h2 className={styles.appTitle}>Demo</h2>
              <MoreHorizontal size={16} />
            </div>

            {/* Video Container */}
            <div className={styles.videoContainer}>
              <div className={styles.videoFrame}>
                <iframe
                  className={styles.iframe}
                  src="https://www.youtube.com/embed/iRc0EPz0I4w"
                  title="Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Home Button */}
            <div className={styles.homeButton}>
              <div className={styles.homeButtonInner}>
                <Home size={16} />
              </div>
            </div>

            {/* Home Indicator */}
            <div className={styles.homeIndicator}></div>
          </div>
        </div>
      </div>
    </div>
  );
}