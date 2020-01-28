import React, { useState, useContext, useEffect } from "react";

import { ActionProtocol } from "../presentation";
import {
  PresentationControllerContext,
  PresentationControllerProvider
} from "./presentation-controller-provider";

type InteractionStepManagerProps = {
  stepCount: number;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const InteractionStepManager: React.FC<InteractionStepManagerProps> = ({
  children,
  step,
  setStep,
  stepCount
}) => {
  const setParentActionProtocol = useContext(PresentationControllerContext)
    ?.setActionProtocol;
  const [childProtocol, setChildProtocol] = useState<ActionProtocol>({});

  useEffect(() => {
    if (!setParentActionProtocol) return;

    const protocol: ActionProtocol = { ...childProtocol };

    if (!protocol.onNext && step < stepCount - 1)
      protocol.onNext = () => setStep(step + 1);

    if (!protocol.onPrev && step > 0) protocol.onPrev = () => setStep(step - 1);

    setParentActionProtocol(protocol);
    return () => setParentActionProtocol({});
  }, [step, setStep, stepCount, childProtocol, setParentActionProtocol]);

  return (
    <PresentationControllerProvider setActionProtocol={setChildProtocol}>
      {children}
    </PresentationControllerProvider>
  );
};
