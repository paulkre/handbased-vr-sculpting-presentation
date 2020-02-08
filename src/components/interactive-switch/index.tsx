import React, { useState } from "react";

import { InteractionStepSwitch } from "../presentation/interaction-step-switch";

type InteractiveSwitchProps = {
  initialStep?: number;
};

export const InteractiveSwitch: React.FC<InteractiveSwitchProps> = ({
  children,
  initialStep
}) => {
  const [step, setStep] = useState(initialStep || 0);
  const childCount = React.Children.count(children);

  return (
    <InteractionStepSwitch step={step} setStep={setStep} stepCount={childCount}>
      {React.Children.toArray(children)[step]}
    </InteractionStepSwitch>
  );
};
