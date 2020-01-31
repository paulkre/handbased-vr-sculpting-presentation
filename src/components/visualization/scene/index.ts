import { SceneObjectType } from "./scene-object";
import { RenderBehaviour } from "..";

export * from "./point";

export type SceneType = {
  render: RenderBehaviour;
};

export type SceneControllerType = {
  objects: SceneObjectType[];
  initialize?: () => void;
  update?: RenderBehaviour;
};

export const Scene: (props: SceneControllerType) => SceneType = ({
  objects,
  initialize,
  update
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
    }
  };
};
