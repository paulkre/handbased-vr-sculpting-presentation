import React from "react";

import { Frame } from "../../components/frame";
import { Chapter } from "../../components/chapter";
import { List } from "../../components/list";
import { fadeInClassName } from "../../components/animation/fade-in";
import { useAnimationStep } from "../../hooks/use-animation-step";

export const Motivation: React.FC = () => {
  const step = useAnimationStep(2);
  return (
    <Frame>
      <Chapter title="Motivation">
        <List revealId={step + 1} itemClassName={fadeInClassName}>
          <>
            Virtual Reality wird zum großen Teil für{" "}
            <strong>Unterhaltung</strong> genutzt
          </>
          <>Es gibt nur wenige leistungsorientierte Anwendungen</>
          <>
            <u>Grund:</u>
            <br />
            Die Verwendung von Motion Controller als Interaktionskonzept ist
            suboptimal
          </>
        </List>
      </Chapter>
    </Frame>
  );
};
