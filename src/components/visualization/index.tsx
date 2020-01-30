import React from "react";

import { Canvas, Size } from "./canvas";

export type RenderProtocol = (
  ctx: CanvasRenderingContext2D,
  size: Size,
  time: number,
  delta: number
) => void;

type VisualizationProps = {
  render: RenderProtocol;
};

export const Visualization: React.FC<VisualizationProps> = ({ render }) => {
  const frameRequestRef = React.useRef(0);
  const lastTimeRef = React.useRef(performance.now());
  const runTimeRef = React.useRef(0);

  const [
    canvasCtx,
    setCanvasCtx
  ] = React.useState<CanvasRenderingContext2D | null>(null);
  const [canvasSize, setCanvasSize] = React.useState<Size>({
    width: 0,
    height: 0
  });

  const internalRender = React.useCallback<FrameRequestCallback>(
    time => {
      const deltaTime = time - lastTimeRef.current;
      runTimeRef.current += deltaTime;

      if (canvasCtx)
        render(canvasCtx, canvasSize, runTimeRef.current, deltaTime);

      lastTimeRef.current = time;
      frameRequestRef.current = requestAnimationFrame(internalRender);
    },
    [canvasCtx, canvasSize, render]
  );

  React.useEffect(() => {
    frameRequestRef.current = requestAnimationFrame(internalRender);
    return () => cancelAnimationFrame(frameRequestRef.current);
  }, [internalRender]);

  return <Canvas setRenderingContext={setCanvasCtx} setSize={setCanvasSize} />;
};
