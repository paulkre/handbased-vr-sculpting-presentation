import React from "react";

import { Frame } from "../frame";

import styles from "./slide-frame.module.scss";

type SlideFrameProps = {
  title: string;
};

export const SlideFrame: React.FC<SlideFrameProps> = ({ children, title }) => (
  <Frame>
    <div className={styles.wrapper}>
      <div className={styles.heading}>{title}</div>
      <div>{children}</div>
    </div>
  </Frame>
);
