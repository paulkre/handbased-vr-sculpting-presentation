import { Point, PointType } from "../point";
import { Shape } from "../shape";

const { PI, sin, cos } = Math;

const pointCount = 32;
const stepSize = (2 * PI) / pointCount;

export class CircleShape extends Shape {
  constructor(radius: number) {
    const points: PointType[] = [];
    const normals: PointType[] = [];

    for (let i = 0; i < pointCount; i++) {
      const angle = i * stepSize;
      const p = Point(radius * sin(angle), radius * cos(angle));
      points[i] = p;
      normals[i] = p.norm();
    }

    super(points, normals);
  }
}
