"use client";

import { Link } from "@/navigation";
import style from "@/styles/components/navbar/navbar.module.scss";
import { Dispatch, MouseEvent, SetStateAction, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle/ThemeToggle";
import { Dropdown, DropdownOptions } from "@/components/shared/Dropdown";
import { BrazilFlag } from "@/components/icons/flags/Brazil";
import { USFlag } from "@/components/icons/flags/US";

type NavbarProps = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};


export const Navbar = ({ isActive, setIsActive }: NavbarProps) => {
  const t = useTranslations("navbar");
  const [,startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleLanguageChange = (event: MouseEvent<HTMLLIElement>) => {
    const { value } = event.currentTarget.dataset;
    startTransition(() => router.replace(`/${value}`));
  };

  const getDropdownOptions = (): DropdownOptions => {
    return dropdownOptions.map((option) => {
      if (option.value === locale) {
        option.selected = true;
      } else {
        option.selected = false;
      }
      return option;
    });
  };

  const dropdownOptions: DropdownOptions = [
    {
      value: "en",
      label: t("accessibility.languages.english"),
      selected: false,
      icon: <USFlag />
    },
    {
      value: "pt-BR",
      label: t("accessibility.languages.portuguese"),
      selected: false,
      icon: <BrazilFlag />
    },
  ];

  return (
    <nav className={`${style.navbar} ${isActive ? style.active : ""}`}>
      <div className={`${style.content} ${isActive ? style.active : ""}`}>
        <section className={style.navigation}>
          <ul>
            <li>
              <Link href={"/about"} onClick={toggleMenu}>
                {t("about")}
              </Link>
            </li>
            <li>
              <Link href={"/#experiences"} onClick={toggleMenu}>
                {t("experiences")}
              </Link>
            </li>
            <li>
              <Link href={"/#projects"} onClick={toggleMenu}>
                {t("projects")}
              </Link>
            </li>
            <li>
              <Link href={"/resume"} target="_blank">
                {t("resume")}
              </Link>
            </li>
          </ul>
        </section>
        <section className={style.getInTouch}>
          <h2>{t("sayHello")}</h2>
          <ul>
            <li>
              <Link href="mailto:isaqueduarte17@gmail.com">E-Mail</Link>
            </li>
          </ul>
        </section>
        <section className={style.accessibility}>
          <h2>{t("accessibility.title")}</h2>
          <ul className={style.accessibilityList}>
            <li className={style.accessibilityItem}>
              <ThemeToggle />
            </li>
            <li className={style.accessibilityItem}>
              <Dropdown
                onChange={handleLanguageChange}
                options={getDropdownOptions()}
              />
            </li>
          </ul>
        </section>
      </div>
      <section className={`${style.socials}`}>
        <ul>
          <li>
            <Link
              title={t("links.githubTitle")}
              href={"https://github.com/harry-fruit"}
              target="_blank"
            >
              GH
            </Link>
          </li>
          <li>
            <Link
              title={t("links.linkedInTitle")}
              href={"https://www.linkedin.com/in/isaque-d-moreira-578697191/"}
              target="_blank"
            >
              LN
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};
