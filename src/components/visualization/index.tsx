import React from "react";

import { Canvas } from "./canvas";
import { Scene, SceneType, SceneControllerType } from "./scene";

export type Size = { width: number; height: number };

type RenderProps = {
  ctx: CanvasRenderingContext2D;
  size: Size;
  time: number;
  delta: number;
};

export type RenderBehaviour = (props: RenderProps) => void;

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

export const Visualization: React.FC<VisualizationProps> = ({
  SceneController
}) => {
  const frameRequestRef = React.useRef(0);
  const lastTimeRef = React.useRef(performance.now());
  const runTimeRef = React.useRef(0);
  const scene = useScene(SceneController);

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
          delta: deltaTime
        });

      lastTimeRef.current = time;
      frameRequestRef.current = requestAnimationFrame(render);
    },
    [canvasCtx, canvasSize, scene]
  );

  React.useEffect(() => {
    if (!scene) return;
    frameRequestRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frameRequestRef.current);
  }, [scene, render]);

  return <Canvas setRenderingContext={setCanvasCtx} setSize={setCanvasSize} />;
};
