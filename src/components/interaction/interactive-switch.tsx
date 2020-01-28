import React from "react";

import { PresentationControllerContext } from "../presentation/presentation-controller-provider";

import { useInteractionStep } from "./use-interaction-step";

type InteractiveSwitchProps = {
  wrapElement?: React.ReactElement;
};

export const InteractiveSwitch: React.FC<InteractiveSwitchProps> = ({
  children,
  wrapElement
}) => {
  const [progressId, controller] = useInteractionStep(
    React.Children.count(children)
  );

  let currentChild = React.Children.toArray(children)[progressId];

  if (wrapElement)
    currentChild = React.cloneElement(wrapElement, { children: currentChild });

  return (
    <PresentationControllerContext.Provider value={controller}>
      {currentChild}
    </PresentationControllerContext.Provider>
  );
};
