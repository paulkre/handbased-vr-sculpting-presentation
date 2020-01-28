import React, { useState } from "react";

import { InteractionStepManager } from "./interaction-step-manager";

import { Wrapper } from "./wrapper";
import { PresentationControllerProvider } from "./presentation-controller-provider";
import { useKeyboardInput } from "./use-keyboard-input";
import { useTouchInput } from "./use-touch-input";

export type ActionProtocol = {
  onNext?: () => void;
  onPrev?: () => void;
};

export const Presentation: React.FC = ({ children }) => {
  const [actionProtocol, setActionProtocol] = useState<ActionProtocol>({});

  const [slideId, setSlideId] = useState(0);

  const slideCount = React.Children.count(children);

  useKeyboardInput(actionProtocol, slideId, setSlideId, slideCount);
  useTouchInput(actionProtocol);

  return (
    <Wrapper>
      <PresentationControllerProvider setActionProtocol={setActionProtocol}>
        <InteractionStepManager
          step={slideId}
          setStep={setSlideId}
          stepCount={slideCount}
        >
          {React.Children.toArray(children)[slideId]}
        </InteractionStepManager>
      </PresentationControllerProvider>
    </Wrapper>
  );
};
