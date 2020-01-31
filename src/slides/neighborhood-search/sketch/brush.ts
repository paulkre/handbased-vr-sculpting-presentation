import { SceneObject, SceneObjectType } from "./scene-object";
import { ShapeType } from "./shape";

const crossHSize = 0.015;

interface BrushType extends SceneObjectType {
  addShape(shape: ShapeType): void;
}

export const Brush: (radius: number) => BrushType = radius => {
  const radiusSq = radius * radius;
  const shapes: ShapeType[] = [];

  const sceneObj = SceneObject(ctx => {
    updateShapes();

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

  function updateShapes() {
    const pos = sceneObj.transform.position();
    shapes.forEach(({ points, normals, transform, updateNormals }) => {
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const distSq = pos.distSq(p.add(transform.position()));
        if (distSq < radiusSq) {
          const t = Math.sqrt(distSq) / radius;
          const amt = t * t * (3 - 2 * t);
          const strength = 1 - amt * amt;

          points[i] = p.add(normals[i].mult(0.0012 * strength));
        }
      }
      updateNormals();
    });
  }

  return {
    ...sceneObj,
    addShape(shape) {
      shapes.push(shape);
    }
  };
};
