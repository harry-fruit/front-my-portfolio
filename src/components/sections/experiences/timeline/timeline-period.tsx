import style from "@/styles/portfolio/landing/experiences.module.scss";
import { FadeIn } from "@/components/ui/custom/shared/fade-in";

type Props = {
  period: string;
};

export const TimelinePeriod: React.FC<Props> = ({
  period,
}: Props): JSX.Element => {
  return (
    <FadeIn className={`${style.timelineItem} ${style.period}`}>
      <li>
        <div className={style.timelineInfo}></div>
        <div className={style.timelineMarker}></div>
        <div className={style.timelineContent}>
          <h2 className={`${style.timelineTitle}`}>{period}</h2>
        </div>
      </li>
    </FadeIn>
  );
};
