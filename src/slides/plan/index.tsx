import React from "react";

import { Frame } from "../../components/frame";
import { Chapter } from "../../components/chapter";
import { TextList as List, Item as Li } from "../../components/text-list";
import { InteractiveSwitch } from "../../components/interactive-switch";
import { InteractiveList } from "../../components/interactive-list";

export const Plan: React.FC = () => (
  <Frame>
    <Chapter title="Ablauf">
      <List ordered>
        <InteractiveSwitch>
          <InteractiveList>
            <Li>
              VR-Sculpting-Anwendung entwickeln
              <br />
              (Grundlage ist der in der wissenschaftlichen Vertiefung
              entstandene Prototyp <strong>Donatello</strong>)
            </Li>
            <Li>
              Handbasiertes Interaktionskonzept entwickeln und in Donatello
              implementieren
            </Li>
            <Li>
              Neues handbasiertes Interaktionskonzept testen und mit dem
              controllerbasierten vergleichen
            </Li>
          </InteractiveList>
        </InteractiveSwitch>
      </List>
    </Chapter>
  </Frame>
);
