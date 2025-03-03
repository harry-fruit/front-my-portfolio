"use client";

import style from "@/styles/portfolio/landing/contact/form.module.scss";
import { Input } from "@/components/shared/Input";
import { TextArea } from "@/components/shared/TextArea";
import { Button } from "@/components/sections/contact/form/Button";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { contactEmail } from "@/lib/validations/contact-email";




export const Form = () => {
  const t = useTranslations("contact");

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string, message?: string }>({});
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validate form data before sending
    const result = contactEmail({
      name: t("errors.name"),
      email: t("errors.email"),
      message: t("errors.message"),
    }).safeParse(formData);
    if (!result.success) {
      // Extract errors from Zod
      const formattedErrors = result.error.flatten().fieldErrors;
      setErrors({ name: formattedErrors.name?.[0], email: formattedErrors.email?.[0], message: formattedErrors.message?.[0] });
      return;
    }

    setErrors({});

    const res = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setMessage(data.success || data.error);
  }

  return (
    <div id="contact-form" onSubmit={handleSubmit} className="w-full md:w-4/5 xl:w-3/5 2xl:w-3/6">
      {/* <form onSubmit={handleSubmit} className={`w-full ${style.form}`}> */}
      <form className={`w-full ${style.form}`}>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder={t("inputNamePlaceholder")}
          className={`w-full ${style.inputName}`}
          error={errors.name}
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
        />
        <Input
          id="email"
          type="email"
          name="email"
          placeholder={t("inputEmailPlaceholder")}
          className={`w-full ${style.inputEmail}`}
          required
          error={errors.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
        />
        <TextArea
          id="message"
          name="message"
          placeholder={t("inputMessagePlaceholder")}
          className={`w-full ${style.inputMessage}`}
          required
          error={errors.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          value={formData.message}
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
