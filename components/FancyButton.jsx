import React from "react";
import styles from "./FancyButton.module.css";
export default function FancyButton({
  leftIcon,
  rightIcon,
  children,
  onClick
}) {
  return (
    <button className={styles.button} onClick={onClick}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
