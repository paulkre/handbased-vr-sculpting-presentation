import React from "react";

import { SlideProtocol } from ".";

type SlideProtocolControl = {
  setSlideProtocol: React.Dispatch<React.SetStateAction<SlideProtocol>>;
};

export const SlideProtocolContext = React.createContext<SlideProtocolControl | null>(
  null
);

export const ProtocolProvider: React.FC<{ value: SlideProtocolControl }> = ({
  value,
  children
}) => (
  <SlideProtocolContext.Provider value={value}>
    {children}
  </SlideProtocolContext.Provider>
);
