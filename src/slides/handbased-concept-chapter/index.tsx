import React from "react";

import { Chapter, ChapterSlide as Slide } from "../../components/chapter";

import { SliderDemo } from "./slider-demo";
import { SphereSelectorDemo } from "./sphere-selector-demo";
import { ToolMenuDemo } from "./tool-menu-demo";
import { HandbasedSculptingDemo } from "./handbased-sculpting-demo";

export const HandbasedConceptChapter: React.FC = () => (
  <Chapter title="Handbasiertes Interaktionskonzept" count={2}>
    <Slide title="Finger-Slider Demo">
      <SliderDemo />
    </Slide>
    <Slide title="Kugel-Selektor Demo">
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
