import React, { useState, useEffect } from "react";

import { Presentation } from "../components/presentation";
import { Title } from "../slides/title";

import styles from "./app.module.scss";

import { preloader } from "../util/preloader";

export const App: React.FC = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    preloader.preload().then(() => setInitialized(true));
  }, []);

  return (
    <div className={styles.wrapper}>
      {initialized && (
        <Presentation>
          <Title />
        </Presentation>
      )}
    </div>
  );
};
