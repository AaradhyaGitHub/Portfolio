// @ts-nocheck
import React from "react";
import {
  FileText,
  Code,
  Database,
  Globe,
  ChevronsLeft,
  ChevronsRight
} from "lucide-react";
import styles from "./MyArsenal.module.css";
import Donut from "./Donut";
import FancyButton from "./FancyButton";

export default function MyArsenal() {
  const frontEndSkills = [
    {
      name: "HTML/CSS/JS",
      icon: Code,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      name: "React.js",
      icon: Code,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "Next.js",
      icon: Globe,
      image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg"
    },
    {
      name: "Redux/Context",
      icon: Database,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
    },
    {
      name: "React Native",
      icon: Code,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    }
  ];

  const backEndSkills = [
    {
      name: "MongoDB",
      icon: Database,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
      name: "Express.js",
      icon: Code,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    {
      name: "Node.js",
      icon: Code,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    }
  ];

  const otherSkills = [
    {
      name: "Python",
      icon: Code,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      name: "Firebase",
      icon: Database,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
    },
    {
      name: "C/C++",
      icon: Code,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
    },
    {
      name: "AWS",
      icon: Globe,
      image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>What I Can Do</h1>
        <p className={styles.buttonContainer}>
          <FancyButton
            leftIcon={<ChevronsRight />}
            rightIcon={<ChevronsLeft />}
          >
            View Projects
          </FancyButton>
        </p>
      </div>

      <div className={styles.donutsContainer}>
        <Donut
          title="Frontend"
          skills={frontEndSkills}
          centerIcon={Code}
          colors={["#6366f1", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"]}
        />

        <Donut
          title="Backend"
          skills={backEndSkills}
          centerIcon={Database}
          colors={["#10b981", "#1e293b", "#059669"]}
        />

        <Donut
          title="Other"
          skills={otherSkills}
          centerIcon={Globe}
          colors={["#3b82f6", "#8a2b03", "#6b7280", "#f97316"]}
        />
      </div>
    </div>
  );
}
