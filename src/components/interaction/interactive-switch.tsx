import React, { useState } from "react";

import { InteractionProvider } from "./interaction-provider";

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
    <InteractionProvider step={step} setStep={setStep} stepCount={childCount}>
      {currentChild}
    </InteractionProvider>
  );
};
