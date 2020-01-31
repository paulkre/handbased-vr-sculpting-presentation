import React, { useState } from "react";

import { InteractionStepSwitch } from "./interaction-step-switch";

import { Wrapper } from "./wrapper";
import { PresentationControllerProvider } from "./presentation-controller-provider";
import { useKeyboardInput } from "./use-keyboard-input";
import { useTouchInput } from "./use-touch-input";

export type ActionProtocol = {
  onNext?: () => void;
  onPrev?: () => void;
};

type PresentationProps = {
  initialStep?: number;
};

export const Presentation: React.FC<PresentationProps> = ({
  children,
  initialStep
}) => {
  const [actionProtocol, setActionProtocol] = useState<ActionProtocol>({});

  const [slideId, setSlideId] = useState(initialStep || 0);

  const slideCount = React.Children.count(children);

  useKeyboardInput(actionProtocol, slideId, setSlideId, slideCount);
  useTouchInput(actionProtocol);

  return (
    <Wrapper>
      <PresentationControllerProvider setActionProtocol={setActionProtocol}>
        <InteractionStepSwitch
          step={slideId}
          setStep={setSlideId}
          stepCount={slideCount}
        >
          {React.Children.toArray(children)[slideId]}
        </InteractionStepSwitch>
      </PresentationControllerProvider>
    </Wrapper>
  );
};
