import React from "react";
import {
  Mail,
  ArrowUp,
  Github,
  Linkedin,
  Youtube,
  Instagram
} from "lucide-react";
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
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              className={styles.socialLink}
            >
              <Linkedin size={18} />
            </a>
            <a href="mailto:hello@aaradhya.dev" className={styles.socialLink}>
              <Mail size={18} />
            </a>
            <a
              href="https://youtube.com/@yourprofile"
              className={styles.socialLink}
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              className={styles.socialLink}
            >
              <Instagram size={18} />
            </a>
          </div>

          <div className={styles.actions}>
            <span className={styles.copyright}>© 2025 Aaradhya</span>
            <button onClick={scrollToTop} className={styles.scrollTop}>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
