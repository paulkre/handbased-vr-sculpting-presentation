import { Point, PointType } from "./transform";
import { SceneObjectType } from "./scene-object";
import { Shape } from "./shape";

const { PI, sin, cos } = Math;

const pointCount = 32;
const stepSize = (2 * PI) / pointCount;

export const CircleShape: (radius: number) => SceneObjectType = radius => {
  const points: PointType[] = [];

  for (let i = 0; i < pointCount; i++) {
    const angle = i * stepSize;
    points[i] = Point(radius * sin(angle), radius * cos(angle));
  }

  return Shape(points);
};
