"use client"

import style from "@/styles/portfolio/landing/contact.module.scss";
import { Form } from "@/components/sections/contact/form/form";
import { FadeIn } from "@/components/ui/custom/shared/fade-in";
import { useTranslations } from "next-intl";
import { useState } from "react";

export const Contact = () => {
  const t = useTranslations("contact");
  const [useFormIsSubmitted, setFormIsSubmitted] = useState(false);

  return (
    <div
      id="contact"
      className={`py-4 px-4 w-full min-h-[90vh] flex flex-col items-center justify-center ${style.contactContainer}`}
    >
      <FadeIn
        duration={2000}
        className="w-full lg:w-5/6 xl:w-4/5 2xl:w-5/6 flex flex-col items-center justify-center gap-10 md:gap-32 lg:gap-40 xl:gap-24"
      >
        <div
          id="contact-header"
          className="w-full flex flex-col items-center justify-center gap-1"
        >
          <div>
            <h1 className="text-center">
              <span className="text-primary-gradient">{t("title")}</span> 📫
            </h1>
          </div>
          <h3 className="text-center">{t("subTitle")}</h3>
        </div>
        {useFormIsSubmitted ? <p>{t("success")}</p> : <Form setFormIsSubmitted={setFormIsSubmitted} />}
      </FadeIn>
    </div>
  );
};
