export type PointType = {
  x: number;
  y: number;
  add(p: PointType): PointType;
  sub(p: PointType): PointType;
  mult(n: number): PointType;
  div(n: number): PointType;
  magSq(): number;
  mag(): number;
  norm(): PointType;
  distSq(p: PointType): number;
  dist(p: PointType): number;
  perp(): PointType;
};

export const Point: (x?: number, y?: number) => PointType = (ix, iy) => {
  const x = ix || 0;
  const y = iy || 0;

  const magSq = () => x * x + y * y;
  const mag = () => Math.sqrt(magSq());

  function distSq(p: PointType) {
    const dx = p.x - x;
    const dy = p.y - y;
    return dx * dx + dy * dy;
  }

  return {
    x,
    y,
    add: p => Point(x + p.x, y + p.y),
    sub: p => Point(x - p.x, y - p.y),
    mult: n => Point(x * n, y * n),
    div: n => Point(x / n, y / n),
    magSq,
    mag,
    norm() {
      const len = mag();
      return Point(x / len, y / len);
    },
    distSq,
    dist: p => Math.sqrt(distSq(p)),
    perp: () => Point(-y, x)
  };
};
