import React from "react";

import { Visualization } from "../../../components/visualization";
import { NaiveNeighborhoodSearchVisualization } from "./naive-neighborhood-search-visualization";

export const NaiveNeighborhoodSearch: React.FC = () => (
  <Visualization SceneController={NaiveNeighborhoodSearchVisualization} />
);
