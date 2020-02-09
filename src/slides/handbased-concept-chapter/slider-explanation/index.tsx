import React from "react";

import { TextList as List, Item as Li } from "../../../components/text-list";
import { InteractiveSwitch } from "../../../components/interactive-switch";

import styles from "./slider-explanation.module.scss";
import msSliderUrl from "./msmr-slider.jpg";
import fingerSliderUrl from "./finger-slider.svg";

export const SliderExplanation: React.FC = () => (
  <InteractiveSwitch>
    <List>
      <Li>
        Ein Schieberegler ist ein Steuerelement, mit dem der Benutzer einen
        eindimensionalen skalaren Wert bestimmt
      </Li>
      <Li>
        In <strong>Donatello</strong> war es ursprünglich für die Bestimmung des
        Auswahlradius gedacht
      </Li>
      <Li>
        Existierende handbasierte Konzepte sind suboptimal:
        <img
          src={msSliderUrl}
          alt="Microsoft Mixed Reality Slider Konzept"
          className={styles.msmr}
        />
      </Li>
    </List>
    <List>
      <Li>
        Unser Konzept nutzt die Berührung zweier Finger für die Bestimmung des
        Ausgabewerts:
        <img
          src={fingerSliderUrl}
          alt="Neues handbasierter Schieberegler"
          className={styles.figure}
        />
      </Li>
    </List>
  </InteractiveSwitch>
);
