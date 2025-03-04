import style from "@/styles/components/card/tags.module.scss";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const CardTagsContainer = ({ children }: Props) => {
  return (
    <ul id="card-tags" className={`${style.tagContainer}`}>
      {children}
    </ul>
  );
};
