import { useCallback } from "react";
import useEventListener from "@use-it/event-listener";

import { ActionType, Action } from "./use-presentation-state";

function findActionForKeyCode(keyCode: number): Action | null {
  switch (keyCode) {
    case 32:
    case 39:
      return { type: ActionType.Next };
    case 37:
      return { type: ActionType.Prev };
    default:
      return null;
  }
}

export function useKeyboardInput(dispatch: React.Dispatch<Action>) {
  const handler = useCallback<React.EventHandler<React.KeyboardEvent>>(
    ({ keyCode }) => {
      const action = findActionForKeyCode(keyCode);
      if (action !== null) dispatch(action);
    },
    [dispatch]
  );

  useEventListener("keydown", handler);
}
