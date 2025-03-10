"use client";

import style from "@/styles/components/header.module.scss";
import useHeader from "@/hooks/useHeader";
import { ProjectIcon } from "@/components/icons/ProjectIcon";
import { MenuButton } from "@/components/navbar/MenuButton";
import { Navbar } from "@/components/navbar/Navbar";
import { useState } from "react";
import { Link } from "@/navigation";

export const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const { isOnIntro } = useHeader();

  const toggleNavbar = () => { 
    setNavbarActive(!navbarActive); 
  };

  const closeNavbar = () => {
    setNavbarActive(false);
  }; 

  return (
    <header
      id="header"
      className={`${style.header} ${isOnIntro ? style.onIntro : ""} ${
        navbarActive ? style.navbarActive : ""
      }`}
    >
      <div className={style.headerIconsWrapper}>
        <Link href={"/"} onClick={closeNavbar} className="text-white">
          <ProjectIcon width="40" height="40" className={style.projectIcon} />
        </Link>
        <MenuButton
          isActive={navbarActive}
          onClick={toggleNavbar}
          className={style.menuButton}
        />
      </div>
      <div
        className={`${style.navbarWrapper} ${navbarActive ? style.active : ""}`}
      >
        <Navbar isActive={navbarActive} setIsActive={setNavbarActive} />
      </div>
    </header>
  );
};
