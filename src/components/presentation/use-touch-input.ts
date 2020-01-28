import { useState, useCallback } from "react";
import useEventListener from "@use-it/event-listener";

import { ActionProtocol } from ".";

const swipeLengthIsValid = (a: number, b: number) => Math.abs(b - a) > 64;

export function useTouchInput(actionProtocol: ActionProtocol) {
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

      if (touchX < lastTouchX && actionProtocol.onNext) actionProtocol.onNext();
      else if (touchX > lastTouchX && actionProtocol.onPrev)
        actionProtocol.onPrev();
    },
    [actionProtocol, lastTouchX]
  );

  useEventListener("touchstart", startHandler);
  useEventListener("touchend", moveHandler);
}
