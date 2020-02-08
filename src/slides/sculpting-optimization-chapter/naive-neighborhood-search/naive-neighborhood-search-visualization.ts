import { SceneControllerStrategy } from "../../../components/visualization/scene";

import { CircleShape } from "../../../components/visualization/scene/objects/circle-shape";
import { NaiveBrush } from "./naive-brush";

export const NaiveNeighborhoodSearchVisualization: SceneControllerStrategy = ({
  addSceneObject
}) => {
  const shape = new CircleShape(0.33);

  const brush = new NaiveBrush();
  brush.setShape(shape);

  addSceneObject(shape);
  addSceneObject(brush);

  return {
    animationStepCount: 1
  };
};
