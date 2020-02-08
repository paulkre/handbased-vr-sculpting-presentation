import React from "react";

import styles from "./video.module.scss";

type VideoProps = {
  src: string;
};

export const Video: React.FC<VideoProps> = ({ src }) => (
  <video className={styles.video} autoPlay loop>
    <source src={src} type="video/mp4" />
  </video>
);
