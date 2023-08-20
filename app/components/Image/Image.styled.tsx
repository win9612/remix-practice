import { styled } from "styled-components";
import type { IImageStyle } from "./Image.type";

export const SImage = styled.img<IImageStyle>`
  width: ${(props) => props.$width || "120px"};
  height: ${(props) => props.$height || "120px"};
  object-fit: ${(props) => props.$objectFit};
`;
