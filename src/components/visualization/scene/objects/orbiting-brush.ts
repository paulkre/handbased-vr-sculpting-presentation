import { Brush } from "./brush";
import { Point } from "../point";
import { Noise } from "../../../../util/noise";
import { UpdateProps } from "..";

const { PI, sin, cos } = Math;
const startOrbitRadius = 1.5;
const goalOrbitRadius = 0.33;

export class OrbitingBrush extends Brush {
  pastTime = 0;
  fixedOrbitRadius = startOrbitRadius;
  orbitRadius = 0;

  orbitNoise = Noise();
  radiusNoise = Noise();

  protected update(props: UpdateProps) {
    super.update(props);

    this.pastTime += props.delta;
    const pastSeconds = this.pastTime / 1000;

    const { orbitNoise, radiusNoise, orbitRadius, fixedOrbitRadius } = this;

    const angle =
      2 *
      PI *
      (0.05 * pastSeconds + 0.08 * orbitNoise.value(0.33 * pastSeconds));
    this.position = Point(sin(angle) * orbitRadius, cos(angle) * orbitRadius);
    this.fixedOrbitRadius +=
      0.03 * pastSeconds * (goalOrbitRadius - fixedOrbitRadius);
    this.orbitRadius =
      fixedOrbitRadius + 0.15 * radiusNoise.value(0.33 * pastSeconds);
  }

  setEnabled(value: boolean) {
    super.setEnabled(value);
    this.orbitRadius = startOrbitRadius;
    if (value) {
      this.pastTime = 0;
      this.fixedOrbitRadius = startOrbitRadius;
    }
  }
}
