import { useCallback, useReducer } from "react";

export type ActionProtocol = {
  onNext?: () => void;
  onPrev?: () => void;
};

export enum ActionType {
  Next,
  Prev,
  SetActionProtocol
}

export type Action = {
  type: ActionType;
};

export interface SetProtocolAction extends Action {
  protocol: ActionProtocol;
}

type State = {
  slideId: number;
  actionProtocol: ActionProtocol;
};

const initialState: State = {
  slideId: 0,
  actionProtocol: {}
};

export const usePresentationState = (slideCount: number) =>
  useReducer<React.Reducer<State, Action>>(
    useCallback<React.Reducer<State, Action>>(
      (prevState, action) => {
        switch (action.type) {
          case ActionType.SetActionProtocol:
            return {
              ...prevState,
              actionProtocol: (action as SetProtocolAction).protocol
            };

          case ActionType.Next:
            if (prevState.actionProtocol.onNext) {
              prevState.actionProtocol.onNext();
              return prevState;
            }

            if (prevState.slideId < slideCount - 1)
              return {
                ...prevState,
                slideId: prevState.slideId + 1
              };

            return prevState;

          case ActionType.Prev:
            if (prevState.actionProtocol.onPrev) {
              prevState.actionProtocol.onPrev();
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
      [slideCount]
    ),
    initialState
  );
