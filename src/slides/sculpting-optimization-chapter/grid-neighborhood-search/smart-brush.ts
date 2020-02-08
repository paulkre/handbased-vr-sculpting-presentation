import { OrbitingBrush } from "../../../components/visualization/scene/objects/orbiting-brush";
import {
  RenderProps,
  UpdateProps
} from "../../../components/visualization/scene";
import { Shape } from "../../../components/visualization/scene/shape";

import { Grid } from "./grid";

export class SmartBrush extends OrbitingBrush {
  private grid: Grid | null = null;
  private indices: number[] = [];

  showSearch = false;

  protected update(props: UpdateProps) {
    this.indices = this.grid!.find(this.position, this.radius);
    this.grid!.remove(this.indices);
    super.update(props);
    this.grid!.add(this.indices);
  }

  protected draw(props: RenderProps) {
    const { ctx } = props;

    if (this.showSearch) {
      for (let i = 0; i < this.indices.length; i++) {
        const p = this.shape!.points[this.indices[i]].sub(this.position).add(
          this.shape!.position
        );
        const magSq = p.magSq();
        ctx.strokeStyle =
          magSq < this.radiusSq
            ? `hsl(${120 +
                80 *
                  (1 -
                    Math.pow(
                      Math.sqrt(magSq) / this.radius,
                      2
                    ))}deg, 100%, 50%)`
            : "#f00";
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }
    }

    super.draw(props);
  }

  setGrid(grid: Grid) {
    this.grid = grid;
  }

  setShape(shape: Shape) {
    super.setShape(shape);
    if (!this.grid) return;
    this.grid.fill(shape.points);
  }
}
