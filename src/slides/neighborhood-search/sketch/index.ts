import { RenderProtocol } from "../../../components/visualization";

import { CircleShape } from "./circle-shape";
import { Brush } from "./brush";
import { Point } from "./point";

export type SketchType = { render: RenderProtocol };

const { PI, sin, cos } = Math;

const orbitRadius = 0.35;
const orbitDuration = 10;

export const Sketch: () => SketchType = () => {
  const shape = CircleShape(0.33);
  // shape.transform.setPosition(Point(0.33, 0));
  shape.setShowNormals(true);

  const brush = Brush(0.2);
  brush.addShape(shape);

  return {
    render(ctx, { width, height }, time) {
      const t = (2 * PI * (time / 1000)) / orbitDuration;
      brush.transform.setPosition(
        Point(sin(t) * orbitRadius, cos(t) * orbitRadius)
      );

      ctx.save();

      ctx.clearRect(0, 0, width, height);

      ctx.translate(width / 2, height / 2);
      ctx.scale(height, height);
      ctx.lineWidth = 1 / height;

      shape.render(ctx);
      brush.render(ctx);

      ctx.restore();
    }
  };
};
