import { OrbitingBrush } from "../../components/visualization/scene/objects/orbiting-brush";
import { RenderProps } from "../../components/visualization/scene";

export class NaiveBrush extends OrbitingBrush {
  protected draw(props: RenderProps) {
    if (!this.shape) return;

    const { ctx } = props;
    const { points, position } = this.shape;

    for (let i = 0; i < points.length; i++) {
      const p = points[i].sub(this.position).add(position);
      const magSq = p.magSq();
      ctx.strokeStyle =
        magSq < this.radiusSq
          ? `hsl(${120 +
              80 *
                (1 -
                  Math.pow(Math.sqrt(magSq) / this.radius, 2))}deg, 100%, 50%)`
          : "#f00";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }

    super.draw(props);
  }
}
