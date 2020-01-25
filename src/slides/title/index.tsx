import React from "react";

import { Frame } from "../../components/frame";

import styles from "./title.module.scss";
import logosUrl from "./hsd-logos.svg";

export const Title: React.FC = () => (
  <Frame>
    <div className={styles.wrapper}>
      <div className={styles.label}>
        Kolloquium zur Bachelor Arbeit von Paul Kretschel
      </div>
      <span className={styles.heading}>
        Handbasiertes Sculpting
        <br />
        in Virtual Reality
      </span>
      <img src={logosUrl} alt="HSD Logos" className={styles.logos} />
    </div>
  </Frame>
);
