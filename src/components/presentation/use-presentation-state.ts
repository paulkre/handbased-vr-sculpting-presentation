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
  slideProtocol?: SlideProtocol
) =>
  useReducer<React.Reducer<State, Action>>(
    useCallback<React.Reducer<State, Action>>(
      (prevState, action) => {
        switch (action.type) {
          case ActionType.Next:
            if (slideProtocol?.next) {
              slideProtocol.next();
              return prevState;
            }
            return {
              ...prevState,
              currentId: Math.min(prevState.currentId + 1, slideCount - 1)
            };

          case ActionType.Prev:
            if (slideProtocol?.prev) {
              slideProtocol.prev();
              return prevState;
            }
            return {
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
