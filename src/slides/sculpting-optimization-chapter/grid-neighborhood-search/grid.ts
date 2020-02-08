import { SceneObject } from "../../../components/visualization/scene/scene-object";
import {
  Point,
  PointType,
  RenderProps
} from "../../../components/visualization/scene";

type Size = {
  width: number;
  height: number;
};

const size: Size = {
  width: 2,
  height: 1
};

const subdivisions = 12;
const subdivisionCount: Size = {
  width: Math.floor(subdivisions * (size.width / size.height)),
  height: subdivisions
};

const cellSize: Size = {
  width: size.width / subdivisionCount.width,
  height: size.height / subdivisionCount.height
};

export class Grid extends SceneObject {
  private points: PointType[] | null = null;
  private cells: number[][][] | null = null;

  private pointerPosition: PointType | null = null;
  private pointerRadius = 0;

  visible = true;

  fill(points: PointType[]) {
    this.points = points;
    this.cells = [];
    for (let y = 0; y < subdivisionCount.height; y++) {
      this.cells[y] = [];
      for (let x = 0; x < subdivisionCount.width; x++) this.cells[y][x] = [];
    }

    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      const { x, y } = this.pointToIndex(p);
      this.cells[y][x].push(i);
    }
  }

  remove(indices: number[]) {
    for (let i = 0; i < indices.length; i++) {
      const id = indices[i];
      const pid = this.pointToIndex(this.points![id]);
      const cell = this.cells![pid.y][pid.x];
      cell.splice(cell.indexOf(i), 1);
    }
  }

  add(indices: number[]) {
    for (let i = 0; i < indices.length; i++) {
      const id = indices[i];
      const pid = this.pointToIndex(this.points![id]);
      this.cells![pid.y][pid.x].push(id);
    }
  }

  find: (point: PointType, radius: number) => number[] = (point, radius) => {
    this.pointerPosition = point;
    this.pointerRadius = radius;

    const pid0 = this.pointToIndex(Point(point.x - radius, point.y - radius));
    const pid1 = this.pointToIndex(Point(point.x + radius, point.y + radius));

    const res: number[] = [];

    for (let y = pid0.y; y <= pid1.y; y++)
      for (let x = pid0.x; x <= pid1.x; x++) {
        const cell = this.cells![y][x];
        for (let i = 0; i < cell.length; i++) res.push(cell[i]);
      }

    return res;
  };

  private pointToIndex: (point: PointType) => PointType = point =>
    Point(
      this.dimensionToIndex(point.x, subdivisionCount.width, size.width),
      this.dimensionToIndex(point.y, subdivisionCount.height, size.height)
    );

  private dimensionToIndex(dim: number, subdivisions: number, size: number) {
    const id = Math.floor(subdivisions * ((dim + size / 2) / size));
    return Math.max(Math.min(id, subdivisions - 1), 0);
  }

  protected update() {}

  protected draw({ ctx }: RenderProps) {
    if (!this.visible) return;

    const strokeLength: Size = {
      width: 4 * size.width,
      height: 4 * size.height
    };
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    for (let y = 0; y <= subdivisionCount.height; y++) {
      const val = y * cellSize.height - size.height / 2;
      ctx.moveTo(-strokeLength.height, val);
      ctx.lineTo(strokeLength.height, val);
    }
    for (let x = 0; x <= subdivisionCount.width; x++) {
      const val = x * cellSize.width - size.width / 2;
      ctx.moveTo(val, -strokeLength.width);
      ctx.lineTo(val, strokeLength.width);
    }
    ctx.stroke();

    if (this.pointerPosition) {
      const pid0 = this.pointToIndex(
        Point(
          this.pointerPosition.x - this.pointerRadius,
          this.pointerPosition.y - this.pointerRadius
        )
      );
      const pid1 = this.pointToIndex(
        Point(
          this.pointerPosition.x + this.pointerRadius,
          this.pointerPosition.y + this.pointerRadius
        )
      );

      ctx.fillStyle = "rgba(0,0,0,.15)";
      ctx.beginPath();
      const from = Point(
        pid0.x * cellSize.width - size.width / 2,
        pid0.y * cellSize.height - size.height / 2
      );
      const to = Point(
        (pid1.x + 1) * cellSize.width - size.width / 2,
        (pid1.y + 1) * cellSize.height - size.height / 2
      );
      ctx.rect(from.x, from.y, to.x - from.x, to.y - from.y);
      ctx.fill();
    }
  }
}
