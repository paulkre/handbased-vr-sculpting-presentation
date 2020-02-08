import React from "react";
import Div100vh from "react-div-100vh";

import { Presentation } from "../components/presentation";
import { Title } from "../slides/title";
import { Motivation } from "../slides/motivation";
import { Plan } from "../slides/plan";
import { SculptingOptimizationChapter } from "../slides/sculpting-optimization-chapter";
import { HandbasedConceptChapter } from "../slides/handbased-concept-chapter";

import styles from "./app.module.scss";

export const App: React.FC = () => (
  <Div100vh>
    <div className={styles.wrapper}>
      <Presentation>
        <Title />
        <Motivation />
        <Plan />
        <SculptingOptimizationChapter />
        <HandbasedConceptChapter />
      </Presentation>
    </div>
  </Div100vh>
);
