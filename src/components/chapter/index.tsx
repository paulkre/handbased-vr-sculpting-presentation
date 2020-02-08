import React from "react";

import { ChapterControllerProvider } from "./chapter-controller-provider";
import { InteractiveSwitch } from "../interactive-switch";
import { ChapterTitle } from "./chapter-title";
import { ChapterFrame } from "./chapter-frame";

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
}) => {
  const [slideTitle, setSlideTitle] = React.useState("");

  return (
    <InteractiveSwitch initialStep={initialStep !== undefined ? 1 : undefined}>
      <ChapterTitle count={count}>{title}</ChapterTitle>
      <ChapterFrame title={title} slideTitle={slideTitle} count={count}>
        <ChapterControllerProvider setSlideTitle={setSlideTitle}>
          <InteractiveSwitch initialStep={initialStep && initialStep}>
            {children}
          </InteractiveSwitch>
        </ChapterControllerProvider>
      </ChapterFrame>
    </InteractiveSwitch>
  );
};
