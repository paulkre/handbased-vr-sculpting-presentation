import React from "react";

import { Animation, AnimationProps } from "..";

import styles from "./fade-in.module.scss";

export const FadeIn: React.FC<AnimationProps> = props => (
  <Animation {...props} className={styles.wrapper} />
);
