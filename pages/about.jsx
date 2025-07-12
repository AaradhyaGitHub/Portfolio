import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img
          src="/api/placeholder/300/400"
          alt="Profile"
          className={styles.profileImage}
        />
      </div>

      <div className={styles.contentSection}>
        <div className={styles.content}>
          <h1 className={styles.greeting}>Hi, my name is John Doe</h1>

          <p className={styles.description}>
            I'm a passionate web developer with a love for creating beautiful
            and functional user experiences. I specialize in React, JavaScript,
            and modern web technologies.
          </p>

          <p className={styles.description}>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open source projects, or sharing my knowledge
            through tutorials and blog posts.
          </p>

          <div className={styles.socialLinks}>
            <a href="https://github.com" className={styles.socialLink}>
              <FaGithub />
            </a>
            <a href="https://linkedin.com" className={styles.socialLink}>
              <FaLinkedin />
            </a>
            <a href="https://youtube.com" className={styles.socialLink}>
              <FaYoutube />
            </a>
            <a href="https://instagram.com" className={styles.socialLink}>
              <FaInstagram />
            </a>
            <a href="mailto:john@example.com" className={styles.socialLink}>
              <HiMail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
