import { SceneControllerStrategy } from "../../components/visualization/scene";

import { CircleShape } from "../../components/visualization/scene/objects/circle-shape";
import { NaiveBrush } from "./naive-brush";

export const NeighborhoodSearchVisualization: SceneControllerStrategy = ({
  addSceneObject
}) => {
  const shape = new CircleShape(0.33);

  const brush = new NaiveBrush();
  brush.shape = shape;

  addSceneObject(shape);
  addSceneObject(brush);

  return {
    animationStepCount: 1
  };
};
