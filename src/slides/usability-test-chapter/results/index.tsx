import React from "react";

import styles from "./results.module.scss";

import c01 from "./c01.jpg";
import c02 from "./c02.jpg";
import c03 from "./c03.jpg";
import c04 from "./c04.jpg";

import h01 from "./h01.jpg";
import h02 from "./h02.jpg";
import h03 from "./h03.jpg";
import h04 from "./h04.jpg";

export const Results: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.rowLabel}>
      <span>Controllerbasiert</span>
    </div>
    <img src={c01} alt="Controllerbasiertes Ergebnis 1" />
    <img src={c02} alt="Controllerbasiertes Ergebnis 2" />
    <img src={c03} alt="Controllerbasiertes Ergebnis 3" />
    <img src={c04} alt="Controllerbasiertes Ergebnis 4" />
    <div className={styles.rowLabel}>
      <span>Handbasiert</span>
    </div>
    <img src={h01} alt="Handbasiertes Ergebnis 1" />
    <img src={h02} alt="Handbasiertes Ergebnis 2" />
    <img src={h03} alt="Handbasiertes Ergebnis 3" />
    <img src={h04} alt="Handbasiertes Ergebnis 4" />
  </div>
);
