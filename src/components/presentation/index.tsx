import React from "react";

import { Wrapper } from "./wrapper";
import { PresentationControllerProvider } from "./presentation-controller-provider";
import { useKeyboardInput } from "./use-keyboard-input";
import { useTouchInput } from "./use-touch-input";
import { usePresentationState } from "./use-presentation-state";

export const Presentation: React.FC = ({ children }) => {
  const [{ slideId }, dispatch] = usePresentationState(
    React.Children.count(children)
  );

  useKeyboardInput(dispatch);
  useTouchInput(dispatch);

  return (
    <Wrapper>
      <PresentationControllerProvider dispatch={dispatch}>
        {React.Children.toArray(children)[slideId]}
      </PresentationControllerProvider>
    </Wrapper>
  );
};
