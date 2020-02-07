import React from "react";

import styles from "./table.module.scss";

export const Table: React.FC = ({ children }) => (
  <table className={styles.wrapper}>{children}</table>
);
