// @ts-nocheck
import React, { useState, useEffect } from "react";
import styles from "./projects.module.css";
import { Sparkles, LaptopMinimal, Smartphone, Eye, EyeOff } from "lucide-react";
import WebCard from "../components/ProjectCardComponents/WebCard";
import MobileCard from "../components/ProjectCardComponents/MobileCard";
import {
  webProjects,
  mobileProjects,
  highlightedProjects
} from "../data/projectData";
import HighlightedCard from "../components/ProjectCardComponents/HighlightedCard";

export default function Projects() {
  const [projectCategory, setProjectCategory] = useState("highlighted");
  const [loadingAnimationEnabled, setLoadingAnimationEnabled] = useState(true);
  const [loadingStates, setLoadingStates] = useState([]);
  // New state to track tab state for each WebCard
  const [webCardTabs, setWebCardTabs] = useState({});

  // Initialize loading states when web category is selected
  useEffect(() => {
    if (projectCategory === "web" && loadingAnimationEnabled) {
      setLoadingStates(
        webProjects.map(() => ({ isLoading: true, duration: 0 }))
      );
    } else {
      setLoadingStates([]);
    }
  }, [projectCategory, loadingAnimationEnabled]);

  function handleSelectCategory(buttonType) {
    if (buttonType === "highlighted") {
      setProjectCategory("highlighted");
    } else if (buttonType === "web") {
      setProjectCategory("web");
    } else if (buttonType === "mobile") {
      setProjectCategory("mobile");
    } else {
      return;
    }
  }

  const handleVideoEnd = (index) => {
    setLoadingStates((prev) =>
      prev.map((state, i) =>
        i === index ? { ...state, isLoading: false } : state
      )
    );
  };

  // Function to handle tab changes for individual WebCards
  const handleWebCardTabChange = (projectId, tab) => {
    console.log("Tab change:", { projectId, tab, currentState: webCardTabs });
    setWebCardTabs((prev) => ({
      ...prev,
      [projectId]: tab
    }));
  };

  // Function to get the active tab for a project
  const getActiveTab = (projectId) => {
    const activeTab = webCardTabs[projectId] || "overview";
    console.log("Getting active tab:", {
      projectId,
      activeTab,
      allTabs: webCardTabs
    });
    return activeTab;
  };

  const LoadingVideo = ({ index, onVideoEnd }) => {
    const loadingDurations = [2000, 2100, 2200]; // 3s, 7s, 12s
    const duration =
      loadingDurations[Math.min(index, loadingDurations.length - 1)];

    useEffect(() => {
      const timer = setTimeout(() => {
        onVideoEnd(index);
      }, duration);

      return () => clearTimeout(timer);
    }, [index, duration, onVideoEnd]);

    return (
      <div className={styles.loadingVideoContainer}>
        <video className={styles.loadingVideo} autoPlay muted playsInline loop>
          <source
            src="https://res.cloudinary.com/de3cxnkuw/video/upload/f_auto,q_auto:good,w_400/v1752387050/windowsXp_oftq2n.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className={styles.loadingText}>Loading Project {index + 1}...</div>
      </div>
    );
  };

  const Highlighted = () => (
    <>
      {highlightedProjects.map((project) => {
        const projectBackstory = project.projectDetails.backstory;
        const projecthowItWorks = project.projectDetails.howItWorks;
        const projectKeyFeatures = project.projectDetails.keyFeatures;
        const projectTechnologiesArray = Object.entries(project.technologies);
        const technologyCategory = projectTechnologiesArray.map(
          (tech) => tech[0]
        );
        const technologyItems = projectTechnologiesArray.map((tech) =>
          tech[1].map((techItem) => techItem)
        );
        return (
          <HighlightedCard
            key={project.id}
            type={project.type}
            image={project.image}
            title={project.title}
            logo={project.logo}
            description={project.description}
            technologyCategory={technologyCategory}
            technologyItems={technologyItems}
            backStory={projectBackstory}
            howItWorks={projecthowItWorks}
            keyFeatures={projectKeyFeatures}
            viewProjectLink={project.links.live}
            viewGithubLink={project.links.github}
            viewDemoLink={project.links.demo}
          />
        );
      })}
    </>
  );

  const Web = () => (
    <>
      {webProjects.map((project, index) => {
        const shouldShowLoading =
          loadingAnimationEnabled && loadingStates[index]?.isLoading;

        if (shouldShowLoading) {
          return (
            <LoadingVideo
              key={`loading-${index}`}
              index={index}
              onVideoEnd={handleVideoEnd}
            />
          );
        }

        // Generate a unique ID for each project if it doesn't exist
        const projectId = project.id || `web-project-${index}`;

        const projectBackstory = project.projectDetails.backstory;
        const projecthowItWorks = project.projectDetails.howItWorks;
        const projectKeyFeatures = project.projectDetails.keyFeatures;
        const projectTechnologiesArray = Object.entries(project.technologies);
        const technologyCategory = projectTechnologiesArray.map(
          (tech) => tech[0]
        );
        const technologyItems = projectTechnologiesArray.map((tech) =>
          tech[1].map((techItem) => techItem)
        );

        return (
          <WebCard
            key={projectId}
            projectId={projectId}
            orientation={"web"}
            image={project.image}
            title={project.title}
            description={project.description}
            technologyCategory={technologyCategory}
            technologyItems={technologyItems}
            backStory={projectBackstory}
            howItWorks={projecthowItWorks}
            keyFeatures={projectKeyFeatures}
            viewProjectLink={project.links.live}
            viewGithubLink={project.links.github}
            viewDemoLink={project.links.demo}
            activeTab={getActiveTab(projectId)}
            onTabChange={handleWebCardTabChange}
          />
        );
      })}
    </>
  );

  const Mobile = () => (
    <>
      {mobileProjects.map((project) => (
        <MobileCard
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          backStory={project.projectDetails.backstory}
          howItWorks={project.projectDetails.howItWorks}
          keyFeatures={project.projectDetails.keyFeatures}
          viewProjectLink={project.links.live}
          viewGithubLink={project.links.github}
          viewDemoLink={project.links.demo}
        />
      ))}
    </>
  );

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Projects</h1>
        <button
          className={styles.loadingToggle}
          onClick={() => setLoadingAnimationEnabled(!loadingAnimationEnabled)}
          title={
            loadingAnimationEnabled
              ? "Disable loading animation"
              : "Enable loading animation"
          }
        >
          {loadingAnimationEnabled ? <Eye size={20} /> : <EyeOff size={20} />}
          <span className={styles.toggleText}>
            {loadingAnimationEnabled ? "Loading ON" : "Loading OFF"}
          </span>
        </button>
      </div>

      <div className={styles.navigation}>
        <div className={styles.navigationButtonsContainer}>
          <button
            className={`${styles.navigationButton} ${
              projectCategory === "web" ? styles.active : ""
            }`}
            onClick={() => handleSelectCategory("web")}
          >
            <LaptopMinimal size={16} />
            Web
          </button>

          <button
            className={`${styles.navigationButton} ${
              projectCategory === "highlighted" ? styles.active : ""
            }`}
            onClick={() => handleSelectCategory("highlighted")}
          >
            <Sparkles size={16} />
            Highlighted
          </button>

          <button
            className={`${styles.navigationButton} ${
              projectCategory === "mobile" ? styles.active : ""
            }`}
            onClick={() => handleSelectCategory("mobile")}
          >
            <Smartphone size={16} />
            Mobile
          </button>
        </div>
      </div>

      <div className={styles.projectSection}>
        {projectCategory === "web" && <Web />}
      </div>

      <div className={styles.mobileApps}>
        {projectCategory === "mobile" && <Mobile />}
      </div>

      <div className={styles.highlightedProjects}>
        {projectCategory === "highlighted" && <Highlighted />}
      </div>
    </div>
  );
}
