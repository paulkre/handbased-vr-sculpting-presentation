import React from "react";

import { Frame } from "../../frame";
import { FadeIn } from "../../animation/fade-in";

import styles from "./chapter-slide.module.scss";

type ChapterSlideProps = {
  title: string;
  chapterTitle?: string;
  wrapElement?: React.ReactElement;
  withSeparator?: boolean;
};

export const ChapterSlide: React.FC<ChapterSlideProps> = ({
  children,
  title,
  chapterTitle,
  wrapElement,
  withSeparator
}) => {
  const tree = (
    <Frame>
      <div className={styles.wrapper}>
        {chapterTitle && (
          <div className={styles.heading}>
            <div className={styles.chapterTitle}>{chapterTitle}</div>
            <div>{title}</div>
          </div>
        )}
        <div>
          {withSeparator && <div className={styles.separator} />}
          {children}
        </div>
      </div>
    </Frame>
  );
  return !wrapElement ? (
    <FadeIn>{tree}</FadeIn>
  ) : (
    React.cloneElement(wrapElement, { children: tree })
  );
};
