import React from "react";

import { Chapter, ChapterSlide as Slide } from "../../components/chapter";

import { SliderExplanation } from "./slider-explanation";
import { SliderDemo } from "./slider-demo";
import { SphereSelectorExplanation } from "./sphere-selector-explanation";
import { SphereSelectorDemo } from "./sphere-selector-demo";
import { ToolMenuDemo } from "./tool-menu-demo";
import { HandbasedSculptingDemo } from "./handbased-sculpting-demo";
import { FlyIn } from "../../components/animation/fly-in";

export const HandbasedConceptChapter: React.FC = () => (
  <Chapter title="Handbasiertes Interaktionskonzept" count={2}>
    <Slide title="Schieberegler" largeTitle>
      <SliderExplanation />
    </Slide>
    <Slide title="Handbasierter Schieberegler Demo" wrapElement={<FlyIn />}>
      <SliderDemo />
    </Slide>
    <Slide title="Alternative zum Schieberegler" largeTitle>
      <SphereSelectorExplanation />
    </Slide>
    <Slide title="Kugel-Selektor Demo" wrapElement={<FlyIn />}>
      <SphereSelectorDemo />
    </Slide>
    <Slide title="Werkzeugmenü Demo">
      <ToolMenuDemo />
    </Slide>
    <Slide title="Sculpting Demo">
      <HandbasedSculptingDemo />
    </Slide>
  </Chapter>
);
