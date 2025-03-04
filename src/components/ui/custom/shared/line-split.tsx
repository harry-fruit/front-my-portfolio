import React from "react";
import { FadeIn } from "@/components/ui/custom/shared/fade-in";

type DefaultProps = {
  /**
   * Extra class to add to the component.
   */
  className?: string;
};

type LineSplitProps = {
  /**
   * Extra class to add to the component.
   */
  fadeIn?: boolean;
  alignCenter?: boolean;
} & DefaultProps;

const Component: React.FC<DefaultProps> = ({
  className,
}: DefaultProps): JSX.Element => {
  return (
    <div
      className={`w-3/4 h-[.15rem] rounded-full md:w-2/4 bg-primary-500 ${
        className || ""
      }`}
    />
  );
};

/**
 * Line Split Component
 *
 * This component is used to create a line split in the page.
 *
 * @example
 * <LineSplit className={"md:left-0"} fadeIn={true} />
 */

export const LineSplit: React.FC<LineSplitProps> = ({
  className = "",
  fadeIn,
  alignCenter
}: LineSplitProps): JSX.Element => {
  return fadeIn ? (
    <FadeIn className={alignCenter ? "flex flex-col items-center justify-center" : ""}>
      <Component className={className} />
    </FadeIn>
  ) : (
    <Component className={className} />
  );
};
