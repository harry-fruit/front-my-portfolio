import style from "@/styles/portfolio/landing/experiences.module.scss";
import { FadeIn } from "@/components/ui/custom/shared/fade-in";

type Props = {
  title: string;
  description: string;
  date: string;
};

export const TimelineItem: React.FC<Props> = ({
  title,
  description,
  date,
}: Props): JSX.Element => {
  return (
    <FadeIn className={style.timelineItem}>
      <li>
        <div className={`${style.timelineInfo}`}>
          <span className={style.timelineDate}>{date}</span>
        </div>
        <div className={style.timelineMarker}></div>
        <div className={style.timelineContent}>
          <h3 className={`${style.timelineTitle}`}>{title}</h3>
          <p>{description}</p>
        </div>
      </li>
    </FadeIn>
  );
};
