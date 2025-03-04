"use client";

import style from "@/styles/components/card/card.module.scss";
import { Link } from "@/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";
import { RightArrow } from "@/components/ui/custom/icons/right-arrow";

type Props = {
  className?: string;
  title: string;
  children: ReactNode;
  link: {
    href:string;
    target?: "_blank"
  }
};

export const Card = ({ className = "", title, children, link }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [useCardSize, setCardSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  const setShadowCardSize = () => {
    if (cardRef.current) {
      const { width, height } = cardRef.current.getBoundingClientRect();
      setCardSize({ width: width - 5, height: height - 5 });
    }
  };

  useEffect(() => {
    setShadowCardSize();
    window.addEventListener("resize", setShadowCardSize);

    return () => {
      window.removeEventListener("resize", setShadowCardSize); // Remove o listener ao desmontar o componente
    };
  }, [cardRef]);

  return (
    <div
      id="card-container"
      className={`w-[100vw] min-h-[400px] lg:w-[450px] relative flex flex-col items-center justify-center mb-8 md:mb-12 lg:mb-5 ${className}`}
    >
      <div
        id="card"
        ref={cardRef}
        className={`w-[90%] max-w-[600px] min-h-[375px] absolute rounded-2xl overflow-hidden p-5 flex flex-col items-center justify-between gap-4 ${style.card} ${className}`}
      >
        {children}
        <CardInfo>
          <CardHeader link={link} title={title} />
        </CardInfo>
      </div>
      <div
        id="animated-card"
        style={{
          width: `${useCardSize.width}px`,
          height: `${useCardSize.height}px`,
        }}
        className={`w-[${useCardSize.width}px] h-[${useCardSize.height}px] absolute rounded-xl ${style.animatedCard}`}
      ></div>
      <div
        id="animated-card-2"
        style={{
          width: `${useCardSize.width}px`,
          height: `${useCardSize.height}px`,
        }}
        className={`absolute rounded-xl ${style.animatedCard}`}
      ></div>
    </div>
  );
};

const CardHeader = ({ title, link }: { title: string, link: {href:string, target?: "_blank"} }) => {
  return (
    <div id="card-header" className="w-full flex justify-between items-center ">
      <div id="card-title">
        <h2 className={`${style.cardTitle}`}>{title}</h2>
      </div>
      <Link href={link.href} target={link.target || "_self"} title={`Go to '${title}'`} className={`p-2 rounded-full ${style.button}`}>
        <RightArrow width="25" height="25" className="text-gray-50" />
      </Link>
    </div>
  );
};

const CardInfo = ({ children }: { children: ReactNode }) => {
  return (
    <div id="card-info" className="w-full h-auto grid grid-rows-1">
      {children}
    </div>
  );
};
