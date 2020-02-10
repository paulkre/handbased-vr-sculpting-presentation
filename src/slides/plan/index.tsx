import React from "react";

import { SlideFrame } from "../../components/slide-frame";
import { TextList as List, Item as Li } from "../../components/text-list";

export const Plan: React.FC = () => (
  <SlideFrame title="Outline">
    <List ordered>
      <Li>
        Optimierung der Sculpting Anwendung <strong>Donatello</strong>
      </Li>
      <Li>Entwicklung eines handbasierten Interaktionskonzept</Li>
      <Li>
        Vergleich des handbasierten Konzepts mit dem controllerbasierten in
        einem Usability-Test
      </Li>
    </List>
  </SlideFrame>
);
