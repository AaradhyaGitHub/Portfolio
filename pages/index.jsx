// @ts-nocheck
import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import { MapPin, Code, Camera, ArrowRight } from "lucide-react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.container}>
      {/* Background Grid */}
      <div className={styles.gridBackground}></div>

      {/* Mouse Follower */}
      <div
        className={styles.mouseFollower}
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`
        }}
      ></div>

      {/* Main Content */}
      <main className={styles.main}>
        <div
          className={`${styles.heroGrid} ${isLoaded ? styles.fadeInUp : ""}`}
        >
          {/* Image Section */}
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img
                src="/bioImage.jpg"
                alt="Aaradhya"
                className={styles.profileImage}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>

          {/* Content Section */}
          <div className={styles.contentSection}>
            <div className={styles.introBlock}>
              <div className={styles.nameSection}>
                <h2 className={styles.greeting}>HELLO, I'M AARADHYA</h2>

                {/* Pronunciation Guide */}
                <div className={styles.pronunciationGuide}>
                  <span className={styles.pronunciation}>[ A-RAA-DIA ]</span>
                  <span className={styles.pronunciation}>आराध्य</span>
                </div>
              </div>

              {/* Status Tags */}
              <div className={styles.statusGrid}>
                <div className={styles.statusItem}>
                  <MapPin size={16} />
                  <span>SAN FRANCISCO, CA</span>
                </div>
                <div className={styles.statusItem}>
                  <Code size={16} />
                  <span>SOFTWARE ENGINEER</span>
                </div>
                <div className={styles.statusItem}>
                  <Camera size={16} />
                  <span>PHOTOGRAPHER</span>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className={styles.bioSection}>
              <div className={styles.bioStatement}>
                <p className={styles.bioText}>
                  Based in San Francisco, I craft intuitive{" "}
                  <em className={styles.highlight}>full-stack applications</em>
                </p>
              </div>

              <div className={styles.activitiesCard}>
                <p className={styles.bioText}>
                  When not coding, you'll find me:
                </p>
                <div className={styles.activitiesList}>
                  <div className={styles.activityItem}>
                    <div className={styles.activityDot}></div>
                    <span>practicing Brazilian Jiu Jitsu</span>
                  </div>
                  <div className={styles.activityItem}>
                    <div className={styles.activityDot}></div>
                    <span>lifting weights</span>
                  </div>
                  <div className={styles.activityItem}>
                    <div className={styles.activityDot}></div>
                    <span>taking pictures around the Bay Area</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.actionSection}>
              <button className={styles.primaryButton}>
                <span>VIEW PROJECTS</span>
                <ArrowRight size={16} />
              </button>

              <button className={styles.secondaryButton}>
                <span>DOWNLOAD CV</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`${styles.statsSection} ${
            isLoaded ? styles.fadeInUp : ""
          }`}
        >
          <div className={styles.statItem}>
            <span className={styles.statNumber}>05+</span>
            <span className={styles.statLabel}>YEARS EXPERIENCE</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>PROJECTS COMPLETED</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>∞</span>
            <span className={styles.statLabel}>COFFEE CONSUMED</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span>© 2025 AARADHYA</span>
          <span>DESIGNED & BUILT WITH PRECISION</span>
        </div>
      </footer>
    </div>
  );
}
