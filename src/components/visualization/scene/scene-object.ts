import { Transform, TransformType } from "./transform";

import { RenderBehaviour } from ".";

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

    render(props) {
      const { ctx } = props;

      ctx.save();

      const { x, y } = transform.position();
      ctx.translate(x, y);

      render(props);

      ctx.restore();
    }
  };
};
