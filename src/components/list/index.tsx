import React from "react";

import styles from "./list.module.scss";

type ListProps = {
  ordered?: boolean;
  revealId?: number;
  itemClassName?: string;
};

export const List: React.FC<ListProps> = ({
  children,
  ordered,
  revealId,
  itemClassName
}) => {
  const mapFunction = (child: React.ReactNode, i: number) => (
    <li key={i} className={itemClassName}>
      {child}
    </li>
  );

  const wrappedChildren =
    revealId !== undefined
      ? React.Children.toArray(children)
          .slice(0, revealId)
          .map(mapFunction)
      : React.Children.map(children, mapFunction);

  return ordered ? (
    <ol className={styles.list}>{wrappedChildren}</ol>
  ) : (
    <ul className={styles.list}>{wrappedChildren}</ul>
  );
};
