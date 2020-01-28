import React from "react";

import styles from "./text-list.module.scss";

type TextListProps = {
  ordered?: boolean;
  wrapItems?: boolean;
};

export const TextList: React.FC<TextListProps> = ({ children, ordered }) =>
  ordered ? (
    <ol className={styles.list}>{children}</ol>
  ) : (
    <ul className={styles.list}>{children}</ul>
  );
