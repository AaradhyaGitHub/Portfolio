import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <>
      <nav className={styles.mainContainer}>
        <ul className={styles.navList}>
          <li className={styles.navItems}>
            <Link href="/" className={isActive("/") ? styles.active : ""}>
              Home
            </Link>
          </li>

          <li className={styles.navItems}>
            <Link
              href="/projects"
              className={isActive("/projects") ? styles.active : ""}
            >
              Projects
            </Link>
          </li>

          <li className={styles.navItems}>
            <Link
              href="/photography"
              className={isActive("/photography") ? styles.active : ""}
            >
              Photography
            </Link>
          </li>

          <li className={styles.navItems}>
            <Link
              href="/about"
              className={isActive("/about") ? styles.active : ""}
            >
              About
            </Link>
          </li>

          <li className={styles.navItems}>
            <Link
              href="/contact"
              className={isActive("/contact") ? styles.active : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
