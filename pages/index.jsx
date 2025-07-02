// @ts-nocheck
import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import {
  Heart,
  MapPin,
  Code,
  Coffee,
  Volume2,
  Camera,
  Zap,
  Play,
  Pause
} from "lucide-react";
import { MdOutlineSportsMartialArts } from "react-icons/md";
import MyJourney from "../components/MyJourney";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [showLoadingBar, setShowLoadingBar] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showTeacherCredit, setShowTeacherCredit] = useState(false);
  const [animationPhase, setAnimationPhase] = useState("typing"); // typing, moving, complete
  const [animationEnabled, setAnimationEnabled] = useState(true);
  const fullText =
    "❝ Programming can be the bridge between imagination and reality ❞";

  // Toggle function
  const toggleAnimation = () => {
    const newAnimationState = !animationEnabled;
    setAnimationEnabled(newAnimationState);

    // If turning animation off, immediately show final state
    if (!newAnimationState) {
      setTypedText(fullText);
      setShowTeacherCredit(true);
      setShowLoadingBar(false);
      setAnimationPhase("complete");
      setLoadingProgress(100);
    } else {
      // If turning animation on, reset to initial state
      setTypedText("");
      setShowTeacherCredit(false);
      setShowLoadingBar(true);
      setAnimationPhase("typing");
      setLoadingProgress(0);
    }
  };

  useEffect(() => {
    if (!animationEnabled) {
      // Skip animation, show final state immediately
      setTypedText(fullText);
      setShowTeacherCredit(true);
      setShowLoadingBar(false);
      setAnimationPhase("complete");
      setLoadingProgress(100);
      return;
    }

    // Reset states when animation is enabled
    setTypedText("");
    setShowTeacherCredit(false);
    setShowLoadingBar(true);
    setAnimationPhase("typing");
    setLoadingProgress(0);

    // Phase 1: Typing effect
    let index = 0;
    const typingTimer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        // Update loading progress proportionally
        setLoadingProgress((index / fullText.length) * 100);
        index++;
      } else {
        clearInterval(typingTimer);

        // Phase 2: Complete loading bar and show teacher credit
        setTimeout(() => {
          setLoadingProgress(100);
          setTimeout(() => {
            setShowLoadingBar(false);
            setShowTeacherCredit(true);

            // Phase 3: Move everything up and show rest of page
            setTimeout(() => {
              setAnimationPhase("moving");
              setTimeout(() => {
                setAnimationPhase("complete");
              }, 1000); // Increased duration to match CSS animation
            }, 500);
          }, 300);
        }, 200);
      }
    }, 50);

    return () => clearInterval(typingTimer);
  }, [animationEnabled]);

  return (
    <>
      <div className={styles.mainContainer}>
        {/* Animation Toggle Button */}
        <button
          onClick={toggleAnimation}
          className={styles.animationToggle}
          title={animationEnabled ? "Disable Animation" : "Enable Animation"}
        >
          {animationEnabled ? <Pause size={16} /> : <Play size={16} />}
          <span className={styles.toggleText}>
            {animationEnabled ? "Skip Animation" : "Play Animation"}
          </span>
        </button>

        {/* Subtle background pattern */}
        <div className={styles.backgroundPattern}></div>

        {/* Quote Container - Always present but positioned differently */}
        <div
          className={`${styles.quoteContainer} ${
            animationPhase === "typing"
              ? styles.centered
              : animationPhase === "moving"
              ? styles.movingToTop
              : styles.finalPosition
          }`}
        >
          <h1
            className={`${styles.quote} ${
              animationPhase === "typing"
                ? styles.largeQuote
                : styles.smallQuote
            }`}
          >
            {typedText.split(" ").map((word, index) => {
              if (word === "imagination" || word === "reality") {
                return (
                  <em key={index} className={styles.quoteHighlight}>
                    {word}{" "}
                  </em>
                );
              }
              return <span key={index}>{word} </span>;
            })}
            {animationPhase === "typing" && animationEnabled && (
              <span className={styles.cursor}>|</span>
            )}
          </h1>

          {/* Teacher Credit */}
          {showTeacherCredit && (
            <h2
              className={`${styles.teacherCredit} ${styles.fadeIn} ${
                animationPhase === "typing"
                  ? styles.largeCreditText
                  : styles.smallCreditText
              }`}
            >
              <em>- Mr. Lindsay</em>
              <Heart className={styles.headerIcon} size={12} />
            </h2>
          )}
        </div>

        {/* Loading Bar - Only show during typing */}
        {animationPhase === "typing" && showLoadingBar && animationEnabled && (
          <div className={styles.loadingContainer}>
            <div className={styles.loadingBar}>
              <div
                className={styles.loadingProgress}
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Hero Section - Only show after animation complete */}
        {animationPhase === "complete" && (
          <main
            className={`${styles.mainSection} ${
              animationEnabled ? styles.fadeInUp : ""
            }`}
          >
            <div className={styles.heroContainer}>
              {/* Main Hero Card */}
              <div className={styles.heroCard}>
                <div className={styles.heroGrid}>
                  {/* Left Side - Profile Info */}
                  <div className={styles.profileSection}>
                    <div className={styles.profileContent}>
                      <div className={styles.greeting}>
                        <span className={styles.greetingText}>Hello, I'm</span>
                      </div>

                      <h1 className={styles.name}>
                        Aaradhya{" "}
                        <em
                          style={{
                            fontSize: 35,
                            color: "#d33a3a",
                            letterSpacing: 5
                          }}
                        >
                          •आराध्य•
                        </em>
                      </h1>
                      <div className={styles.pronounciation}>
                        <p>
                          <em>[A-raa-dia]</em>
                        </p>
                      </div>

                      <div className={styles.infoList}>
                        <div className={styles.infoItem}>
                          <Code size={18} className={styles.icon} />
                          <span className={styles.infoText}>
                            Software Developer
                          </span>
                        </div>

                        <div className={styles.infoItem}>
                          <MapPin size={18} className={styles.icon} />
                          <span className={styles.infoText}>
                            San Francisco, CA
                          </span>
                        </div>

                        <div className={styles.infoItem}>
                          <Zap size={18} className={styles.icon} />
                          <span className={styles.infoText}>
                            Photographer & BJJ Practicionare
                          </span>
                        </div>
                      </div>

                      <div className={styles.description}>
                        <p className={styles.descriptionText}>
                          Passionate about developing creative solutions to
                          problems big and small
                        </p>
                      </div>

                      {/* Subtle accent line */}
                      <div className={styles.accentLine}></div>
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className={styles.imageSection}>
                    <div className={styles.imageContainer}>
                      <img
                        src="/bioImage2.jpg"
                        alt="Aaradhya"
                        className={styles.profileImage}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className={styles.accentElement1}></div>
              <div className={styles.accentElement2}></div>
            </div>
          </main>
        )}

        {/* Subtle scroll indicator - Only show when complete */}
        {animationPhase === "complete" && (
          <div
            className={`${styles.scrollIndicator} ${
              animationEnabled ? styles.fadeIn : ""
            }`}
          >
            <div className={styles.scrollIndicatorContainer}>
              <div className={styles.scrollIndicatorDot}></div>
            </div>
          </div>
        )}

        {/* MyJourney Component - Only show after animation complete */}
        {animationPhase === "complete" ? (
          <>
            <MyJourney /> <h1>Hello</h1>
          </>
        ) : null}
      </div>
    </>
  );
}
