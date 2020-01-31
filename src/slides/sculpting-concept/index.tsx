import React from "react";

import { Frame } from "../../components/frame";
import { Chapter } from "../../components/chapter";
import { Visualization } from "../../components/visualization";
import { SculptingVisualization } from "./sculpting-visualization";

export const SculptingConcept: React.FC = () => (
  <Frame>
    <Chapter title="Sculpting Konzept">
      <Visualization SceneController={SculptingVisualization} />
    </Chapter>
  </Frame>
);
