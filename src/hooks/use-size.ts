import { useState, useEffect, RefObject } from "react";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const useSize = (ref?: RefObject<HTMLElement>): Size => {
  const [size, setSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      if (ref?.current) {
        setSize({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      } else {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  return size;
};

export default useSize;
