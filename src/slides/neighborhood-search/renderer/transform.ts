export type TransformType = {
  position(): PointType;
  setPosition(point: PointType): void;
};

export type PointType = {
  x: number;
  y: number;
  add(p: PointType): PointType;
  sub(p: PointType): PointType;
  mult(p: PointType): PointType;
  div(p: PointType): PointType;
};

export const Point: (x?: number, y?: number) => PointType = (ix, iy) => {
  const x = ix || 0;
  const y = iy || 0;
  return {
    x,
    y,
    add: p => Point(x + p.x, y + p.y),
    sub: p => Point(x - p.x, y - p.y),
    mult: p => Point(x * p.x, y * p.y),
    div: p => Point(x / p.x, y / p.y)
  };
};

export const Transform: () => TransformType = () => {
  let position = Point();

  return {
    position: () => position,

    setPosition(point) {
      position = point;
    }
  };
};
