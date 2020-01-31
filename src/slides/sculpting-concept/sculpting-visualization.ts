import { SceneControllerStrategy } from "../../components/visualization";

import { Point } from "../../components/visualization/scene";

import { CircleShape } from "../../components/visualization/scene/objects/circle-shape";
import { Brush } from "../../components/visualization/scene/objects/brush";

const { PI, sin, cos } = Math;

const orbitDuration = 10;
const orbitRadius = 0.25;

export const SculptingVisualization: SceneControllerStrategy = () => {
  const shape = CircleShape(0.33);
  shape.setShowNormals(true);

  const brush = Brush(0.2);
  brush.addShape(shape);

  return {
    objects: [shape, brush],
    update({ time, animationStep }) {
      const t = (2 * PI * (time / 1000)) / orbitDuration;
      brush.transform.setPosition(
        Point(sin(t) * orbitRadius, cos(t) * orbitRadius)
      );
      shape.setShowNormals(animationStep > 0);
    },
    animationStepCount: 2
  };
};
