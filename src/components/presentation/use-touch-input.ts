import { useState, useCallback } from "react";
import useEventListener from "@use-it/event-listener";

import { ActionType, Action } from "./use-presentation-state";

const swipeLengthIsValid = (a: number, b: number) => Math.abs(b - a) > 64;

export function useTouchInput(dispatch: React.Dispatch<Action>) {
  const [lastTouchX, setLastTouchX] = useState<number>(NaN);

  const startHandler = useCallback<React.EventHandler<React.TouchEvent>>(
    ({ changedTouches }) => {
      if (changedTouches.length > 1) return;

      const touchX = changedTouches[0].pageX;
      setLastTouchX(touchX);
    },
    [setLastTouchX]
  );

  const moveHandler = useCallback<React.EventHandler<React.TouchEvent>>(
    ({ changedTouches }) => {
      if (changedTouches.length > 1) return;

      const touchX = changedTouches[0].pageX;

      if (!swipeLengthIsValid(touchX, lastTouchX)) return;

      if (touchX < lastTouchX) dispatch({ type: ActionType.Next });
      else if (touchX > lastTouchX) dispatch({ type: ActionType.Prev });
    },
    [dispatch, lastTouchX]
  );

  useEventListener("touchstart", startHandler);
  useEventListener("touchend", moveHandler);
}
