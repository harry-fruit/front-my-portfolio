import anime from "animejs";
import { RefObject, useEffect } from "react";

type Props = {
  headerRef: RefObject<HTMLHeadingElement>;
  subHeaderRef: RefObject<HTMLHeadingElement>;
  lineRef: RefObject<HTMLDivElement>;
};

export const useAnimeIntroduction = ({
  headerRef,
  subHeaderRef,
  lineRef,
}: Props) => {
  useEffect(() => {
    anime({
      targets: lineRef.current,
      easing: "linear",
      width: ["0%", "100%", "0%"],
      duration: 1500,
    });

    anime({
      targets: headerRef.current,
      delay: 1500,
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 1500,
    });

    anime({
      targets: subHeaderRef.current,
      delay: 1500,
      translateY: [-20, 0],
      opacity: [0, 1],
      duration: 1500,
    });
  }, [headerRef, subHeaderRef, lineRef]);
};
