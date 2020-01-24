import React, { useState } from "react";

import { Wrapper } from "./wrapper";
import { useKeyboardInput } from "./use-keyboard-input";
import { usePresentationState } from "./use-presentation-state";

export type SlideProtocol = {
  next?: () => void;
  prev?: () => void;
};

export type SlideProps = {
  setSlideProtocol?: React.Dispatch<
    React.SetStateAction<SlideProtocol | undefined>
  >;
};

export const Presentation: React.FC = ({ children }) => {
  const [slideProtocol, setSlideProtocol] = useState<SlideProtocol>();

  const [{ currentId }, dispatch] = usePresentationState(
    React.Children.count(children),
    slideProtocol
  );

  useKeyboardInput(dispatch);

  const slide = React.Children.toArray(children).find(
    (_child, i) => i === currentId
  );

  return (
    <Wrapper>
      {React.isValidElement(slide) &&
        React.cloneElement<SlideProps>(slide, { setSlideProtocol })}
    </Wrapper>
  );
};
