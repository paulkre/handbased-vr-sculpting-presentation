import { RenderProtocol } from "../../../components/visualization";

import { CircleShape } from "./circle-shape";
import { Brush } from "./brush";
import { Point } from "./transform";

export type RendererType = { render: RenderProtocol };

export const Renderer: () => RendererType = () => {
  const shape = CircleShape(0.33);
  shape.transform.setPosition(Point(0.25, 0));

  const brush = Brush(0.2);
  brush.transform.setPosition(Point(-0.2, 0));

  return {
    render(ctx, { width, height }, time) {
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
