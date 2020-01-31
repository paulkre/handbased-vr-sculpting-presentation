import { SceneControllerStrategy } from "../../components/visualization/scene";

import { CircleShape } from "../../components/visualization/scene/objects/circle-shape";
import { Brush } from "../../components/visualization/scene/objects/brush";

export const SculptingVisualization: SceneControllerStrategy = ({
  addSceneObject
}) => {
  const shape = CircleShape(0.33);

  const brush = Brush(0.2);
  brush.addShape(shape);
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
