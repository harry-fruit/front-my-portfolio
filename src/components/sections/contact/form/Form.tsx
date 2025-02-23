"use client";

import style from "@/styles/portfolio/landing/contact/form.module.scss";
import { Input } from "@/components/shared/Input";
import { TextArea } from "@/components/shared/TextArea";
import { Button } from "@/components/sections/contact/form/Button";
import { useTranslations } from "next-intl";

export const Form = () => {
  const t = useTranslations("contact");
  // const [state, handleSubmit] = useForm("mbjnneyo");

  // if (state.succeeded) {
  //   return <p>{t("success")}</p>;
  // }

  return (
    <div id="contact-form" className="w-full md:w-4/5 xl:w-3/5 2xl:w-3/6">
      {/* <form onSubmit={handleSubmit} className={`w-full ${style.form}`}> */}
      <form className={`w-full ${style.form}`}>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder={t("inputNamePlaceholder")}
          className={`w-full ${style.inputName}`}
          required
        />
        <Input
          id="email"
          type="email"
          name="email"
          placeholder={t("inputEmailPlaceholder")}
          className={`w-full ${style.inputEmail}`}
          required
        />
        <TextArea
          id="message"
          name="message"
          placeholder={t("inputMessagePlaceholder")}
          className={`w-full ${style.inputMessage}`}
          required
        />
        <Button
          type={"submit"}
          text={t("inputButton")}
          showArrow
          styleType="fullfill"
          className={`w-full mt-4 lg:mt-16 xl:mt-10 xl:w-[50%] 2xl:w-[35%] ${style.inputButton}`}
        />
      </form>
    </div>
  );
};
