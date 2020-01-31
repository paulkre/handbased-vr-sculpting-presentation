import React from "react";

import { useInteractionStep } from "../presentation/use-interaction-step";

import { Canvas, Size } from "./canvas";
import { Scene, SceneType, SceneControllerType } from "./scene";

export type SceneControllerStrategy = () => SceneControllerType;

type VisualizationProps = {
  SceneController: SceneControllerStrategy;
};

const useScene: (
  SceneController: SceneControllerStrategy
) => SceneType | undefined = SceneController => {
  const [scene, setScene] = React.useState<SceneType>();

  React.useEffect(() => {
    const scene = Scene(SceneController());
    setScene(scene);
  }, [SceneController]);

  return scene;
};

const useAnimationStep: (scene?: SceneType) => number = scene => {
  const [stepCount, setStepCount] = React.useState(1);
  const step = useInteractionStep(stepCount);

  React.useEffect(() => {
    if (!scene) return;
    setStepCount(scene.animationStepCount);
  }, [scene]);

  return step;
};

export const Visualization: React.FC<VisualizationProps> = ({
  SceneController
}) => {
  const frameRequestRef = React.useRef(0);
  const lastTimeRef = React.useRef(performance.now());
  const runTimeRef = React.useRef(0);
  const scene = useScene(SceneController);
  const animationStep = useAnimationStep(scene);

  const [
    canvasCtx,
    setCanvasCtx
  ] = React.useState<CanvasRenderingContext2D | null>(null);
  const [canvasSize, setCanvasSize] = React.useState<Size>({
    width: 0,
    height: 0
  });

  const render = React.useCallback<FrameRequestCallback>(
    time => {
      const deltaTime = time - lastTimeRef.current;
      runTimeRef.current += deltaTime;

      if (canvasCtx)
        scene!.render({
          ctx: canvasCtx,
          size: canvasSize,
          time: runTimeRef.current,
          delta: deltaTime,
          animationStep
        });

      lastTimeRef.current = time;
      frameRequestRef.current = requestAnimationFrame(render);
    },
    [canvasCtx, canvasSize, animationStep, scene]
  );

  React.useEffect(() => {
    if (!scene) return;
    frameRequestRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frameRequestRef.current);
  }, [scene, render]);

  return <Canvas setRenderingContext={setCanvasCtx} setSize={setCanvasSize} />;
};
