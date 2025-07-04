import React from "react";
// React Icons - most popular and well-maintained icon library
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { HiMail, HiArrowUp } from "react-icons/hi";
import styles from "./Footer.module.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            Aaradhya
            <span className={styles.nepali}>आराध्य</span>
          </div>

          <div className={styles.social}>
            <a
              href="https://github.com/yourprofile"
              className={styles.socialLink}
              aria-label="GitHub Profile"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              className={styles.socialLink}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:hello@aaradhya.dev"
              className={styles.socialLink}
              aria-label="Email Contact"
            >
              <HiMail size={18} />
            </a>
            <a
              href="https://youtube.com/@yourprofile"
              className={styles.socialLink}
              aria-label="YouTube Channel"
            >
              <FaYoutube size={18} />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              className={styles.socialLink}
              aria-label="Instagram Profile"
            >
              <FaInstagram size={18} />
            </a>
          </div>

          <div className={styles.actions}>
            <span className={styles.copyright}>© 2025 Aaradhya</span>
            <button
              onClick={scrollToTop}
              className={styles.scrollTop}
              aria-label="Scroll to top"
            >
              <HiArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
