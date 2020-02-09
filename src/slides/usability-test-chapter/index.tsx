import React from "react";

import { Chapter, ChapterSlide as Slide } from "../../components/chapter";
import { TextList as List, Item as Li } from "../../components/text-list";

export const UsabilityTestChapter: React.FC = () => (
  <Chapter title="Usability Test" count={3}>
    <Slide title="Ablauf" largeTitle>
      <List>
        <Li>
          9 Testpersonen benutzen abwechselnd das handbasierte und das
          controllerbasierte Interaktionskonzept
        </Li>
        <Li>
          Während der Benutzung werden die Testpersonen darum gebeten, ein
          Objekt ihrer Wahl zu modellieren
        </Li>
        <Li>
          Nachdem die Testperson ein Interaktionskonzept ausprobiert hat,
          bewertet sie dessen Qualität auf einem <strong>AttrakDiff</strong>
          -Fragebogen
        </Li>
      </List>
    </Slide>
    <Slide title="Evaluationsinstrument AttrakDiff" largeTitle>
      <List>
        <Li>
          <strong>AttrakDiff</strong> dient dazu, die Nutzungsqualität eines
          Softwareprodukts zu ermitteln
        </Li>
      </List>
    </Slide>
  </Chapter>
);
