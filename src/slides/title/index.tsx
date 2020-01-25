import React from "react";

import { Frame } from "../../components/frame";

import styles from "./title.module.scss";
import logosUrl from "./hsd-logos.svg";

export const Title: React.FC = () => (
  <Frame>
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.label}>Kolloquium von Paul Kretschel</div>
        <span className={styles.heading}>
          Handbasiertes Sculpting
          <br />
          in Virtual Reality
        </span>
        <img src={logosUrl} alt="HSD Logos" className={styles.logos} />
      </div>
    </div>
  </Frame>
);
