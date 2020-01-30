import React from "react";

import styles from "./visualization.module.scss";

export type Size = { width: number; height: number };

type CanvasProps = {
  setRenderingContext?: React.Dispatch<
    React.SetStateAction<CanvasRenderingContext2D | null>
  >;
  setSize?: React.Dispatch<React.SetStateAction<Size>>;
};

export const Canvas: React.FC<CanvasProps> = ({
  setRenderingContext,
  setSize
}) => {
  const [domReady, setDomReady] = React.useState(false);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => setDomReady(true), []);

  React.useEffect(() => {
    if (!domReady || !setSize) return;

    const updateSize = () => {
      if (!canvasRef.current) return;
      const {
        width,
        height
      } = canvasRef.current.parentElement!.getBoundingClientRect();
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      setSize({ width, height });
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, [domReady, setSize]);

  React.useEffect(() => {
    if (!setRenderingContext || !canvasRef.current) return;
    setRenderingContext(canvasRef.current.getContext("2d"));
    return () => setRenderingContext(null);
  }, [setRenderingContext]);

  return (
    <div className={styles.canvasWrapper}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
};
