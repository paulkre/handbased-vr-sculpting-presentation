import React, { useCallback } from "react";

import {
  ActionType,
  Action,
  QueueItemAction,
  QueueCallback
} from "./use-presentation-state";

type PresentationController = {
  registerQueueItem: (stepCount: number, callback: QueueCallback) => void;
};

type PresentationControllerProviderProps = {
  dispatch: React.Dispatch<Action>;
};

export const PresentationControllerContext = React.createContext<PresentationController | null>(
  null
);

export const PresentationControllerProvider: React.FC<PresentationControllerProviderProps> = ({
  children,
  dispatch
}) => {
  const value: PresentationController = {
    registerQueueItem: useCallback(
      (stepCount, callback) => {
        dispatch({
          type: ActionType.RegisterQueueItem,
          queueItem: { stepCount, callback }
        } as QueueItemAction);
      },
      [dispatch]
    )
  };

  return (
    <PresentationControllerContext.Provider value={value}>
      {children}
    </PresentationControllerContext.Provider>
  );
};
