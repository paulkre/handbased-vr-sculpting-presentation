import React from "react";

import { Frame } from "../../components/frame";
import { Chapter } from "../../components/chapter";
// import { InteractiveSwitch } from "../../components/interactive-switch";
// import { InteractiveList } from "../../components/interactive-list";
import { Visualization } from "../../components/visualization";
import { Renderer, RendererType } from "./renderer";

export const NeighborhoodSearch: React.FC = () => {
  const [renderer, setRenderer] = React.useState<RendererType>();

  React.useEffect(() => {
    setRenderer(Renderer());
  }, []);

  return (
    <Frame>
      <Chapter title="Nachbarschaftssuche">
        {renderer && <Visualization render={renderer.render} />}
      </Chapter>
    </Frame>
  );
};
