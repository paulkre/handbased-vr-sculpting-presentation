import { Size } from "../canvas";
import { SceneObjectType } from "./scene-object";

export * from "./point";

export type UpdateProps = {
  size: Size;
  time: number;
  delta: number;
  animationStep: number;
};

export type RenderProps = UpdateProps & { ctx: CanvasRenderingContext2D };

export type SceneType = {
  render: (props: RenderProps) => void;
  animationStepCount: number;
  onInteraction: (step: number) => void;
};

export type SceneControllerProps = {
  addSceneObject: (object: SceneObjectType) => void;
};

export type SceneControllerType = {
  update?: (props: UpdateProps) => void;
  animationStepCount?: number;
  onInteraction?: (step: number) => void;
};

export type SceneControllerStrategy = (
  props: SceneControllerProps
) => SceneControllerType;

export const Scene: (
  Controller: SceneControllerStrategy
) => SceneType = Controller => {
  const objects: SceneObjectType[] = [];

  const { update, animationStepCount, onInteraction } = Controller({
    addSceneObject(object) {
      objects.push(object);
    }
  });

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

    animationStepCount: animationStepCount || 1,
    onInteraction(step) {
      if (onInteraction) onInteraction(step);
    }
  };
};
