import { Size } from "../canvas";
import { SceneObjectType } from "./scene-object";

export * from "./point";

type RenderProps = {
  ctx: CanvasRenderingContext2D;
  size: Size;
  time: number;
  delta: number;
  animationStep: number;
};

export type RenderBehaviour = (props: RenderProps) => void;

export type SceneType = {
  render: RenderBehaviour;
  animationStepCount: number;
};

export type SceneControllerType = {
  objects: SceneObjectType[];
  initialize?: () => void;
  update?: RenderBehaviour;
  animationStepCount?: number;
};

export const Scene: (props: SceneControllerType) => SceneType = ({
  objects,
  initialize,
  update,
  animationStepCount
}) => {
  if (initialize) initialize();

  return {
    render(props) {
      if (update) update(props);

      const {
        ctx,
        size: { width, height }
      } = props;

      ctx.save();

      ctx.clearRect(0, 0, width, height);

      ctx.translate(width / 2, height / 2);
      ctx.scale(height, height);
      ctx.lineWidth = 1 / height;

      objects.forEach(obj => obj.render(props));

      ctx.restore();
    },

    animationStepCount: animationStepCount || 1
  };
};
