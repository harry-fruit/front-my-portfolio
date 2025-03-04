"use client";

import { usePathname } from "@/navigation";
import { useEffect, useState } from "react";

export default function useHeader() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [isOnIntro, setIsOnIntro] = useState(isHomepage);

  useEffect(() => {
    const intro = document.getElementById("introduction");

    if (!intro) {
      setIsOnIntro(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsOnIntro(false);
          return;
        }

        setIsOnIntro(true);
      },
      { threshold: 0 }
    );

    observer.observe(intro);

    return () => {
      observer.disconnect();
    };
  }, [isHomepage]);

  return { isOnIntro };
}
