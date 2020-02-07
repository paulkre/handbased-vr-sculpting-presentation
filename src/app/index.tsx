import React from "react";
import Div100vh from "react-div-100vh";

import { Presentation } from "../components/presentation";
import { Title } from "../slides/title";
import { Motivation } from "../slides/motivation";
import { Plan } from "../slides/plan";
import { SculptingDevelopmentTitle } from "../slides/sculpting-development-title";
import { SculptingConcept } from "../slides/sculpting-concept";
import { NaiveNeighborhoodSearch } from "../slides/naive-neighborhood-search";
import { NewNeighborhoodSearch } from "../slides/new-neighborhood-search";
import { NeighborhoodSearchComparison } from "../slides/neighborhood-search-comparison";
import { HandbasedConceptTitle } from "../slides/handbased-concept-title";
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
        <SculptingDevelopmentTitle />
        <SculptingConcept />
        <NaiveNeighborhoodSearch />
        <NewNeighborhoodSearch />
        <NeighborhoodSearchComparison />
        <HandbasedConceptTitle />
        <SliderDemo />
        <SphereSelectorDemo />
        <ToolMenuDemo />
        <HandbasedSculptingDemo />
      </Presentation>
    </div>
  </Div100vh>
);
