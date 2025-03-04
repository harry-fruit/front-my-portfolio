"use client";

import style from "@/styles/components/navbar/menu-button.module.scss";
import { useTranslations } from "next-intl";

type Props = {
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
};

export const MenuButton = ({ isActive, onClick, className = "" }: Props) => {
  const t = useTranslations("navbar.menuButton");

  return (
    <div
      title={isActive ? t("close") : t("open")}
      className={`${style.menuButtonContainer} ${isActive ? style.active : ""} ${className}`}
      onClick={onClick}
    >
      <span className={style.bar} />
      <span className={style.bar} />
    </div>
  );
};
