import React from "react";

import { Frame } from "../../components/frame";
import { Chapter } from "../../components/chapter";
import { TextList as List, Item as Li } from "../../components/text-list";
import { InteractiveSwitch } from "../../components/interactive-switch";
import { InteractiveList } from "../../components/interactive-list";

export const RelatedWork: React.FC = () => (
  <Frame>
    <Chapter title="Related Work">
      <List>
        <InteractiveSwitch>
          <InteractiveList>
            <Li>
              Ziel der wissenschaftlichen Vertiefung war die Entwicklung des
              VR-Sculpting-Prototyps <strong>Donatello</strong>
            </Li>
            <Li>
              Um die Qualität einer handbasierten Bedienung zu testen, habe ich
              ein <strong>handbasiertes Interaktionskonzept</strong> in
              Donatello implementiert
            </Li>
            <Li>
              Darüber hinaus waren folgende Erweiterungen des Prototyps
              notwendig, um ihn erfolgreich in einer Studie zu verwenden:
              <List>
                <Li>Effiziente Nachbarschaftssuche</Li>
                <Li>Smoothing Tool</Li>
                <Li>Multithreading</Li>
              </List>
            </Li>
          </InteractiveList>
        </InteractiveSwitch>
      </List>
    </Chapter>
  </Frame>
);
