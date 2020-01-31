import { OrbitingBrush } from "../../components/visualization/scene/objects/orbiting-brush";
import { RenderProps } from "../../components/visualization/scene";

export class NaiveBrush extends OrbitingBrush {
  protected draw(props: RenderProps) {
    if (!this.shape) return;

    const { ctx } = props;
    const { points, position } = this.shape;

    for (let i = 0; i < points.length; i++) {
      const p = points[i].sub(this.position).add(position);
      ctx.strokeStyle = p.magSq() < this.radiusSq ? "#0f0" : "#f00";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }

    super.draw(props);
  }
}
