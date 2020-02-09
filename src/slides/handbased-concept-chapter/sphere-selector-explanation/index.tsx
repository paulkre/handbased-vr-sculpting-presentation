import React from "react";

import { TextList as List, Item as Li } from "../../../components/text-list";
// import { InteractiveSwitch } from "../../../components/interactive-switch";

import figureUrl from "./sphere-selector.svg";

export const SphereSelectorExplanation: React.FC = () => (
  <List>
    <Li>
      Speziell für Bestimmung des Auswahlbereichs beim Sculpting ist ein
      Schieberegler nicht ideal
    </Li>
    <Li>
      Besser eignet sich dafür der "<strong>Kugel-Selektor</strong>":
      <img
        src={figureUrl}
        alt="Kugel-Selektor"
        style={{
          display: "block",
          height: "40vh",
          marginTop: "2vh"
        }}
      />
    </Li>
  </List>
);
