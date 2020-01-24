import React from "react";

import styles from "./frame.module.scss";

export const Frame: React.FC = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);
