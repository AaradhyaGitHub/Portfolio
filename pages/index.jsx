// @ts-nocheck
import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import { MapPin, Code, Camera, ArrowRight, Volume2 } from "lucide-react";
import { Heart, Brain } from "lucide-react";

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
                <div className={styles.greetingsContainer}>
                  <h2 className={styles.greeting}>Hello, I am Aaradhya</h2>
                  <div className={styles.nepali}>- आराध्य</div>
                </div>

                {/* Pronunciation Guide */}
                <div className={styles.pronunciationGuide}>
                  <Volume2 className={styles.pronounciationIcon} size={16}/>
                  <span className={styles.pronunciation}>
                    <em>[A-raa-dia]</em>
                  </span>
                </div>
              </div>

              {/* Status Tags */}
              <div className={styles.statusGrid}>
                <div className={styles.statusItem}>
                  <MapPin size={16} color="#ef4444" />
                  <span>SAN FRANCISCO, CA</span>
                </div>
                <div className={styles.statusItem}>
                  <Code size={16} color="#ef4444" />
                  <span>SOFTWARE ENGINEER</span>
                </div>
                <div className={styles.statusItem}>
                  <Camera size={16} color="#ef4444" />
                  <span>PHOTOGRAPHER</span>
                </div>
              </div>
            </div>

            {/* Enhanced Bio Content */}
            <div className={styles.bioSection}>
              <div className={styles.bioStatement}>
                <div className={`${styles.bioItem} ${styles.bioItemPrimary}`}>
                  <Code className={styles.icon} />
                  <p className={styles.bioText}>
                    Bay Area developer passionate about crafting scalable{" "}
                    <em className={styles.highlight}>full-stack web</em> and{" "}
                    <em className={styles.highlight}>mobile applications</em>{" "}
                    that solve real-world problems.
                  </p>
                </div>

                <div className={`${styles.bioItem} ${styles.bioItemSecondary}`}>
                  <Heart className={styles.icon} />
                  <div className={styles.bioText}>
                    <p className={styles.bioTextMain}>
                      My High School CS teacher Mr. Lindsay once said:{" "}
                      <em className={styles.highlight}>
                        "Programming is the bridge from imagination to reality."
                      </em> That's when I found my calling.
                    </p>
                  </div>
                </div>

                <div className={`${styles.bioItem} ${styles.bioItemTertiary}`}>
                  <Brain className={styles.icon} />
                  <div className={styles.bioText}>
                    <p className={styles.bioTextMain}>
                      My Other Interests:
                    </p>
                    <ul className={styles.bioList}>
                      <li className={styles.bioListItem}>
                        <span className={styles.bioEmoji}>📸</span>
                        <em className={styles.highlight}>Photography</em>
                      </li>
                      <li className={styles.bioListItem}>
                        <span className={styles.bioEmoji}>🥷</span>
                        <em className={styles.highlight}>
                          Brazilian Jiu-Jitsu
                        </em>
                      </li>
                      <li className={styles.bioListItem}>
                        <span className={styles.bioEmoji}>🏋️‍♂️</span>
                        <em className={styles.highlight}>Weight-Lifting</em>
                      </li>
                      <li className={styles.bioListItem}>
                        <span className={styles.bioEmoji}>🏃‍♂️</span>
                        <em className={styles.highlight}>Running Half Marathons</em>
                      </li>
                    </ul>
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
