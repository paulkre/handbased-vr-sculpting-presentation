import React from "react";

import { Frame } from "../../components/frame";
import { Video } from "../../components/video";
import { FlyIn } from "../../components/animation/fly-in";

import videoUrl from "./tool-menu-demo.mp4";

export const ToolMenuDemo: React.FC = () => (
  <Frame>
    <FlyIn duration={1.5}>
      <Video src={videoUrl} caption="Werkzeug Menü Demo" />
    </FlyIn>
  </Frame>
);
