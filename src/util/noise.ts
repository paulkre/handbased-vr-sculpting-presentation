import SimplexNoise from "simplex-noise";

const simplexNoise = new SimplexNoise();

type NoiseType = { value: (t: number) => number; seed: number };

export const Noise: () => NoiseType = () => {
  const seed = 100000 * Math.random();

  return {
    seed,
    value: (t: number) => simplexNoise.noise2D(seed + t, 0)
  };
};
