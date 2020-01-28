import React, { useCallback } from "react";

import {
  ActionType,
  Action,
  ActionProtocol,
  SetProtocolAction
} from "./use-presentation-state";

type PresentationController = {
  setActionProtocol: (protocol: ActionProtocol) => void;
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
    setActionProtocol: useCallback(
      protocol => {
        dispatch({
          type: ActionType.SetActionProtocol,
          protocol
        } as SetProtocolAction);
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
