import React from "react";

import { Frame } from "../../components/frame";
import { Chapter } from "../../components/chapter";
import { List } from "../../components/list";
import { InteractiveList } from "../../components/interactive-list";
import { InteractiveSwitch } from "../../components/interactive-switch";
import { fadeInClassName } from "../../components/animation/fade-in";

export const Motivation: React.FC = () => {
  return (
    <Frame>
      <Chapter title="Motivation">
        <InteractiveSwitch wrapElement={<List />}>
          <InteractiveList wrapElement={<li className={fadeInClassName} />}>
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
          </InteractiveList>
          <InteractiveList wrapElement={<li className={fadeInClassName} />}>
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
          </InteractiveList>
        </InteractiveSwitch>
      </Chapter>
    </Frame>
  );
};
