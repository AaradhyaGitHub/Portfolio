// pages/_app.jsx
// @ts-nocheck
import Navbar from "../components/Navbar";
import styles from "./app.module.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
