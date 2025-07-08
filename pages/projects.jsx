// @ts-nocheck
import React, { useState } from "react";
import styles from "./projects.module.css";
import FancyButton from "../components/FancyButton";
import { Sparkles, LaptopMinimal, Smartphone } from "lucide-react";
import WebCard from "../components/ProjectCardComponents/WebCard";
import MobileCard from "../components/ProjectCardComponents/MobileCard";
import {
  webProjects,
  mobileProjects,
  highlightedProjects
} from "../data/projectData";

export default function Projects() {
  const [projectCategory, setProjectCategory] = useState("highlighted");

  function handleSelectCategory(buttonType) {
    if (buttonType === "highlighted") {
      setProjectCategory("highlighted");
      console.log("highlighted");
    } else if (buttonType === "web") {
      setProjectCategory("web");
      console.log("web");
    } else if (buttonType === "mobile") {
      setProjectCategory("mobile");
      console.log("mobile");
    } else {
      console.log("error");
      return;
    }
  }

  const Highlighted = () => (
    <>
      <h1>This is highlighted Project</h1>
    </>
  );

  const Web = () => (
    <>
      {webProjects.map((project) => {
        const projectBackstory = project.projectDetails.backstory;
        const projecthowItWorks = project.projectDetails.howItWorks;
        console.log(projecthowItWorks);

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
          technologies={project.technologies} // Pass the whole object
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
        <ul className={styles.navigationButtonsContainer}>
          <li className={styles.navigationItems}>
            <FancyButton
              leftIcon={<LaptopMinimal />}
              rightIcon={<LaptopMinimal />}
              onClick={() => handleSelectCategory("web")}
            >
              Web
            </FancyButton>
          </li>
          <li className={styles.navigationItems}>
            <FancyButton
              leftIcon={<Sparkles />}
              rightIcon={<Sparkles />}
              onClick={() => handleSelectCategory("highlighted")}
            >
              Highlighted
            </FancyButton>
          </li>
          <li className={styles.navigationItems}>
            <FancyButton
              leftIcon={<Smartphone />}
              rightIcon={<Smartphone />}
              onClick={() => handleSelectCategory("mobile")}
            >
              Mobile
            </FancyButton>
          </li>
        </ul>
      </div>

      <div className={styles.projectSection}>
        {projectCategory === "web" && <Web />}
      </div>

      <div className={styles.mobileApps}>
        {projectCategory === "mobile" && <Mobile />}
      </div>
    </div>
  );
}
