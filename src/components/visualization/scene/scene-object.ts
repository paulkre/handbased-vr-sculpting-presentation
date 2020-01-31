import { Transform, TransformType } from "./transform";

import { UpdateProps, RenderProps } from ".";
import { PointType } from "./point";

type PointFilter = (point: PointType) => PointType;

export type SceneObjectType = {
  transform: TransformType;
  render: (props: RenderProps) => void;
  setEnabled(value: boolean): void;
};

export type SceneObjectProps = {
  render: (props: RenderProps) => void;
  update?: (props: UpdateProps) => void;
};

export const SceneObject: (props: SceneObjectProps) => SceneObjectType = ({
  update,
  render
}) => {
  let enabled = true;
  const transform = Transform();

  return {
    transform,

    render(props) {
      if (!enabled) return;
      if (update) update(props);

      const { ctx } = props;

      ctx.save();

      const { x, y } = transform.position();
      ctx.translate(x, y);

      render(props);

      ctx.restore();
    },

    setEnabled(value) {
      enabled = value;
    }
  };
};
