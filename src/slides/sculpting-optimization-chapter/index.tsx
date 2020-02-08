import React from "react";

import { Chapter, ChapterSlide as Slide } from "../../components/chapter";
import { Explanation } from "./explanation";
import { NaiveNeighborhoodSearch } from "./naive-neighborhood-search";
import { GridNeighborhoodSearch } from "./grid-neighborhood-search";
import { NeighborhoodSearchComparison } from "./neighborhood-search-comparison";

export const SculptingOptimizationChapter: React.FC = () => (
  <Chapter title="Sculpting Optimierung" count={1}>
    <Slide title="Einführung">
      <Explanation />
    </Slide>
    <Slide title="Naive Nachbarschaftssuche">
      <NaiveNeighborhoodSearch />
    </Slide>
    <Slide title="Nachbarschaftssuche in Grid Datenstruktur">
      <GridNeighborhoodSearch />
    </Slide>
    <Slide title="Vergleich der Algorithmen">
      <NeighborhoodSearchComparison />
    </Slide>
  </Chapter>
);
