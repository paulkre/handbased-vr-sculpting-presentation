import React from "react";

import { Frame } from "../../frame";
import { RainbowText } from "../../rainbow-text";
import { FlyIn } from "../../animation/fly-in";

import styles from "./chapter-title.module.scss";

type ChapterTitleProps = { count?: number };

export const ChapterTitle: React.FC<ChapterTitleProps> = ({
  children,
  count
}) => (
  <Frame>
    <FlyIn>
      <div className={styles.wrapper}>
        {count !== undefined && (
          <div className={styles.label}>Kapitel {count}</div>
        )}
        <RainbowText>{children}</RainbowText>
      </div>
    </FlyIn>
  </Frame>
);
