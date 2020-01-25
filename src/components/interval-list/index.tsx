import React from "react";

import { useIntervalStep } from "./use-interval-step";

type IntervalListProps = {
  intervalDuration?: number;
  onFinished?: () => void;
  wrapElement?: React.ReactElement;
};

export const IntervalList: React.FC<IntervalListProps> = ({
  children,
  intervalDuration,
  onFinished,
  wrapElement
}) => {
  const progressId = useIntervalStep(
    intervalDuration || 1,
    React.Children.count(children),
    onFinished
  );

  const filteredChildren = React.Children.toArray(children).slice(
    0,
    progressId + 1
  );

  return (
    <>
      {!wrapElement
        ? filteredChildren
        : filteredChildren.map((child, i) =>
            React.cloneElement(wrapElement, { children: child, key: i })
          )}
    </>
  );
};
