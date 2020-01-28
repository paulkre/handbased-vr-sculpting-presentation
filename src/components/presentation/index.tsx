import React, { useState } from "react";

import { Wrapper } from "./wrapper";
import { PresentationControllerProvider } from "./presentation-controller-provider";
import { useKeyboardInput } from "./use-keyboard-input";
import { useTouchInput } from "./use-touch-input";
import { usePresentationState } from "./use-presentation-state";

export type ActionProtocol = {
  onNext?: () => void;
  onPrev?: () => void;
};

export const Presentation: React.FC = ({ children }) => {
  const [actionProtocol, setActionProtocol] = useState<ActionProtocol>({});

  const [{ slideId }, dispatch] = usePresentationState(
    React.Children.count(children),
    actionProtocol
  );

  useKeyboardInput(dispatch);
  useTouchInput(dispatch);

  return (
    <Wrapper>
      <PresentationControllerProvider setActionProtocol={setActionProtocol}>
        {React.Children.toArray(children)[slideId]}
      </PresentationControllerProvider>
    </Wrapper>
  );
};
