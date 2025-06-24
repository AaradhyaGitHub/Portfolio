// @ts-nocheck
import Navbar from "../components/Navbar";
import styles from "./app.module.css";
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Birthstone&family=Yatra+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.mainContainer}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
