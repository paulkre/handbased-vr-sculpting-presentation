import React from "react";

import { Frame } from "../../components/frame";
import { Video } from "../../components/video";
import { FlyIn } from "../../components/animation/fly-in";

import videoUrl from "./finger-slider-demo.mp4";

export const SliderDemo: React.FC = () => (
  <Frame>
    <FlyIn duration={1.5}>
      <Video src={videoUrl} caption="Finger Slider Demo" />
    </FlyIn>
  </Frame>
);
