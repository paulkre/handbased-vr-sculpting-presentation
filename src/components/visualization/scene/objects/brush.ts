import { SceneObject } from "../scene-object";
import { Shape } from "../shape";
import { UpdateProps, RenderProps } from "..";

const crossHSize = 0.015;

export class Brush extends SceneObject {
  protected radius: number;
  protected radiusSq: number;

  shape: Shape | null = null;

  constructor() {
    super();
    this.radius = 0.2;
    this.radiusSq = this.radius * this.radius;
  }

  protected update({ time }: UpdateProps) {
    this.updateShape();
  }

  protected draw({ ctx }: RenderProps) {
    ctx.strokeStyle = "cyan";
    ctx.lineWidth *= 2;

    ctx.beginPath();
    ctx.ellipse(0, 0, this.radius, this.radius, 0, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-crossHSize, 0);
    ctx.lineTo(crossHSize, 0);
    ctx.moveTo(0, -crossHSize);
    ctx.lineTo(0, crossHSize);
    ctx.stroke();
  }

  private updateShape() {
    if (!this.shape) return;

    const { points, normals, position } = this.shape;

    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      const distSq = this.position.distSq(p.add(position));
      if (distSq < this.radiusSq) {
        const t = Math.sqrt(distSq) / this.radius;
        const amt = t * t * (3 - 2 * t);
        const strength = 1 - amt * amt;

        points[i] = p.add(normals[i].mult(0.0012 * strength));
      }
    }

    this.shape.updateNormals();
  }
}
