import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";


export default function Navbar() {
  return (
    
    <>
    
      <nav className={styles.mainContainer}>
        <ul className={styles.navList}>

          <li className={styles.navItems}>
            <Link href="/">Home</Link>
          </li>

          <li className={styles.navItems}>
            <Link href="/">Projects</Link>
          </li>

          <li className={styles.navItems}>
            {" "}
            <Link href="/">About</Link>
          </li>

          <li className={styles.navItems}>
            <Link href="/">Contact</Link>
          </li>

        </ul>
      </nav>
    </>
  );
}
