import React from "react";

import { Frame } from "../../components/frame";
import { Video } from "../../components/video";
import { FlyIn } from "../../components/animation/fly-in";

import videoUrl from "./sculpting-demo.mp4";

export const HandbasedSculptingDemo: React.FC = () => (
  <Frame>
    <FlyIn duration={1.5}>
      <Video src={videoUrl} caption="Handbasiertes Sculpting Demo" />
    </FlyIn>
  </Frame>
);
