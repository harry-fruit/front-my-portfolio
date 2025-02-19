"use client";

import { Link } from "@/navigation";
import style from "@/styles/resume.module.scss";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { DownloadIcon } from "@/components/icons/Download";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { useTranslations } from "next-intl";
import toast from "react-hot-toast";
import { handleResumeGeneration } from "@/util/generateResume";
import { useTransition } from "react";
import { Loader } from "@/components/Loader";
import { useUserDevice } from "@/hooks/useUserDevice";

type ResumeProps = {
  params: {
    locale: string;
  };
};

const Resume = ({ params: { locale } }: ResumeProps) => {
  const t = useTranslations("resume");
  const [isPending, startTransition] = useTransition();
  const userDevice = useUserDevice();

  const generateResume = async () => {
    startTransition(async () => {
      const response = await fetch(`/api/${locale}/generate-pdf`);

      if (!response.ok) {
        toast.error(t("errors.generateResume"));
        return;
      }

      const blob = await response.blob();
      handleResumeGeneration({ blob, device: userDevice });
    });
  };

  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center justify-center md:py-8 md:px-8">
      <div id="resume-container" className={style.container}>
        {isPending && <Loader message={t("loadingSpinner.message")} />}
        <ul id="links" className={style.links}>
          <li>
            <Link
              href={"https://www.linkedin.com/in/isaque-d-moreira-578697191/"}
              title={t("links.linkedInTitle")}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon className={`${style.linkedinIcon}`} />
            </Link>
          </li>
          <li>
            <Link
              href={"https://github.com/harry-fruit"}
              title={t("links.githubTitle")}
              target="_blank"
            >
              <GithubIcon />
            </Link>
          </li>
          <li title={t("links.emailTitle")}>
            <Link href="mailto:isaqueduarte17@gmail.com">
              <EmailIcon width="20" height="20" />
            </Link>
          </li>
          <li
            id="download-resume"
            title={t("links.downloadTitle")}
            onClick={generateResume}
          >
            <DownloadIcon width="20" height="20" />
          </li>
        </ul>
        <aside className={style.aside}>
          <div id="more-info" className={style.moreInfo}>
            <Link
              href={"/"}
              target="_blank"
              className={`${style.primaryColor} font-bold`}
            >
              {t("aside.portfolio")}
            </Link>
            <p>{t("myInfo.location")}</p>
          </div>
          <div className={style.skillsContainer}>
            <div className={style.skills}>
              <h2 className={`${style.primaryColor}`}>
                {t("aside.skills.core.title")}
              </h2>
              <ul>
                <li>Typescript</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className={style.skills}>
              <h2 className={`${style.primaryColor}`}>
                {t("aside.skills.others.title")}
              </h2>
              <ul>
                <li>{t("aside.skills.others.skills.one")}</li>
                <li>{t("aside.skills.others.skills.two")}</li>
                <li>{t("aside.skills.others.skills.three")}</li>
                <li>{t("aside.skills.others.skills.four")}</li>
                <li>{t("aside.skills.others.skills.five")}</li>
                <li>{t("aside.skills.others.skills.six")}</li>
                <li>{t("aside.skills.others.skills.seven")}</li>
              </ul>
            </div>
          </div>
        </aside>
        <section id="introduction" className={style.introduction}>
          <h1 className={`${style.primaryColor}`}>Isaque Duarte</h1>
          <h3>{t("myInfo.role")}</h3>
          <p>{t("subtitle")}</p>
        </section>
        <section id="experiences" className={style.experiences}>
          <div className={style.experiencesHeader}>
            <h2 className={`${style.sectionTitle} ${style.primaryColor}`}>
              {t("experiences.title")}
            </h2>
            <p>{t("experiences.subtitle")}</p>
          </div>
          <div className={style.experienceItemsWrapper}>
            <div className={style.experienceItem}>
              <div className={style.experienceHeader}>
                <p>
                  <span
                    className={`${style.companyName} ${style.primaryColor}`}
                  >
                    Pollux{" "}
                  </span>
                  <span className={style.role}>
                    ― {t("experiences.jobs.one.role")}
                  </span>
                </p>
                <p className={style.period}>
                  {t("experiences.jobs.one.period")}
                </p>
              </div>
              <p className={style.description}>
                {t("experiences.jobs.one.description")}
              </p>
              <ul>
                <li>{t("experiences.jobs.one.activities.one")}</li>
                <li>{t("experiences.jobs.one.activities.two")}</li>
                <li>{t("experiences.jobs.one.activities.three")}</li>
                <li>{t("experiences.jobs.one.activities.four")}</li>
              </ul>
            </div>
            <div className={style.experienceItem}>
              <div className={style.experienceHeader}>
                <p>
                  <span
                    className={`${style.companyName} ${style.primaryColor}`}
                  >
                    4MapIT{" "}
                  </span>
                  <span className={style.role}>
                    ― {t("experiences.jobs.two.role")}
                  </span>
                </p>
                <p className={style.period}>
                  {t("experiences.jobs.two.period")}
                </p>
              </div>
              <p className={style.description}>
                {t("experiences.jobs.two.description")}
              </p>
              <ul>
                <li>{t("experiences.jobs.two.activities.one")}</li>
                <li>{t("experiences.jobs.two.activities.two")}</li>
                <li>{t("experiences.jobs.two.activities.three")}</li>
                <li>{t("experiences.jobs.two.activities.four")}</li>
                <li>{t("experiences.jobs.two.activities.five")}</li>
                <li>{t("experiences.jobs.two.activities.six")}</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="projects" className={style.projects}>
          <h2 className={`${style.sectionTitle} ${style.primaryColor}`}>
            {t("projects.title")}
          </h2>
          <p>{t("projects.text")}</p>
        </section>
      </div>
    </main>
  );
};
export default Resume;
