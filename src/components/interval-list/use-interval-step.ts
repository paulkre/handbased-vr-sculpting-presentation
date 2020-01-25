import { useState, useEffect } from "react";

export const useIntervalStep = (
  intervalDuration: number,
  intervalCount: number,
  onFinished?: () => void
) => {
  const [isFinished, setIsFinished] = useState(false);
  const [progressId, setProgressId] = useState(0);

  useEffect(() => {
    if (isFinished) return;

    if (progressId >= intervalCount - 1) {
      if (onFinished) onFinished();
      setIsFinished(true);
      return;
    }

    const timeout = setTimeout(
      () => setProgressId(progressId + 1),
      1000 * intervalDuration
    );

    return () => clearTimeout(timeout);
  }, [intervalDuration, intervalCount, progressId, isFinished, onFinished]);

  return progressId;
};
