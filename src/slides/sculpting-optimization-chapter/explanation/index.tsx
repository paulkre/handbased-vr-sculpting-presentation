import React from "react";

import { Visualization } from "../../../components/visualization";
import { SculptingVisualization } from "./sculpting-visualization";

export const Explanation: React.FC = () => (
  <Visualization SceneController={SculptingVisualization} />
);
