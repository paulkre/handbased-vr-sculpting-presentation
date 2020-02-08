import React from "react";

import { Visualization } from "../../../components/visualization";
import { GridNeighborhoodSearchVisualization } from "./grid-neighborhood-search-visualization";

export const GridNeighborhoodSearch: React.FC = () => (
  <Visualization SceneController={GridNeighborhoodSearchVisualization} />
);
