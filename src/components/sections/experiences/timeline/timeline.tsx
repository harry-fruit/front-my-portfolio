import style from "@/styles/portfolio/landing/experiences.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Timeline: React.FC<Props> = ({ children, className }: Props): JSX.Element => {
  return (
    <div className={`w-full sm:w-3/4 py-8 lg:py-6 ${className}`}>
      <ul className={`${style.timeline} ${style.timelineCentered}`}>
        {children}
      </ul>
    </div>
  );
};
