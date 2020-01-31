import { Point, PointType } from "./point";
import { Shape, ShapeType } from "./shape";

const { PI, sin, cos } = Math;

const pointCount = 32;
const stepSize = (2 * PI) / pointCount;

export const CircleShape: (radius: number) => ShapeType = radius => {
  const points: PointType[] = [];
  const normals: PointType[] = [];

  for (let i = 0; i < pointCount; i++) {
    const angle = i * stepSize;
    const p = Point(radius * sin(angle), radius * cos(angle));
    points[i] = p;
    normals[i] = p.norm();
  }

  return Shape(points, normals);
};
