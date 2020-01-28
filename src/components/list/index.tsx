import React from "react";

import styles from "./list.module.scss";

type ListProps = {
  ordered?: boolean;
  wrapItems?: boolean;
};

export const List: React.FC<ListProps> = ({ children, ordered }) =>
  ordered ? (
    <ol className={styles.list}>{children}</ol>
  ) : (
    <ul className={styles.list}>{children}</ul>
  );
