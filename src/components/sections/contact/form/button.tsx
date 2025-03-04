"use client";

import style from "@/styles/components/button.module.scss";
import { RightArrow } from "@/components/ui/custom/icons/right-arrow";
import { useRouter } from "@/navigation";

type Props = {
  text: string;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  className?: string;
  showArrow?: boolean;
  styleType?: "fullfill" | "outline" | "default";
  href?: string;
};

export const Button = ({
  text,
  type = "button",
  disabled,
  className = "",
  showArrow,
  styleType = "default",
  href,
}: Props) => {
  const router = useRouter();
  
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${
        style.btn
      } flex justify-center items-center gap-4 uppercase ${className} ${
        styleType != "default" && style[styleType] //TODO: Remover gambiarra
      }`}
      onClick={() => {
        if (href) { //TODO: Remover gambiarra
          router.push(href);
        }
      }}
    >
      {text}
      {showArrow && <RightArrow className="block" width="30" height="30" />}
    </button>
  );
};
