import React, { useState, useEffect } from "react";

import { SlideProtocol } from "../components/presentation";

export type AnimationHandlerProps = {
  animationState?: {
    step: number;
    stepCount: number;
  };
};

export function useAnimationStep(
  stepCount: number,
  setSlideProtocol?: React.Dispatch<
    React.SetStateAction<SlideProtocol | undefined>
  >
) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!setSlideProtocol) return;

    const protocol: SlideProtocol = {};

    if (step < stepCount - 1)
      protocol.next = () => {
        setStep(step + 1);
      };

    if (step > 0)
      protocol.prev = () => {
        setStep(step - 1);
      };

    setSlideProtocol(protocol);

    return () => setSlideProtocol(undefined);
  }, [setSlideProtocol, step, stepCount]);

  return step;
}
