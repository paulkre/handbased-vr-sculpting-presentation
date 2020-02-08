import React from "react";

import { Frame } from "../../frame";

import styles from "./chapter-frame.module.scss";

type ChapterProps = {
  title: string;
  slideTitle: string;
  count?: number;
};

export const ChapterFrame: React.FC<ChapterProps> = ({
  children,
  title,
  slideTitle,
  count
}) => (
  <Frame>
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        {slideTitle.length > 0 && <div>{slideTitle}</div>}
        <div className={styles.chapterTitle}>
          {count !== undefined && `${count}. `}
          {title}
        </div>
      </div>
      <div>{children}</div>
    </div>
  </Frame>
);
