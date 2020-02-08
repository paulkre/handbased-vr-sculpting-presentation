import React from "react";
import Div100vh from "react-div-100vh";

import { Presentation } from "../components/presentation";
import { Title } from "../slides/title";
import { Motivation } from "../slides/motivation";
import { Plan } from "../slides/plan";
import { SculptingOptimizationChapter } from "../slides/sculpting-optimization-chapter";
import { SliderDemo } from "../slides/slider-demo";
import { SphereSelectorDemo } from "../slides/sphere-selector-demo";
import { ToolMenuDemo } from "../slides/tool-menu-demo";
import { HandbasedSculptingDemo } from "../slides/handbased-sculpting-demo";

import styles from "./app.module.scss";

export const App: React.FC = () => (
  <Div100vh>
    <div className={styles.wrapper}>
      <Presentation>
        <Title />
        <Motivation />
        <Plan />
        <SculptingOptimizationChapter />
        <SliderDemo />
        <SphereSelectorDemo />
        <ToolMenuDemo />
        <HandbasedSculptingDemo />
      </Presentation>
    </div>
  </Div100vh>
);
