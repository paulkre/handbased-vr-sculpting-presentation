import React from "react";

import { Frame } from "../../frame";
import { FadeIn } from "../../animation/fade-in";

import styles from "./chapter-slide.module.scss";

type ChapterSlideProps = {
  title: string;
  chapterTitle?: string;
  wrapElement?: React.ReactElement;
  largeTitle?: boolean;
};

export const ChapterSlide: React.FC<ChapterSlideProps> = ({
  children,
  title,
  chapterTitle,
  wrapElement,
  largeTitle
}) => {
  const tree = (
    <Frame>
      <div className={styles.wrapper}>
        {chapterTitle && (
          <div className={styles.heading}>
            <div className={styles.chapterTitle}>{chapterTitle}</div>
            <div className={largeTitle ? styles.largeTitle : undefined}>
              {title}
            </div>
          </div>
        )}
        <div className={styles.outerContentWrapper}>
          <div className={styles.innerContentWrapper}>{children}</div>
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
