import React from "react";

import { Chapter, ChapterSlide as Slide } from "../../components/chapter";
import { TextList as List, Item as Li } from "../../components/text-list";

import { Explanation } from "./explanation";
import { NaiveNeighborhoodSearch } from "./naive-neighborhood-search";
import { GridNeighborhoodSearch } from "./grid-neighborhood-search";
import { NeighborhoodSearchComparison } from "./neighborhood-search-comparison";

export const SculptingOptimizationChapter: React.FC = () => (
  <Chapter title="Sculpting Optimierung" count={1}>
    <Slide title="Einführung" largeTitle>
      <List>
        <Li>
          Sculpting ist die Modifikation der Knotenpositionen eines
          Polygonnetzes, die in einem vom Benutzer gewählten Bereich liegen
        </Li>
        <Li>
          Häufige Modifikation:
          <List>
            <Li>Verschiebung der Knoten entlang ihrer Normalen</Li>
          </List>
        </Li>
      </List>
    </Slide>
    <Slide title="Einführung">
      <Explanation />
    </Slide>
    <Slide title="Nachbarschaftssuche" largeTitle>
      <List>
        <Li>
          <u>Ziel</u>: Finde alle Knoten im Auswahlbereich
        </Li>
        <Li>
          Naiver Ansatz:
          <List>
            <Li>
              Vergleiche die Entfernung jedes Knotens zu dem Mittelpunkt der
              Auswahlregion und mit dem Radius der Auswahlregion
            </Li>
          </List>
        </Li>
      </List>
    </Slide>
    <Slide title="Naive Nachbarschaftssuche">
      <NaiveNeighborhoodSearch />
    </Slide>
    <Slide title="Räumliche Datenstruktur" largeTitle>
      <List>
        <Li>
          <u>Optimierung</u>: Knoten werden in eine räumliche Datenstruktur
          eingeordnet
        </Li>
        <Li>
          Die Datenstruktur ist ein Gitter, das den Raum in gleichgroße Zellen
          aufteilt
        </Li>
        <Li>
          Jede Zelle enthält die Referenzen zu den Knoten, die sich in der Zelle
          befinden
        </Li>
      </List>
    </Slide>
    <Slide title="Nachbarschaftssuche in Grid Datenstruktur">
      <GridNeighborhoodSearch />
    </Slide>
    <Slide title="Vergleich der Algorithmen" largeTitle>
      <NeighborhoodSearchComparison />
    </Slide>
  </Chapter>
);
