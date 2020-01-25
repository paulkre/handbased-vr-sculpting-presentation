import React from "react";

import styles from "./fade-in.module.scss";

export type FadeInProps = {
  duration?: number;
  timingFunction?: string;
};

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  duration,
  timingFunction
}) => {
  const style: React.CSSProperties = {};

  if (duration !== undefined) style.animationDuration = `${duration}s`;
  if (timingFunction) style.animationTimingFunction = timingFunction;

  return (
    <div className={styles.wrapper} style={style}>
      {children}
    </div>
  );
};
