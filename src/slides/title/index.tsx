import React, { useState } from "react";

import { Frame } from "../../components/frame";
import { FadeIn } from "../../components/fade-in";
import { IntervalList } from "../../components/interval-list";

import styles from "./title.module.scss";
import logosUrl from "./hsd-logos.svg";

export const Title: React.FC = () => {
  const [animationFinished, setAnimationFinished] = useState(false);

  const handleAnimationFinished = () => setAnimationFinished(true);

  const style: React.CSSProperties = {};
  if (!animationFinished) style.borderColor = "rgba(1,1,1,0)";

  return (
    <Frame>
      <div className={styles.outerWrapper} style={style}>
        <div className={styles.innerWrapper}>
          <IntervalList
            intervalDuration={0.2}
            wrapElement={<FadeIn duration={3} />}
            onFinished={handleAnimationFinished}
          >
            <div className={styles.label}>Kolloquium von Paul Kretschel</div>
            <span className={styles.heading}>
              Handbasiertes Sculpting
              <br />
              in Virtual Reality
            </span>
            <img src={logosUrl} alt="HSD Logos" className={styles.logos} />
          </IntervalList>
        </div>
      </div>
    </Frame>
  );
};
