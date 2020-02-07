import React from "react";

import { Frame } from "../../components/frame";
import { Video } from "../../components/video";
import { FlyIn } from "../../components/animation/fly-in";

import videoUrl from "./sphere-selector-demo.mp4";

export const SphereSelectorDemo: React.FC = () => (
  <Frame>
    <FlyIn duration={1.5}>
      <Video src={videoUrl} caption="Kugel Selektor Demo" />
    </FlyIn>
  </Frame>
);
