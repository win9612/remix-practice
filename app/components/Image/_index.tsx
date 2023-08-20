import React from "react";
import { SImage } from "./Image.styled";
import type { IImage } from "./Image.type";

const Image = ({ src, alt, $height, $objectFit, $width }: IImage) => {
  return (
    <SImage
      src={src}
      alt={alt}
      $height={$height}
      $width={$width}
      $objectFit={$objectFit}
    />
  );
};

export default Image;
