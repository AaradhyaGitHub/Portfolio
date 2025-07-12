import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Heart } from "lucide-react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img src="/about.JPG" alt="Profile" className={styles.profileImage} />

          {/* Social Links positioned under the image */}
          <div className={styles.socialLinks}>
            <a
              href="https://github.com"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://youtube.com"
              className={styles.socialLink}
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://instagram.com"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:john@example.com"
              className={styles.socialLink}
              aria-label="Email"
            >
              <HiMail />
            </a>
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.content}>
            <h1 className={styles.greeting}>Hi, I'm Aaradhya</h1>

            <p className={styles.description}>
              I'm a developer who thrives on crafting web and mobile apps with
              React and React Native, building scalable systems that deliver
              fast, reliable experiences users can trust. There's a thrill in
              piecing together code that feels like solving a puzzle, whether
              it's with React's LEGO-like flexibility or the precision of C/C++
              for high-performance needs.
            </p>

            <p className={styles.description}>
              To me, learning is a moral duty — a way to keep growing and
              pushing boundaries. These days, I'm diving into Go, exploring AWS
              infrastructure, and uncovering how AI/ML can transform everyday
              user experiences into something extraordinary.
            </p>

            <p className={styles.description}>
              Beyond code, I'm driven by storytelling and capturing unique
              perspectives. Aerial photography blends my love for aeronautics,
              media, and tech into something magical, while street photography
              keeps me connected to the raw, unfiltered moments of life. You can
              explore some of my work in the Photography tab or by{" "}
              <a href="/photography" className={styles.link}>
                clicking here
              </a>
              .
            </p>

            <p className={styles.description}>
              Fitness grounds me. Five years of Brazilian Jiu-Jitsu has taught
              me patience and resilience, and running — especially tackling the
              Golden Gate Half — clears my mind, helping me find balance amidst
              the chaos.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.thankYou}>
        <Heart size={16} className={styles.heartIcon} />
        <span>Thank you for visiting</span>
      </div>
    </div>
  );
};

export default About;
