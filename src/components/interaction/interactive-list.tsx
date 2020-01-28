import React from "react";

import { PresentationControllerContext } from "../presentation/presentation-controller-provider";

import { useInteractionStep } from "./use-interaction-step";

type InteractiveListProps = {
  wrapElement?: React.ReactElement;
};

export const InteractiveList: React.FC<InteractiveListProps> = ({
  children,
  wrapElement
}) => {
  const [progressId, controller] = useInteractionStep(
    React.Children.count(children)
  );

  let filteredChildren = React.Children.toArray(children).slice(
    0,
    progressId + 1
  );

  if (wrapElement)
    filteredChildren = filteredChildren.map((child, i) =>
      React.cloneElement(wrapElement, { key: i, children: child })
    );

  return (
    <PresentationControllerContext.Provider value={controller}>
      {filteredChildren}
    </PresentationControllerContext.Provider>
  );
};
