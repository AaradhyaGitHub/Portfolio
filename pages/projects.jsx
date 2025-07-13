// @ts-nocheck
import React, { useState } from "react";
import styles from "./projects.module.css";
import { Sparkles, LaptopMinimal, Smartphone } from "lucide-react";
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
      {webProjects.map((project) => {
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
          />
        );
      })}
    </>
  );

  const Mobile = () => (
    <>
      {mobileProjects.map((project) => (
        <MobileCard
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
      <h1 className={styles.header}>Projects</h1>
      
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