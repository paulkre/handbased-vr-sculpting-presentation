import React from "react";
import cn from "classnames";

import styles from "./animation.module.scss";

export type AnimationProps = {
  duration?: number;
  timingFunction?: string;
};

export const Animation: React.FC<AnimationProps & { className: string }> = ({
  children,
  className,
  duration,
  timingFunction
}) => {
  const style: React.CSSProperties = {};

  if (duration !== undefined) style.animationDuration = `${duration}s`;
  if (timingFunction) style.animationTimingFunction = timingFunction;

  return (
    <div className={cn(styles.wrapper, className)} style={style}>
      {children}
    </div>
  );
};
