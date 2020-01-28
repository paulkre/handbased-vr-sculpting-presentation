import React, { useState } from "react";

import { InteractionStepManager } from "../presentation/interaction-step-manager";

export const InteractiveSwitch: React.FC = ({ children }) => {
  const [step, setStep] = useState(0);
  const childCount = React.Children.count(children);

  return (
    <InteractionStepManager
      step={step}
      setStep={setStep}
      stepCount={childCount}
    >
      {React.Children.toArray(children)[step]}
    </InteractionStepManager>
  );
};
