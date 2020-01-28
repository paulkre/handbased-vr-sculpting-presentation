import React, { useState } from "react";

import { InteractionStepManager } from "../presentation/interaction-step-manager";

type InteractiveSwitchProps = {
  wrapElement?: React.ReactElement;
};

export const InteractiveSwitch: React.FC<InteractiveSwitchProps> = ({
  children,
  wrapElement
}) => {
  const [step, setStep] = useState(0);

  const childCount = React.Children.count(children);

  let currentChild = React.Children.toArray(children)[step];

  if (wrapElement)
    currentChild = React.cloneElement(wrapElement, { children: currentChild });

  return (
    <InteractionStepManager
      step={step}
      setStep={setStep}
      stepCount={childCount}
    >
      {currentChild}
    </InteractionStepManager>
  );
};
