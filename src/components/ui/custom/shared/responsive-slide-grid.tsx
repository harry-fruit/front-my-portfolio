"use client";

import useSize from "@/hooks/use-size";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { LeftArrow } from "@/components/ui/custom/icons/left-arrow";
import { RightArrow } from "@/components/ui/custom/icons/right-arrow";
import { useTranslations } from "next-intl";

type Props = {
  children: React.ReactNode;
};

export const SlideComponent: React.FC<Props> = ({ children }: Props) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const t = useTranslations("projects");

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % React.Children.count(children));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? React.Children.count(children) - 1 : prev - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

  return (
    <div className="h-full w-full flex flex-col justify-center items-start">
      <div
        className="flex flex-col justify-start items-start h-full w-full transition-transform duration-300 "
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        {...handlers}
      >
        <div className=" flex flex-nowrap lg:w-0">{children}</div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mb-10">
        <div className="w-full flex justify-center items-center gap-2 mb-2">
          <div className="flex flex-col items-center justify-center p-4 border rounded active:shadow-md dark:active:border-white">
            <LeftArrow
              onClick={prevSlide}
              width="20"
              height="20"
              className="text-gray-900 dark:text-gray-300 dark:active:text-white"
            />
          </div>
          <div className="flex flex-col items-center justify-center p-4 border rounded active:shadow-md dark:active:border-white">
            <RightArrow
              onClick={nextSlide}
              width="20"
              height="20"
              className="text-gray-900 dark:text-gray-300 dark:active:text-white"
            />
          </div>
        </div>
        <p className="text-gray-500 text-s text-center mt-6 px-4"><i>{t("slideTip")}</i></p> 
      </div>
    </div>
  );
};

export const ResponsiveSlideGrid: React.FC<Props> = ({ children }: Props) => {
  const { width } = useSize();
  const isSmallDevice = (width || 0) < 1024;

  return isSmallDevice ? (
    <SlideComponent>{children}</SlideComponent>
  ) : (
    <GridComponent>{children}</GridComponent>
  );
};

export const GridComponent: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8 justify-items-center">
      {children}
    </div>
  );
};
