import React, { useState } from "react";

import { Wrapper } from "./wrapper";
import { ProtocolProvider } from "./protocol-provider";
import { useKeyboardInput } from "./use-keyboard-input";
import { useTouchInput } from "./use-touch-input";
import { usePresentationState } from "./use-presentation-state";

export { SlideProtocolContext } from "./protocol-provider";

export type SlideProtocol = {
  preventNext?: boolean;
  preventPrev?: boolean;
  onNext?: () => void;
  onPrev?: () => void;
};

export const Presentation: React.FC = ({ children }) => {
  const [slideProtocol, setSlideProtocol] = useState<SlideProtocol>({});

  const [{ currentId }, dispatch] = usePresentationState(
    React.Children.count(children),
    slideProtocol
  );

  useKeyboardInput(dispatch);
  useTouchInput(dispatch);

  return (
    <Wrapper>
      <ProtocolProvider value={{ setSlideProtocol }}>
        {React.Children.toArray(children)[currentId]}
      </ProtocolProvider>
    </Wrapper>
  );
};
