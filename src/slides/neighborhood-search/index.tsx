import React from "react";

import { Frame } from "../../components/frame";
import { Chapter } from "../../components/chapter";
import { Visualization } from "../../components/visualization";
import { NeighborhoodSearchVisualization } from "./neighborhood-search-visualization";

export const NeighborhoodSearch: React.FC = () => (
  <Frame>
    <Chapter title="Nachbarschaftssuche">
      <Visualization SceneController={NeighborhoodSearchVisualization} />
    </Chapter>
  </Frame>
);
