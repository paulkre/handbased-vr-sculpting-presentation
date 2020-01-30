import React from "react";

import styles from "./chapter.module.scss";

type ChapterProps = {
  title: string;
};

export const Chapter: React.FC<ChapterProps> = ({ children, title }) => (
  <div className={styles.wrapper}>
    <div className={styles.heading}>{title}</div>
    <div>{children}</div>
  </div>
);
