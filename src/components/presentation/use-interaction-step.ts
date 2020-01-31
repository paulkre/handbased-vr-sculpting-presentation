import React from "react";

import { ActionProtocol } from "../presentation";
import { PresentationControllerContext } from "./presentation-controller-provider";

export const useInteractionStep: (stepCount: number) => number = stepCount => {
  const setParentActionProtocol = React.useContext(
    PresentationControllerContext
  )?.setActionProtocol;
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    if (!setParentActionProtocol) return;

    const protocol: ActionProtocol = {};

    if (step < stepCount - 1) protocol.onNext = () => setStep(step + 1);
    if (step > 0) protocol.onPrev = () => setStep(step - 1);

    setParentActionProtocol(protocol);
    return () => setParentActionProtocol({});
  }, [step, stepCount, setParentActionProtocol]);

  return step;
};
