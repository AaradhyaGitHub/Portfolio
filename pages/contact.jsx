// @ts-nocheck
import React from "react";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.leftSection}>
          <div className={styles.info}>
            <h1 className={styles.title}>Let's Chat</h1>
            <div className={styles.imageSection}>
              <img src="/duck.jpg" alt="Profile" className={styles.image} />
            </div>
            <p className={styles.description}>
              I'd love to chat about anything from app development and AI/ML to
              software and cloud architecture. Or if you're down to run the
              streets of San Francisco for some street photography—or hit the mats
              for a sparring session—it's game on.{" "}
              <span className={styles.highlight}>Let's go</span>!
            </p>
          </div>
        </div>

        <div className={styles.rightSection}>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className={styles.input}
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className={styles.input}
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                className={styles.textarea}
                rows="5"
              />
            </div>
            
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}