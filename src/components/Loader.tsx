import style from "@/styles/loader.module.scss";
import { SpinnerIcon } from "@/components/icons/Spinner";
import { useTranslations } from "next-intl";

type LoaderProps = {
  message?: string;
};

export const Loader = ({ message }: LoaderProps) => {
  const t = useTranslations("loadingSpinner");
  return (
    <div className={style.container}>
      <div className={`${style.loader}`}>
        <span className={style.message}>{message || t("message")}</span>
        <SpinnerIcon width="20" height="20" />
      </div>
    </div>
  );
};
