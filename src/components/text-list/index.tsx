import React from "react";

import { fadeInClassName } from "../animation/fade-in";

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

export const Item: React.FC = ({ children }) => (
  <li className={fadeInClassName}>{children}</li>
);
