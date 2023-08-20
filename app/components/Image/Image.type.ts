export interface IImage extends IImageStyle {
  src: string;
  alt?: string;
}

export interface IImageStyle {
  $width?: string;
  $height?: string;
  $objectFit?: string;
}
