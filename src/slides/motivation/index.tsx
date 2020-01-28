import React from "react";

import { Frame } from "../../components/frame";
import { Chapter } from "../../components/chapter";
import { TextList as List } from "../../components/text-list";
import { InteractiveList } from "../../components/interactive-list";
import { InteractiveSwitch } from "../../components/interactive-switch";
import { fadeInClassName } from "../../components/animation/fade-in";

const Li: React.FC = ({ children }) => (
  <li className={fadeInClassName}>{children}</li>
);

export const Motivation: React.FC = () => (
  <Frame>
    <Chapter title="Motivation">
      <List>
        <InteractiveSwitch>
          <InteractiveList>
            <Li>
              Virtual Reality wird zum großen Teil für{" "}
              <strong>Unterhaltung</strong> genutzt
            </Li>
            <Li>Es gibt nur wenige leistungsorientierte Anwendungen</Li>
            <Li>
              <u>Grund:</u> Die Verwendung von Motion Controller als
              Interaktionskonzept ist suboptimal
              <List>
                <Li>Zu wenig Tasten</Li>
                <Li>Keine Texteingabe</Li>
                <Li>Nicht so präzise wie eine Maus</Li>
              </List>
            </Li>
          </InteractiveList>
          <InteractiveList>
            <Li>
              Wahrscheinlich gibt es noch andere Interaktionskonzepte, die sich
              in virtuellen Umgebungen besser für die Steuerung
              leistungsorientierter Anwendungen eignen
            </Li>
            <Li>
              Handbasierte (bzw. Fingerbasierte) Interaktion ist eine
              vielversprechende Alternative
            </Li>
            <Li>
              Im kreativen Bereich kann VR erfolgreich für Produktivität genutzt
              werden
              <List>
                <Li>
                  <strong>Beispiele</strong>: TiltBrush, Medium
                </Li>
              </List>
            </Li>
          </InteractiveList>
        </InteractiveSwitch>
      </List>
    </Chapter>
  </Frame>
);
