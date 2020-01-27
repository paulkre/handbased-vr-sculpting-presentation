import { useState, useEffect, useContext } from "react";

import { PresentationControllerContext } from "../components/presentation/presentation-controller-provider";

export function useAnimationStep(stepCount: number) {
  const [step, setStep] = useState(0);
  const [registered, setRegistered] = useState(false);
  const registerQueueItem = useContext(PresentationControllerContext)
    ?.registerQueueItem;

  useEffect(() => {
    if (!registerQueueItem || registered) return;

    registerQueueItem(stepCount, n => setStep(n));
    setRegistered(true);
  }, [step, stepCount, registered, registerQueueItem]);

  return step;
}
