import { useCallback, useReducer } from "react";

export type QueueCallback = (step: number) => void;

export type QueueItem = {
  stepCount: number;
  callback: QueueCallback;
};

export type Queue = {
  items: QueueItem[];
  step: number;
  stepCount: number;
};

export enum ActionType {
  Next,
  Prev,
  RegisterQueueItem
}

export type Action = {
  type: ActionType;
};

export interface QueueItemAction extends Action {
  queueItem: QueueItem;
}

type State = {
  slideId: number;
  queue: Queue;
};

const initialQueue: Queue = {
  items: [],
  step: 0,
  stepCount: 0
};

const initialState: State = {
  slideId: 0,
  queue: initialQueue
};

const getQueueEntry: (
  queueItems: QueueItem[],
  step: number
) => [QueueItem, number] = (queueItems, step) => {
  let id = -1;
  let acc = 0;

  console.log(`STEP: ${step}`);

  do {
    id++;
    console.log(`ID: ${id}`);
    acc += queueItems[id].stepCount;
  } while (step >= acc);

  const item = queueItems[id];
  console.log(`LOCAL ID: ${step - (acc - item.stepCount)}`);

  return [item, step - (acc - item.stepCount)];
};

export const usePresentationState = (slideCount: number) =>
  useReducer<React.Reducer<State, Action>>(
    useCallback<React.Reducer<State, Action>>(
      (prevState, action) => {
        switch (action.type) {
          case ActionType.RegisterQueueItem:
            const { queueItem } = action as QueueItemAction;
            return {
              ...prevState,
              queue: {
                ...prevState.queue,
                items: [...prevState.queue.items, queueItem],
                stepCount: prevState.queue.stepCount + queueItem.stepCount
              }
            };

          case ActionType.Next:
            if (prevState.queue.step < prevState.queue.stepCount) {
              const { items, step } = prevState.queue;
              const [item, localStep] = getQueueEntry(items, step);
              item.callback(localStep + 1);
              return {
                ...prevState,
                queue: {
                  ...prevState.queue,
                  step: step + 1
                }
              };
            }

            if (prevState.slideId < slideCount - 1)
              return {
                ...prevState,
                slideId: prevState.slideId + 1,
                queue: initialQueue
              };

            return prevState;

          case ActionType.Prev:
            if (prevState.queue.step > 0) {
              const { items, step, stepCount } = prevState.queue;
              const [item, localStep] = getQueueEntry(
                items,
                Math.min(step, stepCount - 1)
              );
              item.callback(localStep - 1);
              return {
                ...prevState,
                queue: {
                  ...prevState.queue,
                  step: step - 1
                }
              };
            }

            if (prevState.slideId > 0)
              return {
                ...prevState,
                slideId: prevState.slideId - 1,
                queue: initialQueue
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
