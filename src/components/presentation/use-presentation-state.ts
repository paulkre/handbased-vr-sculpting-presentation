import { useCallback, useReducer } from "react";

import { ActionProtocol } from ".";

export enum ActionType {
  Next,
  Prev
}

export type Action = {
  type: ActionType;
};

type State = {
  slideId: number;
};

const initialState: State = { slideId: 0 };

export const usePresentationState = (
  slideCount: number,
  actionProtocol: ActionProtocol
) =>
  useReducer<React.Reducer<State, Action>>(
    useCallback<React.Reducer<State, Action>>(
      (prevState, action) => {
        switch (action.type) {
          case ActionType.Next:
            if (actionProtocol.onNext) {
              actionProtocol.onNext();
              return prevState;
            }

            if (prevState.slideId < slideCount - 1)
              return {
                ...prevState,
                slideId: prevState.slideId + 1
              };

            return prevState;

          case ActionType.Prev:
            if (actionProtocol.onPrev) {
              actionProtocol.onPrev();
              return prevState;
            }

            if (prevState.slideId > 0)
              return {
                ...prevState,
                slideId: prevState.slideId - 1
              };

            return prevState;

          default:
            throw Error();
        }
      },
      [slideCount, actionProtocol]
    ),
    initialState
  );
