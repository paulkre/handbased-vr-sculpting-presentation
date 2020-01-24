import React from "react";

import styles from "./frame.module.scss";

export const Frame: React.FC = ({ children }) => (
  <div className={styles.outerWrapper}>
    <div className={styles.innerWrapper}>{children}</div>
  </div>
);
