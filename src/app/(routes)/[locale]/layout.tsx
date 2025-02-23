import "@/styles/globals.scss";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { routing } from "@/i18n/routing";
import { TLocale } from "@/types/locale.type";

type AppLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Isaque Duarte | Portfolio",
  description: "My Portfolio",
};

export default async function AppLayout({
  children,
  params,
}: AppLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as TLocale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="relative">
        <Toaster position="bottom-center" />
        <ThemeProvider attribute="class">
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
