import { SceneObject, SceneObjectType } from "./scene-object";

const crossHSize = 0.015;

export const Brush: (radius: number) => SceneObjectType = radius =>
  SceneObject(ctx => {
    ctx.strokeStyle = "cyan";
    ctx.lineWidth *= 2;

    ctx.beginPath();
    ctx.ellipse(0, 0, radius, radius, 0, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-crossHSize, 0);
    ctx.lineTo(crossHSize, 0);
    ctx.moveTo(0, -crossHSize);
    ctx.lineTo(0, crossHSize);
    ctx.stroke();
  });
