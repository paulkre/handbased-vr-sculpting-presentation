import React from "react";

import { ChapterControllerContext } from "../chapter-controller-provider";

import styles from "./chapter-slide.module.scss";

type ChapterSlideProps = {
  title: string;
  withSeparator?: boolean;
};

export const ChapterSlide: React.FC<ChapterSlideProps> = ({
  children,
  title,
  withSeparator
}) => {
  const ctx = React.useContext(ChapterControllerContext);
  const setSlideTitle = ctx?.setSlideTitle;

  React.useEffect(() => {
    if (!setSlideTitle) return;
    setSlideTitle(title);
    return () => setSlideTitle("");
  }, [title, setSlideTitle]);

  return !withSeparator ? (
    <>{children}</>
  ) : (
    <>
      <div className={styles.separator} />
      {children}
    </>
  );
};
