import React from "react";

import { InteractiveSwitch } from "../interactive-switch";
import { ChapterTitle } from "./chapter-title";

export { ChapterSlide } from "./chapter-slide";

type ChapterProps = {
  title: string;
  count?: number;
  initialStep?: number;
};

export const Chapter: React.FC<ChapterProps> = ({
  children,
  title,
  count,
  initialStep
}) => (
  <InteractiveSwitch initialStep={initialStep}>
    <ChapterTitle count={count}>{title}</ChapterTitle>
    {React.Children.map(
      children,
      child =>
        React.isValidElement(child) &&
        React.cloneElement(child, { chapterTitle: title })
    )}
  </InteractiveSwitch>
);
