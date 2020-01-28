import React, { useEffect, useState, useContext } from "react";

import { ActionProtocol } from "../../components/presentation/use-presentation-state";
import { PresentationControllerContext } from "../../components/presentation/presentation-controller-provider";

type ActionListProps = {
  wrapElement?: React.ReactElement;
};

export const ActionList: React.FC<ActionListProps> = ({
  children,
  wrapElement
}) => {
  const setActionProtocol = useContext(PresentationControllerContext)
    ?.setActionProtocol;
  const [progressId, setProgressId] = useState(0);

  const childCount = React.Children.count(children);

  useEffect(() => {
    if (!setActionProtocol) return;

    const protocol: ActionProtocol = {};

    if (progressId < childCount - 1)
      protocol.onNext = () => setProgressId(progressId + 1);

    if (progressId > 0) protocol.onPrev = () => setProgressId(progressId - 1);

    setActionProtocol(protocol);
    return () => setActionProtocol({});
  }, [progressId, childCount, setActionProtocol]);

  let filteredChildren = React.Children.toArray(children).slice(
    0,
    progressId + 1
  );

  if (wrapElement)
    filteredChildren = filteredChildren.map((child, i) =>
      React.cloneElement(wrapElement, { key: i, children: child })
    );

  return <>{filteredChildren}</>;
};
