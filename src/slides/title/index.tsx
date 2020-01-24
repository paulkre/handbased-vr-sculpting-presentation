import React from "react";

import { Frame } from "../../components/frame";

import styles from "./title.module.scss";

export const Title: React.FC = () => (
  <Frame>
    <div className={styles.wrapper}>
      <span className={styles.label}>Kolloquium zur Bachelor Arbeit</span>
      <div className={styles.separator} />
      <span className={styles.heading}>
        Handbasiertes Sculpting
        <br />
        in Virtual Reality
      </span>
    </div>
  </Frame>
);
