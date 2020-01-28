import { useCallback } from "react";
import useEventListener from "@use-it/event-listener";

import { ActionProtocol } from ".";

export function useKeyboardInput(actionProtocol: ActionProtocol) {
  const handler = useCallback<React.EventHandler<React.KeyboardEvent>>(
    ({ keyCode }) => {
      if (keyCode === 32 || keyCode === 39)
        if (actionProtocol.onNext) actionProtocol.onNext();

      if (keyCode === 37) if (actionProtocol.onPrev) actionProtocol.onPrev();
    },
    [actionProtocol]
  );

  useEventListener("keydown", handler);
}
