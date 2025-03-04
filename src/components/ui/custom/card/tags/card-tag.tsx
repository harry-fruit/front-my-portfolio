import style from "@/styles/components/card/tags.module.scss";

export type CardTagProps = {
  text: string;
  type:
    | "golang"
    | "python"
    | "javascript"
    | "typescript"
    | "react"
    | "nextjs"
    | "sass"
    | "css"
    | "html"
    | "sql"
    | "tailwind"
    | "new"
    | "default";
};

export const CardTag = ({ text, type }: CardTagProps) => {
  return <li className={`${style[type]} ${style.tag} text-xs md:text-sm lg:text-base xl:text-xs 2xl:text-sm`}>{text}</li>;
};
