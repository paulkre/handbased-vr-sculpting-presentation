import React from "react";

import styles from "./video.module.scss";

type VideoProps = {
  src: string;
  caption?: string;
};

export const Video: React.FC<VideoProps> = ({ src, caption }) => (
  <div className={styles.wrapper}>
    <video className={styles.video} autoPlay loop>
      <source src={src} type="video/mp4" />
    </video>
    {caption && <div className={styles.caption}>{caption}</div>}
  </div>
);
