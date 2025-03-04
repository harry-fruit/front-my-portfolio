import style from "@/styles/portfolio/landing/projects.module.scss";
import {
  SectionHeaderContainer,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/custom/shared/section-header/section-header";
import { FadeIn } from "@/components/ui/custom/shared/fade-in";
import { Card } from "@/components/ui/custom/card/card";
import { ResponsiveSlideGrid } from "@/components/ui/custom/shared/responsive-slide-grid";
import { useTranslations } from "next-intl";
import { CardTagsContainer } from "@/components/ui/custom/card/tags/card-tags-container";
import { CardTag, CardTagProps } from "@/components/ui/custom/card/tags/card-tag";
import { CardImage } from "@/components/ui/custom/card/card-image";

type CardsData = {
  link: {
    href:string;
    target?: "_blank"
  }
  title: string;
  image: {
    src: string;
    alt: string;
  };
  tags: CardTagProps[],
}

const cards: CardsData[] = [
  {
    title: "Simple Rest API",
    link: {
      href: "https://github.com/harry-fruit/simple-go-rest-api",
      target: "_blank"
    },
    tags: [
      {
        text: "GoLang",
        type: "golang"
      }
    ],
    image: { src: "/projects/go.png", alt: "Simple Rest API With GoLang - Logo" }
  },
  {
    title: "Gym Project",
    link: {
      href: "/projects/gym-project",
    },
    tags: [
      {
        text: "React",
        type: "react",
      },
      {
        text: "Sass",
        type: "sass"
      }
    ],
    image: { src: "/projects/gym.png", alt: "Gym Project" }
  },
  {
    title: "Brás Cubas's Kitchen",
    link: {
      href: "https://bras-kitchen.netlify.app/",
      target: "_blank"
    },
    tags: [
      {
        text: "HTML",
        type: "html"
      },
      {
        text: "CSS",
        type: "css"
      },
      {
        text: "Javascript",
        type: "javascript",
      },
    ],
    image: { src: "/projects/bras-kitchen.png", alt: "Brás Cubas's Kitchen" }
  },
  {
    title: "Matrix Canvas",
    link: {
      href: "https://codesandbox.io/p/github/harry-fruit/matrix-canvas/master",
      target: "_blank"
    },
    tags: [
      {
        text: "React",
        type: "react",
      },
      {
        text: "Sass",
        type: "sass"
      }
    ],
    image: { src: "/projects/matrix-canvas.gif", alt: "Matrix Canvas" }
  },
  {
    title: "My Portfolio",
    link: {
      href: "/",
    },
    tags: [
      {
        text: "Next.js",
        type: "nextjs"
      },
      {
        text: "Tailwind",
        type: "tailwind"
      },
      {
        text: "Sass",
        type: "sass"
      }
    ],
    image: { src: "/projects/my-portfolio.gif", alt: "My Portfolio" }
  },
  {
    title: "Base Converter",
    link: {
      href: "https://github.com/harry-fruit/Conversor-de-bases",
      target: "_blank",
    },
    tags: [
      {
        text: "Python",
        type: "python"
      }
    ],
    image: { src: "/projects/python.jpg", alt: "Python Logo" }
  }
];

export const Projects: React.FC = (): JSX.Element => {
  const t = useTranslations("projects");
  return (
    <FadeIn threshold={0.15} className={style.projectsContainer}>
      <section
        id={"projects"}
        className={"flex flex-col items-center py-6 md:py-8 lg:pb-36 lg:pt-20"}
      >
        <SectionHeaderContainer>
          <SectionTitle
            text={t("title")}
            className="text-primary-gradient dark:text-slate-50"
          />
          <SectionSubtitle text={t("subTitle")} />
        </SectionHeaderContainer>
        <div
          id="container"
          className="w-full h-full lg:w-[85%] xl:w-[95%] 2xl:w-[85%] 3xl:w-[70%]"
        >
          <ResponsiveSlideGrid>
            
            {cards.map((card, index) => (
              <Card key={index} title={card.title} link={card.link}>
                <CardTagsContainer>
                  {card.tags.map((tag, index) => (
                    <CardTag key={index} text={tag.text} type={tag.type} />
                  ))}
                </CardTagsContainer>
                <CardImage src={card.image.src} alt={card.image.alt} />
              </Card>
            ))}

          </ResponsiveSlideGrid>
        </div>
      </section>
    </FadeIn>
  );
};
