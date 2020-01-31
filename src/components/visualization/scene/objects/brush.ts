import { SceneObject, SceneObjectType } from "../scene-object";
import { ShapeType } from "../shape";
import { Point } from "../point";
import { Noise } from "./noise";

const crossHSize = 0.015;

interface BrushType extends SceneObjectType {
  addShape(shape: ShapeType): void;
}

const { PI, sin, cos } = Math;
const startOrbitRadius = 1.5;
const goalOrbitRadius = 0.33;

export const Brush: (radius: number) => BrushType = radius => {
  const radiusSq = radius * radius;
  let orbitRadius = startOrbitRadius;

  const orbitNoise = Noise();
  const radiusNoise = Noise();

  let timePast = 0;
  let fixedOrbitRadius = startOrbitRadius;

  const shapes: ShapeType[] = [];

  const sceneObj = SceneObject({
    update({ time, delta }) {
      timePast += delta;
      updatePosition(time);
      updateShapes();
    },

    render({ ctx }) {
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
    }
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

  function updatePosition(time: number) {
    const seconds = time / 1000;
    const secondsPast = timePast / 1000;
    const angle =
      2 * PI * (0.05 * seconds + 0.08 * orbitNoise.value(0.33 * seconds));
    sceneObj.transform.setPosition(
      Point(sin(angle) * orbitRadius, cos(angle) * orbitRadius)
    );
    fixedOrbitRadius +=
      0.03 * secondsPast * (goalOrbitRadius - fixedOrbitRadius);
    orbitRadius = fixedOrbitRadius + 0.2 * radiusNoise.value(0.33 * seconds);
  }

  return {
    ...sceneObj,

    setEnabled(value) {
      sceneObj.setEnabled(value);
      orbitRadius = startOrbitRadius;
      if (value) {
        timePast = 0;
        fixedOrbitRadius = startOrbitRadius;
      }
    },

    addShape(shape) {
      shapes.push(shape);
    }
  };
};
