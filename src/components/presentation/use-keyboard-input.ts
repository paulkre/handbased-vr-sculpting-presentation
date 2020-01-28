import { useCallback, useState } from "react";
import useEventListener from "@use-it/event-listener";

import { ActionProtocol } from ".";

export function useKeyboardInput(
  actionProtocol: ActionProtocol,
  slideId: number,
  setSlideId: React.Dispatch<React.SetStateAction<number>>,
  slideCount: number
) {
  const [altPressed, setAltPressed] = useState(false);

  useEventListener(
    "keydown",
    useCallback<React.EventHandler<React.KeyboardEvent>>(
      ({ keyCode }) => {
        if (keyCode === 32 || keyCode === 39) {
          if (altPressed) setSlideId(Math.min(slideId + 1, slideCount - 1));
          else if (actionProtocol.onNext) actionProtocol.onNext();
        }

        if (keyCode === 37) {
          if (altPressed) setSlideId(Math.max(slideId - 1, 0));
          else if (actionProtocol.onPrev) actionProtocol.onPrev();
        }

        if (keyCode === 18) setAltPressed(true);
      },
      [actionProtocol, slideId, setSlideId, slideCount, altPressed]
    )
  );

  useEventListener(
    "keyup",
    useCallback<React.EventHandler<React.KeyboardEvent>>(({ keyCode }) => {
      if (keyCode === 18) setAltPressed(false);
    }, [])
  );
}
