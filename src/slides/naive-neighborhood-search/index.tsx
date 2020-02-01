import React from "react";

import { Frame } from "../../components/frame";
import { Chapter } from "../../components/chapter";
import { Visualization } from "../../components/visualization";
import { NaiveNeighborhoodSearchVisualization } from "./naive-neighborhood-search-visualization";

export const NaiveNeighborhoodSearch: React.FC = () => (
  <Frame>
    <Chapter title="Nachbarschaftssuche">
      <Visualization SceneController={NaiveNeighborhoodSearchVisualization} />
    </Chapter>
  </Frame>
);
