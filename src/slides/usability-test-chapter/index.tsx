import React from "react";

import { Chapter, ChapterSlide as Slide } from "../../components/chapter";
import { TextList as List, Item as Li } from "../../components/text-list";

import { Results } from "./results";
import { Evaluation } from "./evaluation";
import { FlyIn } from "../../components/animation/fly-in";

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
          Nachdem die Testpersonen eines der Interaktionskonzepte ausprobiert
          haben, bewerten sie dessen Qualität auf einem{" "}
          <strong>AttrakDiff</strong>
          -Fragebogen
        </Li>
      </List>
    </Slide>
    <Slide title="AttrakDiff als Evaluationsinstrument" largeTitle>
      <List>
        <Li>
          <strong>AttrakDiff</strong> ist ein Verfahren zur Ermittlung der
          Nutzungsqualität eines Produkts
        </Li>
        <Li>
          Dabei wird zwischen zwei Arten von Qualität unterschieden:
          <List>
            <Li>
              <strong>Pragmatisch</strong>: Gebrauchstauglichkeit /
              Produktivität
            </Li>
            <Li>
              <strong>Hedonisch</strong>: Emotionale Stimulation
            </Li>
          </List>
        </Li>
      </List>
    </Slide>
    <Slide title="Ergebnisse" largeTitle wrapElement={<FlyIn />}>
      <Results />
    </Slide>
    <Slide title="Auswertung" largeTitle>
      <Evaluation />
    </Slide>
    <Slide title="Fazit" largeTitle>
      <List>
        <Li>Handbasiertes Sculpting funktioniert!</Li>
        <Li>
          Trotz technischen Schwierigkeiten während des Tests wurde die
          Nutzungsqualität des handbasierten Interaktionskonzepts gut bewertet
        </Li>
        <Li>Weiterverfolgung der Technologie ist sinnvoll</Li>
      </List>
    </Slide>
  </Chapter>
);
