import React from "react";

import { Frame } from "../../components/frame";
import { Chapter } from "../../components/chapter";
// import { InteractiveSwitch } from "../../components/interactive-switch";
// import { InteractiveList } from "../../components/interactive-list";
import { Visualization, RenderProtocol } from "../../components/visualization";

export const NeighborhoodSearch: React.FC = () => {
  const render: RenderProtocol = (ctx, size, time) => {
    ctx.fillStyle = `hsl(${360 * (time / 5000)}deg, 100%, 50%)`;
    ctx.fillRect(0, 0, size.width, size.height);
  };

  return (
    <Frame>
      <Chapter title="Nachbarschaftssuche">
        <Visualization render={render} />
      </Chapter>
    </Frame>
  );
};
