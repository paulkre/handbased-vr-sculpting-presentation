import { useEffect, useState, useContext, useCallback } from "react";

import { ActionProtocol } from "../presentation/use-presentation-state";
import {
  PresentationControllerContext,
  PresentationController
} from "../presentation/presentation-controller-provider";

export const useInteractionStep: (
  stepCount: number
) => [number, PresentationController] = stepCount => {
  const setActionProtocol = useContext(PresentationControllerContext)
    ?.setActionProtocol;
  const [childProtocol, setChildProtocol] = useState<ActionProtocol>({});
  const [progressId, setProgressId] = useState(0);

  useEffect(() => {
    if (!setActionProtocol) return;

    const protocol: ActionProtocol = { ...childProtocol };

    if (!protocol.onNext && progressId < stepCount - 1)
      protocol.onNext = () => setProgressId(progressId + 1);

    if (!protocol.onPrev && progressId > 0)
      protocol.onPrev = () => setProgressId(progressId - 1);

    setActionProtocol(protocol);
    return () => setActionProtocol({});
  }, [progressId, stepCount, childProtocol, setActionProtocol]);

  return [
    progressId,
    {
      setActionProtocol: useCallback(protocol => setChildProtocol(protocol), [])
    }
  ];
};
