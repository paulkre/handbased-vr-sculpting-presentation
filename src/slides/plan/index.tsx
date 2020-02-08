import React from "react";

import { SlideFrame } from "../../components/slide-frame";
import { TextList as List, Item as Li } from "../../components/text-list";
import { InteractiveSwitch } from "../../components/interactive-switch";
import { InteractiveList } from "../../components/interactive-list";

export const Plan: React.FC = () => (
  <SlideFrame title="Ablauf">
    <List ordered>
      <InteractiveSwitch>
        <InteractiveList>
          <Li>
            VR-Sculpting-Anwendung entwickeln
            <br />
            (Grundlage ist der in der wissenschaftlichen Vertiefung entstandene
            Prototyp <strong>Donatello</strong>)
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
  </SlideFrame>
);
