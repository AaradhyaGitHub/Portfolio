// @ts-nocheck
import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className={styles.mainContainer}>
        <header className={styles.header}>
          <h1 className={styles.quote}>
            ❝ Programming can be the bridge between{" "}
            <em className={styles.quoteHighlight}>imagination</em> and{" "}
            <em className={styles.quoteHighlight}>reality</em> ❞
          </h1>
          <h2 className={styles.teacherCredit}>
            <em> - Mr. Lindsay </em>{" "}
            <Heart className={styles.headerIcon} size={12} />
          </h2>
        </header>
      </div>
    </>
  );
}
