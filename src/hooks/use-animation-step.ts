import { useState, useEffect, useContext } from "react";

import {
  SlideProtocol,
  SlideProtocolContext
} from "../components/presentation";

export function useAnimationStep(stepCount: number) {
  const [step, setStep] = useState(0);
  const setSlideProtocol = useContext(SlideProtocolContext)?.setSlideProtocol;

  useEffect(() => {
    if (!setSlideProtocol) return;

    const protocol: SlideProtocol = {
      preventNext: step < stepCount - 1,
      preventPrev: step > 0
    };

    if (protocol.preventNext)
      protocol.onNext = () => {
        setStep(step + 1);
      };

    if (protocol.preventPrev)
      protocol.onPrev = () => {
        setStep(step - 1);
      };

    setSlideProtocol(protocol);
    return () => setSlideProtocol({});
  }, [setSlideProtocol, step, stepCount]);

  return step;
}
