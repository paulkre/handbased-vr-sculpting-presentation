import React from "react";

import { Frame } from "../../components/frame";
import { Chapter } from "../../components/chapter";
// import { InteractiveSwitch } from "../../components/interactive-switch";
// import { InteractiveList } from "../../components/interactive-list";
import { Visualization } from "../../components/visualization";
import { Sketch, SketchType } from "./sketch";

export const NeighborhoodSearch: React.FC = () => {
  const [sketch, setSketch] = React.useState<SketchType>();

  React.useEffect(() => {
    setSketch(Sketch());
  }, []);

  return (
    <Frame>
      <Chapter title="Nachbarschaftssuche">
        {sketch && <Visualization render={sketch.render} />}
      </Chapter>
    </Frame>
  );
};
