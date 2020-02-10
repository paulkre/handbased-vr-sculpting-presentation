import React from "react";

import { Frame } from "../../components/frame";
import { RainbowText } from "../../components/rainbow-text";

import styles from "./thank-you.module.scss";

export const ThankYou: React.FC = () => (
  <Frame>
    <div className={styles.wrapper}>
      <RainbowText>Vielen Dank!</RainbowText>
    </div>
  </Frame>
);
