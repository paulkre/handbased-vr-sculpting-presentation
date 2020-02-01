import React from "react";

import { Frame } from "../../components/frame";
import { Chapter } from "../../components/chapter";
import { Visualization } from "../../components/visualization";
import { NewNeighborhoodSearchVisualization } from "./new-neighborhood-search-visualization";

export const NewNeighborhoodSearch: React.FC = () => (
  <Frame>
    <Chapter title="Nachbarschaftssuche mit Grid Datenstruktur">
      <Visualization SceneController={NewNeighborhoodSearchVisualization} />
    </Chapter>
  </Frame>
);