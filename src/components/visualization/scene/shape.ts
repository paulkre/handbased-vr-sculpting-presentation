import { PointType } from "./point";
import { SceneObject } from "./scene-object";
import { RenderProps } from ".";

const pointRadius = 0.008;

const bodyColor = "#4d4d4d";
const pointColor = "#ccc";

export class Shape extends SceneObject {
  private showNormals = false;

  points: PointType[] = [];
  normals: PointType[] = [];

  constructor(points: PointType[], normals: PointType[]) {
    super();
    this.points = points;
    this.normals = normals;
  }

  protected update() {}

  protected draw({ ctx }: RenderProps) {
    this.renderHull(ctx);
    if (this.showNormals) this.renderNormals(ctx);
    this.renderPoints(ctx);
  }

  setShowNormals(value: boolean) {
    this.showNormals = value;
  }

  updateNormals() {
    const { points, normals } = this;
    for (let i = 0; i < points.length; i++) {
      const current = points[i];
      const prev = points[(i - 1 + points.length) % points.length];
      const next = points[(i + 1) % points.length];

      const perp0 = current.sub(prev).perp();
      const perp1 = next.sub(current).perp();

      normals[i] = perp0
        .add(perp1)
        .div(2)
        .norm();
    }
  }

  private renderHull(ctx: CanvasRenderingContext2D) {
    ctx.lineWidth *= 2;
    ctx.fillStyle = bodyColor;
    ctx.beginPath();
    const prev = this.points[this.points.length - 1];
    ctx.moveTo(prev.x, prev.y);
    for (const p of this.points) {
      ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
    ctx.fill();
  }

  private renderPoints(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = pointColor;
    for (const p of this.points) {
      ctx.beginPath();
      ctx.ellipse(p.x, p.y, pointRadius, pointRadius, 0, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  private renderNormals(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = "#00ff00";
    ctx.beginPath();
    for (let i = 0; i < this.normals.length; i++) {
      const p = this.points[i];
      const goal = p.add(this.normals[i].mult(0.035));
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(goal.x, goal.y);
    }
    ctx.stroke();
  }
}
