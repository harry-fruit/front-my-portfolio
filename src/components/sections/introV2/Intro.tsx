"use client";

import style from "@/styles/portfolio/landing/intro.module.scss";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { Button } from "../contact/form/Button";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { WordCloud } from "@/components/WordCloud";


export function Intro() {
  const t = useTranslations("introduction");

  return (
    <section id="introduction" className={style.container}>
      <div className={style.wrapper}>
        <div className={style.apresentation}>
          <h1>Isaque Duarte</h1>
          <h2>Software Engineer</h2>
        </div>
        <WordCloud className={style.wordCloud}/>
        <div className={style.btns}>
          <Button
            text={t("btns.resume")}
            className={style.btn}
            href="/resume"
          />
          <Button
            text={t("btns.about")}
            styleType="outline"
            className={style.btn}
            href="/about"
          />
        </div>
        <div className={style.links}>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/isaque-d-moreira-578697191/"}
            title={t("links.linkedInTitle")}
          >
            <LinkedinIcon />
          </Link>
          <Link
            target="_blank"
            href={"https://github.com/harry-fruit"}
            title={t("links.githubTitle")}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
