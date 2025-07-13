import React from "react";
import styles from "./FancyButton.module.css";

export default function FancyButton({ leftIcon, children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {leftIcon}
      {children}
    </button>
  );
}
