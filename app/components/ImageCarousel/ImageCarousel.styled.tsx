import { styled } from "styled-components";
import type {
  ICarouselNavigationDotStyle,
  IImageCarouselStyle,
} from "./ImageCarousel.type";

export const SImageCarousel = styled.div<IImageCarouselStyle>`
  display: flex;
  position: relative;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  min-width: ${(props) => props.$width};

  ::-webkit-scrollbar {
    display: none;
  }

  /* Carousel */
  > div:first-child {
    width: 100%;
    height: 100%;

    display: flex;
    position: relative;
    flex-direction: row;

    overflow-x: scroll;
    overflow-y: hidden;

    background-color: beige;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
    border-radius: 64px;

    scroll-snap-type: x mandatory;

    > div {
      scroll-snap-align: start;
      min-width: 100%;
      border-radius: 16px;

      > img {
        width: 100%;
        height: 100%;
        object-fit: contain; // 가로세로 비율 유지한 채로 컨테이너 맞추기 (빈공간 O)
        /* object-fit: cover; // 가로세로 비율 유지한 채로 컨테이너 맞추기 (빈공간 X) */
        /* object-fit: scale-down; // contain과 cover 중 더 적절한 방향으로 조절 */
      }
    }
  }
`;

export const SCarouselNavigationWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;

  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);

  width: 200px;
  height: 32px;
`;

export const SCarouselNavigationDot = styled.button<ICarouselNavigationDotStyle>`
  display: flex;
  width: ${(props) => (props.$isActive ? "32px" : "16px")};
  height: 16px;

  border: none;
  border-radius: ${(props) => (props.$isActive ? "16px" : "100%")};
  background-color: ${(props) => (props.$isActive ? "orange" : "white")};

  cursor: pointer;
  transition: all 0.25s ease-in-out;
`;
