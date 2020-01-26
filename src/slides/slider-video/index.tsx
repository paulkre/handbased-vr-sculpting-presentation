import React from "react";

import { Frame } from "../../components/frame";
import { Video } from "../../components/video";

import videoUrl from "./finger-slider-demo.mp4";

export const SliderVideo: React.FC = () => (
  <Frame>
    <Video src={videoUrl} caption="Finger Slider Demo" />
  </Frame>
);
