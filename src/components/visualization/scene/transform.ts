import { Point, PointType } from "./point";

export type TransformType = {
  position(): PointType;
  setPosition(point: PointType): void;
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
