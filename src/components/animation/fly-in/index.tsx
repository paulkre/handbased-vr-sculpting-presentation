import React from "react";

import { Animation, AnimationProps } from "..";

import styles from "./fly-in.module.scss";

export const FlyIn: React.FC<AnimationProps> = props => (
  <Animation {...props} className={styles.wrapper} />
);
