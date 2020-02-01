import {
  SceneControllerStrategy,
  Point
} from "../../components/visualization/scene";

import { CircleShape } from "../../components/visualization/scene/objects/circle-shape";
import { SmartBrush } from "./smart-brush";
import { Grid } from "./grid";

export const NewNeighborhoodSearchVisualization: SceneControllerStrategy = ({
  addSceneObject
}) => {
  const shape = new CircleShape(0.33);

  const grid = new Grid();

  const brush = new SmartBrush();
  brush.setGrid(grid);
  brush.setShape(shape);
  brush.setEnabled(false);
  brush.position = Point(0, 3);

  addSceneObject(shape);
  addSceneObject(grid);
  addSceneObject(brush);

  return {
    onInteraction(step) {
      brush.setEnabled(step > 0);
      brush.showSearch = step > 1;
      grid.visible = step < 2;
    },

    animationStepCount: 3
  };
};
