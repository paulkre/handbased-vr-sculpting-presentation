import { Transform, TransformType } from "./transform";

type RenderBehaviour = (ctx: CanvasRenderingContext2D) => void;

export type SceneObjectType = {
  transform: TransformType;
  render: RenderBehaviour;
};

export const SceneObject: (
  render: RenderBehaviour
) => SceneObjectType = render => {
  const transform = Transform();

  return {
    transform,

    render(ctx) {
      ctx.save();

      const { x, y } = transform.position();
      ctx.translate(x, y);

      render(ctx);

      ctx.restore();
    }
  };
};
