import { useState, useEffect, useRef, MutableRefObject } from "react";

interface IntersectionObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

const useInView = (options?: IntersectionObserverOptions): [MutableRefObject<null>, boolean] => {
  const [inView, setInView] = useState<boolean>(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        setInView(true);

        if (options?.triggerOnce) {
          obs.unobserve(entry.target);
        }
      } else {
        if (!options?.triggerOnce) {
          setInView(false);
        }
      }
    }, options);

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, inView];
};

export default useInView;
