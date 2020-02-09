import { SceneControllerStrategy } from "../../../components/visualization/scene";

import { CircleShape } from "../../../components/visualization/scene/objects/circle-shape";
import { OrbitingBrush } from "../../../components/visualization/scene/objects/orbiting-brush";

export const SculptingVisualization: SceneControllerStrategy = ({
  addSceneObject
}) => {
  const shape = new CircleShape(0.33);
  shape.setShowNormals(true);

  const brush = new OrbitingBrush();
  brush.setShape(shape);

  addSceneObject(shape);
  addSceneObject(brush);

  return {};
};
