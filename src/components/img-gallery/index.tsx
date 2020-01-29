import React from "react";
import cn from "classnames";

import styles from "./img-gallery.module.scss";

type ColumnProps = {
  imgProps: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  caption: string;
};

type ImgGalleryProps = {
  columns: ColumnProps[];
  className?: string;
};

const Column: React.FC<ColumnProps> = ({ caption, imgProps }) => (
  <div className={styles.column}>
    <img alt={caption} {...imgProps} />
    <div className={styles.caption}>{caption}</div>
  </div>
);

export const ImgGallery: React.FC<ImgGalleryProps> = ({
  columns,
  className
}) => (
  <div className={cn(styles.wrapper, className)}>
    {columns.map((columnProps, i) => (
      <Column {...columnProps} key={i} />
    ))}
  </div>
);
