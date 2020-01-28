import React, { useCallback } from "react";

import { ActionProtocol } from ".";

export type PresentationController = {
  setActionProtocol: (protocol: ActionProtocol) => void;
};

type PresentationControllerProviderProps = {
  setActionProtocol: React.Dispatch<React.SetStateAction<ActionProtocol>>;
};

export const PresentationControllerContext = React.createContext<PresentationController | null>(
  null
);

export const PresentationControllerProvider: React.FC<PresentationControllerProviderProps> = ({
  children,
  setActionProtocol
}) => {
  const value: PresentationController = {
    setActionProtocol: useCallback(
      protocol => {
        setActionProtocol(protocol);
      },
      [setActionProtocol]
    )
  };

  return (
    <PresentationControllerContext.Provider value={value}>
      {children}
    </PresentationControllerContext.Provider>
  );
};
