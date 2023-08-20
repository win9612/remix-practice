import {
  SCarouselNavigationDot,
  SCarouselNavigationWrapper,
  SImageCarousel,
} from "./ImageCarousel.styled";
import Image from "../Image/_index";
import { useRef, useState } from "react";

const IMG_SRC: string[] = [
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA3MjNfMTk5%2FMDAxNjkwMDg3MDczMjUw.2ipdGelaPR-Qw2eY3nVZ2eos1zt3ZpSEykOQv5H1bGYg.9jhSQerhPIvmbTdOv-ysqiCHc5cwS8I6qX8x_-nbtjcg.JPEG.gae_jip%2F1679790559814.jpg&type=sc960_832",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA3MjBfMTcg%2FMDAxNjg5ODM1Nzg5NDAz.asN354t3Jt3rxYParMPKZlwJ9nxl2xDK_U6IaS42r7Qg.Zo-peGEtUQVcLSGhzE_urLrpIIX_HZfY35dcDfdYtEcg.JPEG.kimviva%2F20210331_213944.jpg&type=sc960_832",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA3MThfNDYg%2FMDAxNjg5NjQ0NTkzODcx.mok_LLKZh1wl40cNvEC_8fMH6CS1Ig-rv9uFbPLP_7Yg.qMTtV2usmm5wI5w6tyNZKbNT1fSOma16ovfs2rXwSaog.JPEG.bj9795%2F20230718_101656.jpg&type=sc960_832",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjdfMTQ0%2FMDAxNjc5ODQ2NzMzNDU4.49t5iuAfhUxcQQUE-nEuD_epLWwwoAu-pxzNsruoIrAg.Q5Gn6fH9DEbS_Dfoe1tGLxHV6QPInE2j4JUNBnRduWcg.JPEG.leesunwoo150%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5_%25281%2529.jpg&type=sc960_832",
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MTRfMTI5%2FMDAxNjgxNDMzNTYwMDc1.taTD5S-Y_t3Y-hq5d4ONd210fZ4rl_YgOzBR1EsWWo8g.tHhn2OOH4k3bx1HexO2dTB9bnMu1oWDBNhwHSrNcFTwg.JPEG.sihyeon050123%2FIMG_3465.JPG&type=sc960_832",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAMFBMVEXMzMyVlZWTk5PPz8/JycnGxsa9vb2Xl5fDw8PAwMCysrKioqK6urqvr6+ampqlpaXlFuv7AAADoUlEQVR4nO3Y67KbOgyAUXzDBAy8/9seyRcMadLufTrT0Om3+qMljTUgy7LJMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBecc7896v/F+NPGy01Ox5Wb1n0dv/YEPrTvXUd9J8bnuN0uU78c7R7qf8xG2P1rQczcRlkdtfhvx/gcuedoU7/cjJ3LtD1sNPLHrl+YxUkeNKfOpTLKLHnU+I0YH+NGucO5l3+yZqv/XoxZ9SFs+HUU/W4O4mLUURJ01Mvt6zE+KBqzu/OlTb0McpGbX0+iPGX0bZT8q436ToyP0dvbTpfzUQZuzcnJhdHvvzb5p15/WkDl69oGZDG8jnE3MlH20S+91nC5W82OPtdk2hSLNM+zzLL+dQpyfkapiK0ncHkR427KOu7dQG59Gaa8S+jcaquUtJjp+LrVpeKNNZcFrgsoTOUT2QZkMcXcD17FuB1dveO+tiNBkDIIq7U6Z87UCpEm1ypFcqANX1u/7fPqVisfRpt3gvyfuzy7Npkjhukx7kbqXZ5QlPrX8t+lFkoO6ipxsbZ4FR7yVH43dj2VQVlAbTfUjcbUPnuOcdcceE2B1XvOs6pdPEgijhxo/V5ykFfLemmjOXPy+KbmYIrlRKB94HWMe9ETzDLNcs+6ddXmsP+kDgYta/kgnbq8LqBp8LbkQFqA2X0qi+BdjBuRSZV+7VydWFnJUXa9xbztB0M+/Laqrx+UzIWag3LGavvC/ftBWf9SvroGZLLkakxJe/mjz91zTw/y5fmUA11Ac0p6IBjDcRyaylHpTYwbadv3kM+yUrjSHKy0h9zi3+ztuY2eP0hlWO4s6RjlJaT/G84HbdJ8zUERaw5KOUvPuJzxJrm8nHxTGfWUA60WXzqoa4fHW8pHInec9scs6WukFq48fOypaEOkW4xb3UeyUIZpqNG3kO3Vq8bYr+8kt6L7wkO7YL9FV6pY5ZeAcNna3UNndP3xkeoLQuktk3OtVrS55Bg3bQd5I4txXcz5MY8c5BPfcnmtDMumpR50a0jXSC0HmlANWUrlRYzbCfmUaM4/cfQ6cHv+RWg71b1+EPJzPv0qoi+cZcf0WwmZ3OsY9yPnXjkcnI88ctg53gXSErf19G0p6pj7pJTP/CYHg18lscvDvYlxQ24I/lqnIfR3Aff8Q0H//eCpuH0ILXNPIX/8LgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgn/IfGskbkC3k3csAAAAASUVORK5CYII=",
];

const ImageCarousel = () => {
  /** state & ref */
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement[]>([]);

  /** scroll function */
  const handleScroll = () => {
    const carouselWidth = carouselRef.current!.offsetWidth;

    if (carouselRef.current) {
      const scrollX = carouselRef.current.scrollLeft;

      if (scrollX % carouselWidth === 0) {
        setCurrentSlide(scrollX / carouselWidth);
      }
    }
  };

  /** click function */
  const handleDotClick = (index: number) => {
    setCurrentSlide(index);

    imgRef.current[index].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <SImageCarousel $width={"90%"} $height={"280px"}>
      <div ref={carouselRef} onScroll={handleScroll}>
        {IMG_SRC.map((src: string, index: number) => {
          return (
            <div
              key={index}
              ref={(element) => {
                imgRef.current[index] = element as HTMLDivElement;
              }}
            >
              <Image alt="image" src={src} />
            </div>
          );
        })}
      </div>
      <SCarouselNavigationWrapper>
        {IMG_SRC.map((src: string, index: number) => {
          return (
            <SCarouselNavigationDot
              key={index}
              $isActive={currentSlide === index}
              onClick={() => handleDotClick(index)}
            />
          );
        })}
      </SCarouselNavigationWrapper>
    </SImageCarousel>
  );
};

export default ImageCarousel;
