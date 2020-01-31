import React, { useState } from "react";

import { InteractionStepSwitch } from "../presentation/interaction-step-switch";

export const InteractiveSwitch: React.FC = ({ children }) => {
  const [step, setStep] = useState(0);
  const childCount = React.Children.count(children);

  return (
    <InteractionStepSwitch step={step} setStep={setStep} stepCount={childCount}>
      {React.Children.toArray(children)[step]}
    </InteractionStepSwitch>
  );
};
