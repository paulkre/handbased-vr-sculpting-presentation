import React, { useState, useRef } from "react";
import useEventListener from "@use-it/event-listener";

import styles from "./presentation.module.css";

const useCursorVisibility = (element: HTMLElement | null) => {
  const [cursorVisibility, setCursorVisibility] = useState(true);
  const savedTimeout = useRef<NodeJS.Timeout>();

  useEventListener(
    "mousemove",
    () => {
      setCursorVisibility(true);
      const timeout = setTimeout(() => setCursorVisibility(false), 1000);
      if (savedTimeout.current) clearTimeout(savedTimeout.current);
      savedTimeout.current = timeout;
    },
    element || undefined
  );

  return cursorVisibility;
};

export const Wrapper: React.FC = ({ children }) => {
  const wrapperElement = useRef<HTMLDivElement>(null);
  const cursorIsVisible = useCursorVisibility(wrapperElement.current);

  return (
    <div
      className={styles.wrapper}
      style={{ cursor: cursorIsVisible ? "inherit" : "none" }}
      ref={wrapperElement}
    >
      {children}
    </div>
  );
};
