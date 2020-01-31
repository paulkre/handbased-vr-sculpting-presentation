import { PointType } from "./point";
import { SceneObject, SceneObjectType } from "./scene-object";

const pointRadius = 0.008;

const bodyColor = "#4d4d4d";
const pointColor = "#ccc";

export interface ShapeType extends SceneObjectType {
  points: PointType[];
  normals: PointType[];
  setShowNormals(value: boolean): void;
  updateNormals(): void;
}

export const Shape: (points: PointType[], normals: PointType[]) => ShapeType = (
  points,
  normals
) => {
  let showNormals = false;

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

  function renderNormals(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = "#00ff00";
    ctx.beginPath();
    for (let i = 0; i < normals.length; i++) {
      const p = points[i];
      const goal = p.add(normals[i].mult(0.035));
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(goal.x, goal.y);
    }
    ctx.stroke();
  }

  const sceneObj = SceneObject({
    render({ ctx }) {
      renderHull(ctx);
      if (showNormals) renderNormals(ctx);
      renderPoints(ctx);
    }
  });

  return {
    ...sceneObj,
    points,
    normals,
    setShowNormals(value) {
      showNormals = value;
    },
    updateNormals() {
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
  };
};
