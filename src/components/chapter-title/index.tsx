import React from "react";

import { Frame } from "../frame";

import styles from "./chapter-title.module.scss";

type ChapterTitleProps = {
  count?: number;
};

export const ChapterTitle: React.FC<ChapterTitleProps> = ({
  children,
  count
}) => (
  <Frame>
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {count !== undefined && <div className={styles.count}>{count}.</div>}
        <div>{children}</div>
      </div>
    </div>
  </Frame>
);
