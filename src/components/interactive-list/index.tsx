import React, { useState } from "react";

import { InteractionStepSwitch } from "../presentation/interaction-step-switch";

type InteractiveListProps = {
  wrapElement?: React.ReactElement;
};

export const InteractiveList: React.FC<InteractiveListProps> = ({
  children,
  wrapElement
}) => {
  const [step, setStep] = useState(0);

  const childCount = React.Children.count(children);

  let filteredChildren = React.Children.toArray(children).slice(0, step + 1);

  if (wrapElement)
    filteredChildren = filteredChildren.map((child, i) =>
      React.cloneElement(wrapElement, { key: i, children: child })
    );

  return (
    <InteractionStepSwitch step={step} setStep={setStep} stepCount={childCount}>
      {filteredChildren}
    </InteractionStepSwitch>
  );
};
