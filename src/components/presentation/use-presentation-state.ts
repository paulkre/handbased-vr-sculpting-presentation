import { useCallback, useReducer } from "react";

import { SlideProtocol } from ".";

export enum ActionType {
  Next,
  Prev
}

export type Action = {
  type: ActionType;
};

type State = {
  currentId: number;
};

const initialState: State = {
  currentId: 0
};

export const usePresentationState = (
  slideCount: number,
  slideProtocol: SlideProtocol
) =>
  useReducer<React.Reducer<State, Action>>(
    useCallback<React.Reducer<State, Action>>(
      (prevState, action) => {
        const { preventNext, preventPrev, onNext, onPrev } =
          slideProtocol || {};

        switch (action.type) {
          case ActionType.Next:
            if (onNext) onNext();
            return preventNext
              ? prevState
              : {
                  ...prevState,
                  currentId: Math.min(prevState.currentId + 1, slideCount - 1)
                };

          case ActionType.Prev:
            if (onPrev) onPrev();
            return preventPrev
              ? prevState
              : {
                  ...prevState,
                  currentId: Math.max(prevState.currentId - 1, 0)
                };

          default:
            throw Error();
        }
      },
      [slideCount, slideProtocol]
    ),
    initialState
  );
