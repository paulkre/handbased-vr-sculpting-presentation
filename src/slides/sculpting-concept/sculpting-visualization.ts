import { SceneControllerStrategy } from "../../components/visualization/scene";

import { CircleShape } from "../../components/visualization/scene/objects/circle-shape";
import { OrbitingBrush } from "../../components/visualization/scene/objects/orbiting-brush";

export const SculptingVisualization: SceneControllerStrategy = ({
  addSceneObject
}) => {
  const shape = new CircleShape(0.33);

  const brush = new OrbitingBrush();
  brush.setShape(shape);
  brush.setEnabled(false);

  addSceneObject(shape);
  addSceneObject(brush);

  return {
    onInteraction(step) {
      shape.setShowNormals(step > 0);
      brush.setEnabled(step === 2);
    },

    animationStepCount: 3
  };
};
