import { PointType } from "./transform";
import { SceneObject, SceneObjectType } from "./scene-object";

const pointRadius = 0.008;

const bodyColor = "#4d4d4d";
const pointColor = "#ccc";

export const Shape: (points: PointType[]) => SceneObjectType = points => {
  function renderHull(ctx: CanvasRenderingContext2D) {
    ctx.lineWidth *= 2;

    ctx.fillStyle = bodyColor;
    ctx.beginPath();
    const prev = points[points.length - 1];
    ctx.moveTo(prev.x, prev.y);
    for (const p of points) {
      ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
    ctx.fill();
  }

  function renderPoints(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = pointColor;
    for (const p of points) {
      ctx.beginPath();
      ctx.ellipse(p.x, p.y, pointRadius, pointRadius, 0, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  return SceneObject(ctx => {
    renderHull(ctx);
    renderPoints(ctx);
  });
};
