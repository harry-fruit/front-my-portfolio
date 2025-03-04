import { NextRequest } from "next/server";

export const getLocaleInHeaderRequest = (req: NextRequest) => {
  const acceptLanguage = req.headers.get("accept-language")?.split(",")[0];
  return acceptLanguage;
};

export const resolveLocale = (locale: string | undefined) => {
  if (!locale) return "en";

  if (locale.match(/pt/)) return "pt-BR";

  return "en";
};
