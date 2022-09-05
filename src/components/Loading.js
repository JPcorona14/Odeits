import React from "react";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loadwrapp}>
      <div className={styles.load6}>
        <div className={styles.letterholder}>
          <div className={`${styles.l1} ${styles.letter}`}>L</div>
          <div className={`${styles.l2} ${styles.letter}`}>o</div>
          <div className={`${styles.l4} ${styles.letter}`}>d</div>
          <div className={`${styles.l3} ${styles.letter}`}>a</div>
          <div className={`${styles.l5} ${styles.letter}`}>i</div>
          <div className={`${styles.l6} ${styles.letter}`}>n</div>
          <div className={`${styles.l7} ${styles.letter}`}>g</div>
          <div className={`${styles.l8} ${styles.letter}`}>.</div>
          <div className={`${styles.l9} ${styles.letter}`}>.</div>
          <div className={`${styles.l10} ${styles.letter}`}>.</div>
        </div>
      </div>
    </div>
  );
}
