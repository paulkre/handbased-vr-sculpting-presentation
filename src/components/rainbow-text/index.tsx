import React from "react";

import styles from "./rainbow-text.module.scss";

export const RainbowText: React.FC = ({ children }) => (
  <span className={styles.wrapper}>{children}</span>
);
