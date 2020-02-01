import React from "react";
import Div100vh from "react-div-100vh";

import { Presentation } from "../components/presentation";
import { Title } from "../slides/title";
import { Motivation } from "../slides/motivation";
import { RelatedWork } from "../slides/related-work";
import { SculptingConcept } from "../slides/sculpting-concept";
import { NaiveNeighborhoodSearch } from "../slides/naive-neighborhood-search";
import { SliderVideo } from "../slides/slider-video";

import styles from "./app.module.scss";

export const App: React.FC = () => (
  <Div100vh>
    <div className={styles.wrapper}>
      <Presentation>
        <Title />
        <Motivation />
        <RelatedWork />
        <SculptingConcept />
        <NaiveNeighborhoodSearch />
        <SliderVideo />
      </Presentation>
    </div>
  </Div100vh>
);
