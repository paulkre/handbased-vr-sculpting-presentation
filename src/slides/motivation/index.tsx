import React from "react";

import { SlideFrame } from "../../components/slide-frame";
import { TextList as List, Item as Li } from "../../components/text-list";
import { InteractiveSwitch } from "../../components/interactive-switch";
import { fadeInClassName } from "../../components/animation/fade-in";
import { ImgGallery } from "../../components/img-gallery";

import tiltBrushImgUrl from "./tiltbrush.jpg";
import mediumImgUrl from "./medium.jpg";

export const Motivation: React.FC = () => (
  <SlideFrame title="Motivation">
    <InteractiveSwitch>
      <List>
        <Li>
          Virtual Reality wird zum großen Teil für <strong>Unterhaltung</strong>{" "}
          genutzt
        </Li>
        <Li>Es gibt nur wenige leistungsorientierte Anwendungen</Li>
        <Li>
          <u>Grund</u>: Die Verwendung von Motion Controller als
          Interaktionskonzept ist suboptimal
          <List>
            <Li>Zu wenig Tasten</Li>
            <Li>Unpräziser und anstrengender als die Verwendung einer Maus</Li>
            <Li>Texteingabe ist aufwändig</Li>
          </List>
        </Li>
      </List>
      <List>
        <Li>
          Womöglich gibt es noch effektivere Interaktionskonzepte für die
          Bedienung von leistungsorientierten Anwendungen in virtuellen
          Umgebungen
        </Li>
        <Li>
          Handbasierte (bzw. Fingerbasierte) Interaktion erweist sich als
          vielversprechende Alternative
          <List>
            <Li>
              Natürliche intuitive Interaktion, da physische Gerät nicht
              benötigt werden
            </Li>
            <Li>Viele mögliche Signale mit Kombinationen aus Handgesten</Li>
            <Li>
              Unerforschte handbasierte Interaktionskonzepte erlauben womöglich
              eine effiziente Texteingabe
            </Li>
          </List>
        </Li>
      </List>
      <List>
        <Li>
          Viele leistungsorientierte Anwendungen funktionieren besser in
          desktopbasierten Umgebungen
        </Li>
        <Li>
          Allerdings gibt es im kreativen Bereich viele professionelle Nutzer
          von VR-Anwendungen
        </Li>
        <ImgGallery
          className={fadeInClassName}
          columns={[
            {
              caption: "Tilt Brush",
              imgProps: {
                src: tiltBrushImgUrl,
                alt: "Tilt Brush Demo"
              }
            },
            {
              caption: "Medium",
              imgProps: {
                src: mediumImgUrl,
                alt: "Medium Demo"
              }
            }
          ]}
        />
      </List>
    </InteractiveSwitch>
  </SlideFrame>
);
