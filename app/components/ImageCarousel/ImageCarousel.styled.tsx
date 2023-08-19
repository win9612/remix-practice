import { styled } from "styled-components";
import { type IImageCarouselStyle } from "./ImageCarousel.type";

export const SImageCarousel = styled.div<IImageCarouselStyle>`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => (props.isRed ? "red" : "beige")};
`;
