import { UpdateProps, RenderProps } from ".";
import { Point } from "./point";

export abstract class SceneObject {
  private enabled = true;

  position = Point(0, 0);

  render(props: RenderProps) {
    if (!this.enabled) return;
    this.update(props);

    const { ctx } = props;

    ctx.save();

    const { x, y } = this.position;
    ctx.translate(x, y);

    this.draw(props);

    ctx.restore();
  }

  setEnabled(value: boolean) {
    this.enabled = value;
  }

  protected abstract update(props: UpdateProps): void;
  protected abstract draw(props: RenderProps): void;
}
