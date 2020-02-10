import React from "react";

import styles from "./evaluation.module.scss";
import wordpairsUrl from "./wordpairs.svg";
import portfolioUrl from "./portfolio.svg";
import mediansUrl from "./medians.svg";

export const Evaluation: React.FC = () => (
  <div className={styles.wrapper}>
    <img
      src={portfolioUrl}
      alt="AttrakDiff Portfolio"
      className={styles.figure}
    />
    <img
      src={wordpairsUrl}
      alt="AttrakDiff Wortpaare"
      className={styles.figure}
    />
    <img
      src={mediansUrl}
      alt="AttrakDiff Mittelwerte"
      className={styles.figure}
    />
  </div>
);
