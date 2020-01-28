import React from "react";

import { Frame } from "../../components/frame";
import { Chapter } from "../../components/chapter";
import { List } from "../../components/list";
import { ActionList } from "../../components/action-list";
import { fadeInClassName } from "../../components/animation/fade-in";

export const Motivation: React.FC = () => {
  return (
    <Frame>
      <Chapter title="Motivation">
        <List>
          <ActionList wrapElement={<li className={fadeInClassName} />}>
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
          </ActionList>
        </List>
      </Chapter>
    </Frame>
  );
};
